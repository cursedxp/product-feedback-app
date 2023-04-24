import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data/getData", () => {
  return axios.get("./data.json").then((response) => response.data);
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: "",
    filterBy: "all",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filterBy = action.payload;
    },
  },

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
//Filter feedbacks by category by using useSelector function in redux
export const filteredFeedbacks = (state) => {
  if (state.data.filterBy === "all") {
    return state.data.data.productRequests;
  } else {
    return state.data.data.productRequests?.filter((item) => {
      return item.category === state.data.filterBy;
    });
  }
};

export const { setFilter } = dataSlice.actions;
export default dataSlice.reducer;
