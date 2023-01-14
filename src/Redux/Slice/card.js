import { createSlice, current } from "@reduxjs/toolkit";

const initailWallData = [
  {
    id: 1,
    section_title: "What Went Well",
    cards_data: [],
  },
  {
    id: 2,
    section_title: "What can be improved",
    cards_data: [],
  },
  {
    id: 3,
    section_title: "Start doing",
    cards_data: [],
  },
  {
    id: 4,
    section_title: "Action items",
    cards_data: [],
  },
];

const card = createSlice({
  initialState: {
    wallData: JSON.parse(localStorage.getItem("wallData"))
      ? JSON.parse(localStorage.getItem("wallData"))
      : initailWallData,
  },
  name: "cardSlice",
  reducers: {
    addCard: (state, action) => {
      const wallDataCurrent = current(state);
      console.log(action.payload);
      return {
        ...state,
        wallData: wallDataCurrent.wallData.push(action.payload),
      };
    },
  },
});

export const CardReducer = card.reducer;
export const { addCard } = card.actions;