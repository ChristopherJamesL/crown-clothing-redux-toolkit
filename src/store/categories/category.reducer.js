import { createSlice } from "@reduxjs/toolkit";
// import { setCategories } from "./category.action";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
})

export const { setCategories, setIsLoading } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
