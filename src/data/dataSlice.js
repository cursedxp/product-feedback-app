import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getData = createAsyncThunk("data/getData", () => {
  return axios.get("./data.json").then((response) => response.data);
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export default dataSlice.reducer;
