"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReservationForm from "../../../components/Booking/ReservationForm";

export default function ReservationPage() {
    const [refresh, setRefresh] = useState(false);
    const [frontendMode, setFrontendMode] = useState<boolean | null>(null); // Prevent SSR hydration mismatch
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("frontendMode");
            setFrontendMode(savedMode === "true");
        }
    }, []);

    const handleReservationAdded = () => {
        setRefresh(!refresh);
    };

    const toggleFrontendMode = () => {
        const newMode = !frontendMode;
        setFrontendMode(newMode);
        localStorage.setItem("frontendMode", JSON.stringify(newMode));
    };

    if (frontendMode === null) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 relative">
            <button
                onClick={() => router.push("/")}
                className="self-start mb-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-lg transition">
                Back
            </button>
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-black">Create Reservation</h2>
                <ReservationForm onReservationAdded={handleReservationAdded} frontendMode={frontendMode} />


                <button
                    onClick={() => router.push(`/manage/Booking/ReservationList?frontendMode=${frontendMode}`)}
                    className="mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg text-lg transition">
                    View Reservations
                </button>
            </div>


            <div className="fixed bottom-6 left-6 flex items-center space-x-2 bg-white p-2 rounded-lg shadow-md border border-gray-300">
                <input
                    type="checkbox"
                    id="frontendMode"
                    checked={frontendMode}
                    onChange={toggleFrontendMode}
                    className="w-5 h-5"
                />
                <label htmlFor="frontendMode" className="text-lg font-semibold text-black">
                    Frontend Mode
                </label>
            </div>
        </div>
    );
}
