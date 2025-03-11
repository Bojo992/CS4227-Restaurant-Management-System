import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StaffState {
    staff: Array<{ name: string; role: string; rate: string; hours: string }>;
}

const initialState: StaffState = {
    staff: [
        {name: "Milan Kovacs", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo1", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo2", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo3", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo4", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo5", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo6", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo7", role: "HIGH", rate: "23.45", hours: "40"},
    ],
};

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        setStaff: (state, action: PayloadAction<Array<{ name: string; role: string; rate: string; hours: string }>>) => {
            state.staff = action.payload;
        },
        addStaff: (state, action: PayloadAction<{ name: string; role: string; rate: string; hours: string }>) => {
            state.staff.push(action.payload);
        },
        deleteStaff: (state, action: PayloadAction<string>) => {
            state.staff = state.staff.filter((staff) => staff.name !== action.payload);
        },
    },
});

export const { setStaff, addStaff, deleteStaff } = staffSlice.actions;

export default staffSlice.reducer;