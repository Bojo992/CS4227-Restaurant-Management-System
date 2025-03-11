import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TableState {
    tables: Array<{ id: number; x: number; y: number; }>;
}

const initialState: TableState = {
    tables: [],
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setTables: (state, action: PayloadAction<Array<{ id: number; x: number; y: number; }>>) => {
            state.tables = action.payload;
        },
        addTable: (state, action: PayloadAction<{ id: number; x: number; y: number; }>) => {
            state.tables.push(action.payload);
        },
        deleteTable: (state, action: PayloadAction<number>) => {
            state.tables = state.tables.filter((table) => table.id !== action.payload);
        },
        clearTables: (state) => {
            state.tables = [];
        }
    },
});

export const { setTables, addTable, deleteTable, clearTables } = tableSlice.actions;

export default tableSlice.reducer;