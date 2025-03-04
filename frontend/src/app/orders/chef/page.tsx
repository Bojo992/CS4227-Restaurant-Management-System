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

const sampleOrders: Order[] = []

export function ChefSection() {

    const [orders] = useState<Order[]>(sampleOrders)

    return (
        <div>
            <div className="flex flex-col gap-4 p-4">
                {/* Full Page */}
                <div className="flex">
                    {/* Order List */}
                    <div className="w-1/3">
                        <h1 className="text-center text-lg font-bold underline">Order List</h1>

                    </div>

                    {/* Cooked List */}
                    <div className="w-1/3">
                        {/* List */}
                        <div className="">
                            <h1 className="text-center text-lg font-bold underline">Cooked List</h1>
                            <ul>

                            </ul>
                        </div>
                        {/* Button Div */}
                        <div className="m-2 flex justify-center">
                            <button
                                className="bg-red-400 py-2 px-4 rounded-lg">
                                Mark Order as Cooked
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}