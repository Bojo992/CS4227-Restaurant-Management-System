'use client'

import { useState } from "react"

const colourMapping: { [key: string]: string } = {
  main: "bg-red-300",
  starter: "bg-green-300",
  dessert: "bg-yellow-300",
  drink: "bg-blue-300",
  side: "bg-orange-300",
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
  { id: 9, name: "Coffee", type: "drink", price: "3"},
  { id: 10, name: "Brownie", type: "dessert", price: "6"},
  { id: 11, name: "Rice", type: "side", price: "3"},
]

export default function TakeOrder() {
  const [selectedFoods, setSelectedFoods] = useState<{ [key: string]: number }>({})

  const addItem = (food: string) => {
    setSelectedFoods((prev) => ({
      ...prev,
      [food]: (prev[food] || 0) + 1
    }))
  };

  const removeItem = (food: string) => {
    setSelectedFoods((prev) => {
      const foods = { ...prev }
      if (foods[food] > 1) {
        foods[food] -= 1
      } else {
        delete (foods[food])
      }
      return foods;
    })
  };

  return (
    // Grid of items
    <div className="flex gap-4 p-4">
      <div className="grid grid-cols-4 gap-4">
        {food.map((food) => {
          const colour = colourMapping[food.type]
          return (
            <div
              key={food.id}
              className={`border p-4 rounded-lg cursor-pointer ${colour}`}
              onClick={() => addItem(food.name)}
            >
              <p className="text-center mt-2">{food.name}</p>
            </div>
          )
        })}
      </div>

      <div className="w-1/4 border p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2 underline">Selected Foods</h2>
        <ul>
          {Object.entries(selectedFoods).map(([food, count]) => (
            <li key={food} className="flex justify-between items-center py-1">
              {food} {count > 1 && `x${count}`}
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeItem(food)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}