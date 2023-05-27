import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import UserSlice from "./UserSlice";
export const store = configureStore({
	reducer: {
		users: UserSlice,
	},
});
