import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
    menu: Array<{ name: string; img: string | null; price: string; cost: string, quantity: string }>;
}

const initialState: MenuState = {
    menu: [
        {name: "Pizza", img: null, price: "12.49", cost: "2.35", quantity: "40"},
        {name: "Burger", img: null, price: "12.49", cost: "2.35", quantity: "40"},
        {name: "Fish and Chips", img: null, price: "12.49", cost: "2.35", quantity: "40"},
    ],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<Array<{ name: string; img: string | null; price: string; cost: string, quantity: string }>>) => {
            state.menu = action.payload;
        },
        addMenuItem: (state, action: PayloadAction<{ name: string; img: string | null; price: string; cost: string, quantity: string }>) => {
            state.menu.push(action.payload);
        },
        deleteMenuItem: (state, action: PayloadAction<string>) => {
            state.menu = state.menu.filter((menuItem) => menuItem.name !== action.payload);
        },
    },
});

export const { setMenu, addMenuItem, deleteMenuItem } = menuSlice.actions;

export default menuSlice.reducer;