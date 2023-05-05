import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data/getData", () => {
  return axios.get(`/data.json`).then((response) => response.data);
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: "",
    filterBy: "all",
    sortBy: "",
    statusBy: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filterBy = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    setStatus: (state, action) => {
      state.statusBy = action.payload;
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

export const filteredByStatus = (state) => {
  return state.data.data.productRequests?.filter(
    (item) => item.status === state.data.statusBy
  );
};

export const sortAndFilterFeedbacks = (state) => {
  const filtered = filteredFeedbacks(state);
  if (!Array.isArray(filtered)) {
    // check if filtered is not an array
    return []; // return an empty array to prevent errors
  }
  let sorted = [...filtered]; // Create a new mutable array from the filtered array
  switch (state.data.sortBy) {
    case "most-upvotes":
      sorted.sort((a, b) => {
        return a.upvotes - b.upvotes;
      });
      break;
    case "least-upvotes":
      sorted.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
      break;
    case "most-comments":
      sorted.sort((a, b) => {
        return a.comments - b.comments;
      });
      break;
    case "least-comments":
      sorted.sort((a, b) => {
        return b.comments - a.comments;
      });
      break;
    default:
      sorted = filtered;
      break;
  }
  return sorted;
};

export const { setFilter, setSort, setStatus } = dataSlice.actions;
export default dataSlice.reducer;
