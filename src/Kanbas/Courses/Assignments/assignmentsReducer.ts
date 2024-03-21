import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import {PayloadAction} from "@reduxjs/toolkit"

const initialState = {
    assignments: assignments,
    assignment: { name: "New Assignment", description: "New Description", points: '', dueDate: '', availableFromDate: '', availableUntilDate: '' },
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                {...action.payload, _id: new Date().getTime().toString()},
                ...state.assignments,
            ];
        },

        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },


        updateAssignment: (state,action) => {
            state.assignments = state.assignments.map((assignment) => {
                if(assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },

        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },

    }
    }
)
export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;