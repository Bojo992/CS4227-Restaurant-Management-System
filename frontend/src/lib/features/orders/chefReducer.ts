import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface orderList {
    order: Array<{
        id: number,
        items: Array<{id: number, name: string, type: string, price: string, quantity: number}>,
        cookedItems: Array<{id: number, name: string, type: string, price: string, quantity: number}>
    }>
}

const initialState: orderList = {
    order: [
        {
            id: 0, items: [
                { id: 0, name: "Burger", type: "main", price: "10", quantity: 2, },
                { id: 1, name: "Fries", type: "side", price: "4", quantity: 1, },
                { id: 4, name: "Coke", type: "drink", price: "2", quantity: 1, },
            ], cookedItems: []
        },
        {
            id: 1, items: [
                { id: 0, name: "Burger", type: "main", price: "10", quantity: 2, },
                { id: 1, name: "Fries", type: "side", price: "4", quantity: 1, },
                { id: 4, name: "Coke", type: "drink", price: "2", quantity: 1, },
            ], cookedItems: []
        },
        {
            id: 2, items: [
                { id: 0, name: "Burger", type: "main", price: "10", quantity: 2, },
                { id: 1, name: "Fries", type: "side", price: "4", quantity: 1, },
                { id: 4, name: "Coke", type: "drink", price: "2", quantity: 1, },
            ], cookedItems: []
        },
    ]
}

const chefSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        markAsCooked: (state, action: PayloadAction<{orderId: number, itemId: number}>) => {
            // Find the order with the corresponding orderId, then find the item with the itemId
            // Then move it into the cookedItems, removing it from items.
            const order = state.order.find((order) => order.id === action.payload.orderId);

            if (order) {
                const foodItem = order.items.find((item) => item.id === action.payload.itemId);
                if (foodItem) {
                    order.cookedItems.push(foodItem);
                    order.items = order.items.filter((item) => item.id !== foodItem.id);
                }
            }
        }
    }
})

export const {markAsCooked} = chefSlice.actions;

export default chefSlice.reducer;