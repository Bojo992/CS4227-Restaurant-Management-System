'use client'

import { NavBar } from "@/app/components/navbar/foodBar"
import { useState } from "react"

export default function DisplayChefPage() {
    return (
        <div>
            <NavBar />
            <ChefSection />
        </div>
    )
}

interface Order {
    id: number,
    items: {
        name: string,
        quantity: number,
        price: number,
    }[]
    cookedItems: {
        name: string,
        quantity: number,
        price: number,
    }[]
}

// HARD CODED EXAMPLES
const sampleOrders: Order[] = [
    {
        id: 0, items: [
            { name: "Burger", quantity: 2, price: 10 },
            { name: "Fries", quantity: 1, price: 4 },
            { name: "Coke", quantity: 1, price: 2 },
        ], cookedItems: []
    },
    {
        id: 1, items: [
            { name: "Pasta", quantity: 2, price: 10 },
            { name: "Ice Cream", quantity: 2, price: 4 },
            { name: "Coke", quantity: 1, price: 2 },
            { name: "Coffee", quantity: 1, price: 3 },
        ], cookedItems: []
    },
    {
        id: 2, items: [
            { name: "Pasta", quantity: 2, price: 10 },
            { name: "Brownie", quantity: 2, price: 4 },
            { name: "Coke", quantity: 1, price: 2 },
            { name: "Coffee", quantity: 1, price: 3 },
        ], cookedItems: []
    },
]

function ChefSection() {

    const [orders, setOrders] = useState<Order[]>(sampleOrders);
    const [orderID, setOrderID] = useState<number | null>(null);

    const selectOrder = (orderID: number) => {
        setOrderID(orderID);
    }

    const cookItem = (orderId: number, foodName: string) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => {
                if (order.id !== orderId) return order;

                const updatedItems = order.items.map((food) =>
                    food.name === foodName && food.quantity > 0
                        ? { ...food, quantity: food.quantity - 1 }
                        : food
                );

                const updatedCookedItems = order.cookedItems.some((food) => food.name === foodName)
                    ? order.cookedItems.map((food) =>
                        food.name === foodName ? { ...food, quantity: food.quantity + 1 } : food
                    )
                    : [...order.cookedItems, { name: foodName, quantity: 1, price: order.items.find((food) => food.name === foodName)?.price || 0 }];
                return { ...order, items: updatedItems, cookedItems: updatedCookedItems };
            })
        );
    };

    const finishOrder = (orderID: number | null) => {
        // Create Reciept
    }

    const selectedOrder = orders.find((order) => order.id === orderID);
    const isEverythingCooked = selectedOrder && selectedOrder.items.every((item) => item.quantity === 0);

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Full Page */}
            <div className="flex overflow-x-auto gap-2 border-b pb-4">
                {orders.map((order) => (
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
                                                onClick={() => cookItem(selectedOrder.id, item.name)}
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