import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


// Types for a skill
export interface InputesProps {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  category: string;
}

export interface InputesState {
  data: InputesProps[];
}

// Initial state
const initialState: InputesState = {
  data: []
};

// Slice definition
const inputesSlice = createSlice({
  name: "inputesData",
  initialState,
  reducers: {
    // addSkill: (state, action: PayloadAction<InputesProps>) => {
    //   state.data.push(action.payload);
    // },
    // removeSkill: (state, action: PayloadAction<number>) => {
    //   state.data = state.data.filter((skill) => skill.id !== action.payload);
    // },
    // resetSkills: (state) => {
    //   state.data = [];
    // },
    addSkill: (state, action: PayloadAction<Omit<InputesProps, "id">>) => {
        const {title, description, level, category} = action.payload
        const newSkill = {
            id: uuidv4(),
            title,
            description,
            level,
            category
        }
        state.data.push(newSkill);
    }
  },
});

export const { addSkill } = inputesSlice.actions;
export default inputesSlice.reducer;
