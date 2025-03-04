'use client'

import { NavBar } from "@/app/components/navbar/foodBar";
import { useState } from "react";

export default function DisplayWaiterPage() {
    return (
        <div>
            <NavBar />
            <WaiterSection />
        </div>
    )
}
const food = [
    { id: 0, name: "Burger", type: "main", price: "10" },
    { id: 1, name: "Salad", type: "starter", price: "8" },
    { id: 2, name: "Pizza", type: "main", price: "12" },
    { id: 3, name: "Ice Cream", type: "dessert", price: "5" },
    { id: 4, name: "Pasta", type: "main", price: "10" },
    { id: 5, name: "Wrap", type: "starter", price: "6" },
    { id: 6, name: "Chips", type: "side", price: "4" },
    { id: 7, name: "Mega Burger", type: "main", price: "20" },
    { id: 8, name: "Coke", type: "drink", price: "2" },
    { id: 9, name: "Coffee", type: "drink", price: "3" },
    { id: 10, name: "Brownie", type: "dessert", price: "6" },
    { id: 11, name: "Rice", type: "side", price: "3" },
]

const colourMapping: { [key: string]: string } = {
    main: "bg-red-400",
    starter: "bg-green-400",
    dessert: "bg-yellow-400",
    side: "bg-orange-400",
    drink: "bg-blue-400"
}



export function WaiterSection() {
    const [selectedFoods, setSelectedFoods] = useState<{ [key: string]: number }>({})

    const addFoodToList = (food: string) => {
        setSelectedFoods((foodList) => ({
            ...foodList,
            [food]: (foodList[food] || 0) + 1
        }))
    };

    const removeFoodFromList = (food: string) => {
        setSelectedFoods((foodList) => {
            const foods = { ...foodList };
            if (foods[food] > 1) {
                foods[food] -= 1;
            } else {
                delete (foods[food]);
            }
            return foods;
        })
    }

    const createOrder = () => {

    }

    return (
        <div>
            {/* Full Page */}
            <div className="flex flex-col gap-4 p-4">
                <div className="flex gap-4">
                    {/* Table */}
                    <div className="grid grid-cols-4 gap-2 w-1/2 h-96 overflow-hidden">
                        {food.map((food) => {
                            const bgColour = colourMapping[food.type];
                            return (
                                <div key={food.id}
                                    className={`border rounded-lg p-4  min-h-30 h-30 flex items-center justify-center ${bgColour}`}
                                    onClick={() => addFoodToList(food.name)}>
                                    <p className="text-center">{food.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    {/* List & Button */}
                    <div className="w-1/4 rounded-lg p-4 h-64">
                        {/* List */}
                        <div className=" border p-2 rounded-lg overflow-hidden h-80 flex-grow overflow-y-auto">
                            <h1 className="text-lg font-bold text-center underline">
                                Selected Items</h1>
                            <ul>
                                {Object.entries(selectedFoods).map(([food, count]) => (
                                    <li
                                        className="m-2 flex items-center justify-between"
                                        key={food}>
                                        {food} x{count}
                                        <button
                                            className="bg-red-500 rounded p-2 text-white"
                                            onClick={() => removeFoodFromList(food)}>
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Button */}
                        <div>
                            <div className="m-2 flex justify-center">
                                <button
                                    onClick={() => createOrder()}
                                    className="bg-blue-400 px-4 py-2 rounded-lg">
                                    Create Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}