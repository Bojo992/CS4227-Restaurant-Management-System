"use client";
import { useState } from "react";

interface ReservationFormProps {
    onReservationAdded: (reservation: any) => void;
    frontendMode: boolean;
}

export default function ReservationForm({ onReservationAdded, frontendMode }: ReservationFormProps) {
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [partySize, setPartySize] = useState(1);
    const [reservationTime, setReservationTime] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [modalColor, setModalColor] = useState("");
    const [showModal, setShowModal] = useState(false);

    const getMinDateTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        return now.toISOString().slice(0, 16);
    };

    const validateInputs = () => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        const phoneRegex = /^[0-9]+$/;
        const reservationDate = new Date(reservationTime);
        const now = new Date();

        if (!nameRegex.test(customerName.trim())) {
            showModalMessage("Invalid name. Please enter a valid name.", "bg-red-600");
            return false;
        }
        if (!phoneRegex.test(phone)) {
            showModalMessage("Invalid phone number. Please enter a valid number.", "bg-red-600");
            return false;
        }
        if (partySize < 1 || partySize > 8) {
            showModalMessage("Party size must be between 1 and 8.", "bg-red-600");
            return false;
        }
        if (reservationDate < now) {
            showModalMessage("Reservation time must be from the current time onwards.", "bg-red-600");
            return false;
        }
        const hours = reservationDate.getHours();
        if (hours < 10 || hours >= 22) {
            showModalMessage("Reservations can only be made between 10 AM and 10 PM.", "bg-red-600");
            return false;
        }
        return true;
    };

    const showModalMessage = (message: string, color: string) => {
        setModalMessage(message);
        setModalColor(color);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateInputs()) return;

        const formattedReservationTime = new Date(reservationTime).toISOString().slice(0, 19);
        const reservationData = { customerName, phone, partySize, reservationTime: formattedReservationTime };

        if (frontendMode) {
            storeReservationLocally(reservationData);
            onReservationAdded(reservationData);
            showModalMessage("Reservation stored locally!", "bg-green-600");
        } else {
            try {
                const response = await fetch("http://localhost:8080/ReservationPageController", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(reservationData),
                });

                if (!response.ok) throw new Error("Failed to create reservation");

                showModalMessage("Reservation successfully created!", "bg-green-600");
                onReservationAdded(reservationData);
            } catch (error) {
                showModalMessage("Reservation failed. Please try again.", "bg-red-600");
            }
        }

        setCustomerName("");
        setPhone("");
        setPartySize(1);
        setReservationTime("");
    };

    function storeReservationLocally(reservation: any) {
        let storedReservations = JSON.parse(localStorage.getItem("frontendReservations") || "[]");

        const exists = storedReservations.some(
            (res: any) => res.customerName === reservation.customerName && res.reservationTime === reservation.reservationTime
        );

        if (!exists) {
            storedReservations.push({ ...reservation, id: Date.now().toString() });
            localStorage.setItem("frontendReservations", JSON.stringify(storedReservations));
        }
    }

    return (
        <div>
            {showModal && (
                <div className={`fixed top-10 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white ${modalColor} rounded-lg shadow-md`}>
                    {modalMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Enter your name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black focus:ring-2 focus:ring-blue-400" required/>
                <input type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black focus:ring-2 focus:ring-blue-400" required/>
                <input type="number" min="1" max="8" value={partySize} onChange={(e) => setPartySize(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black focus:ring-2 focus:ring-blue-400" required/>
                <input type="datetime-local" value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} min={getMinDateTime()} className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black focus:ring-2 focus:ring-blue-400" required/>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition">Submit Reservation</button>
            </form>
        </div>
    );
}
