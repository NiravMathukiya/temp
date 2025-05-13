// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
// import requestsReducer from "./slices/requestsSlice";
// import other reducers...

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    // requests: requestsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
