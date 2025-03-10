import {DELETE_STAFF, ADD_STAFF} from "@/lib/features/manage/actions";

const initialState = {
    staff: [
        {name: "Milan Kovacs", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo1", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo2", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo3", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo4", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo5", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo6", role: "HIGH", rate: "23.45", hours: "40"},
        {name: "Johnny Bravo7", role: "HIGH", rate: "23.45", hours: "40"},
    ]
};

const staffReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DELETE_STAFF:
            return {
                ...state,
                staff: state.staff.filter((staff: any) => staff.name !== action.payload)
            };
        case ADD_STAFF:
            return {
                ...state,
                staff: [...state.staff, action.payload]
            };
        default:
            return state;
    }
}

export default staffReducer;