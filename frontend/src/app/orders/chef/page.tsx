'use client'

import { NavBar } from "@/app/components/navbar/foodBar"
import { useState } from "react"
import {useDispatch, useSelector} from "react-redux";
import { markAsCooked } from "@/lib/features/orders/chefReducer";
import {RootState} from "@/lib/store";

export default function DisplayChefPage() {
    return (
        <div>
            <NavBar />
            <ChefSection />
        </div>
    )
}


function ChefSection() {

    const dispatch = useDispatch();
    const [orderID, setOrderID] = useState<number | null>(null);

    const chefList = useSelector((state: RootState) => state.chef.order)

    const selectOrder = (orderID: number) => {
        setOrderID(orderID);
    }

    const handleMarkAsComplete = (orderId: number, itemId: number) => {
        dispatch(markAsCooked({orderId, itemId}))
    }

    const finishOrder = (orderID: number | null) => {
        // Create Reciept
    }

    const selectedOrder = chefList.find((order) => order.id === orderID);
    const isEverythingCooked = selectedOrder && selectedOrder.items.every((item) => item.quantity === 0);

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Full Page */}
            <div className="flex overflow-x-auto gap-2 border-b pb-4">
                {chefList.map((order) => (
                    <button key={order.id}
                        onClick={() => selectOrder(order.id)}
                        className={`py-2 px-4 ${order.id === orderID ? "bg-blue-200" : "bg-gray-300"} rounded-lg`}>
                        Order #{order.id}
                    </button>
                ))}
            </div>
            <div className="flex">
                {/* Order List */}
                <div className="w-1/3">
                    <h1 className="text-center text-lg font-bold underline">Order List</h1>
                    {selectedOrder && (
                        selectedOrder.items.some((item) => item.quantity > 0) && (
                            <ul className="space-y-2">
                                {selectedOrder.items.map((item, idx) =>
                                    item.quantity > 0 ? (
                                        <li key={idx} className="flex justify-between items-center">
                                            <span>{item.name} x{item.quantity}</span>
                                            <button
                                                onClick={() => handleMarkAsComplete(selectedOrder.id, item.id)}
                                                className="bg-green-300 px-2 py-1 rounded-lg">
                                                Cook
                                            </button>
                                        </li>
                                    ) : null
                                )}
                            </ul>
                        )
                    )}
                </div>

                {/* Cooked List */}
                <div className="w-1/3">
                    {/* List */}
                    <div className="">
                        <h1 className="text-center text-lg font-bold underline">Cooked List</h1>
                        {selectedOrder && selectedOrder.cookedItems.length > 0 && (
                            <ul className="space-y-2">
                                {selectedOrder.cookedItems.map((food, idx) => (
                                    <li key={idx}
                                        className="flex justify-center">
                                        {food.name} x{food.quantity}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* Button Div */}
                    {isEverythingCooked && (
                        <div className="m-2 flex justify-center">
                            <button className="bg-red-400 py-2 px-4 rounded-lg"
                                onClick={() => finishOrder(orderID)}>
                                Mark Order as Cooked
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}