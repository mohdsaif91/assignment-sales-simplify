import { configureStore } from "@reduxjs/toolkit";

import { CardReducer } from "./Slice/card";

export default configureStore({
  reducer: {
    card: CardReducer,
  },
});
