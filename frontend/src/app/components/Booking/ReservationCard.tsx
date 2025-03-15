import React from "react";

interface Reservation {
    id: number;
    customerName: string;
    phone: string;
    partySize: number;
    reservationTime: string;
}

const ReservationCard: React.FC<{ reservation: Reservation }> = ({ reservation }) => {
    return (
        <li key={reservation.id} className="p-4 border border-gray-300 rounded-lg shadow-md bg-white w-full">
            <div className="flex justify-between items-center border-b pb-1 mb-1">
                <h3 className="text-lg font-semibold text-gray-800">{reservation.customerName}</h3>
                <span className="text-sm text-gray-500">{new Date(reservation.reservationTime).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-700"><strong>Party Size:</strong> {reservation.partySize}</p>
            {reservation.phone && (
                <p className="text-gray-700"><strong>Phone:</strong> {reservation.phone}</p>
            )}
            <p className="text-gray-700"><strong>Time:</strong> {new Date(reservation.reservationTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
        </li>
    );
};

export default ReservationCard;

