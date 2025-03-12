import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface orderList {
    items: Array<{id: number, name: string, type: string, price: string, quantity: number}>
}

const initialState: orderList = {
    items: []
}

const orderSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{ id: number, name: string, type: string, price: string, quantity: number}>) => {
            const isExisting = state.items.find((item) => item.id === action.payload.id)
            if (isExisting) {
                isExisting.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        }
    }
});

export const {addItem, removeItem} = orderSlice.actions;

export default orderSlice.reducer;


