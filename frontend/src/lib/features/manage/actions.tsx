export const DELETE_STAFF = 'DELETE_STAFF';
export const ADD_STAFF = 'ADD_STAFF';

export const addStaff = (newStaff: any) => ({
    type: ADD_STAFF,
    payload: newStaff,
});

export const deleteStaff = (name: any) => ({
    type: DELETE_STAFF,
    payload: name,
});