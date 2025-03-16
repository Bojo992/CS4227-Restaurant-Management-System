"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReservationCard from "../../../components/Booking/ReservationCard";

export default function ReservationListPage() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [frontendMode, setFrontendMode] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const mode = params.get("frontendMode") === "true";
            setFrontendMode(mode);
        }
    }, []);

    useEffect(() => {
        if (frontendMode === null) return;

        if (frontendMode) {
            // Load from localStorage instead of backend
            const storedReservations = JSON.parse(localStorage.getItem("frontendReservations") || "[]");

            // Remove duplicate reservations
            const uniqueReservations = Array.from(new Map(storedReservations.map(
                (res: { customerName: any; reservationTime: any }) => [`${res.customerName}-${res.reservationTime}`, res]
            )).values());

            setReservations(uniqueReservations);
        } else {
            const fetchReservations = async () => {
                try {
                    const response = await fetch("http://localhost:8080/ReservationListController");
                    if (!response.ok) {
                        throw new Error("Failed to fetch reservations");
                    }
                    const data = await response.json();

                    // Sort by reservation time
                    const sortedReservations = data.sort(
                        (a: any, b: any) =>
                            new Date(a.reservationTime).getTime() - new Date(b.reservationTime).getTime()
                    );

                    setReservations(sortedReservations);
                } catch (error) {
                    console.error("Error loading reservations:", error);
                }
            };
            fetchReservations();
        }
    }, [frontendMode]);

    if (frontendMode === null) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    const groupedReservations: Record<string, any[]> = reservations.reduce((acc, res) => {
        const date = new Date(res.reservationTime).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(res);
        return acc;
    }, {} as Record<string, any[]>);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h2 className="text-2xl font-bold mb-4 text-black">All Reservations</h2>

            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                {Object.keys(groupedReservations).length === 0 ? (
                    <p className="text-gray-500 text-center">No reservations found.</p>
                ) : (
                    <div className="max-h-96 overflow-y-auto p-2 border border-gray-300 rounded-lg bg-gray-50">
                        {Object.keys(groupedReservations).map((date) => (
                            <div key={date} className="mb-2">
                                <h3 className="text-lg font-semibold text-black">{date}</h3>
                                <ul className="space-y-2">
                                    {groupedReservations[date].map((res) => (
                                        <ReservationCard key={res.id || `${res.customerName}-${res.reservationTime}`} reservation={res} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <button
                onClick={() => router.push(`/manage/Booking/ReservationPage?frontendMode=${frontendMode}`)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition">
                Back to Reservation Form
            </button>
        </div>
    );
}
