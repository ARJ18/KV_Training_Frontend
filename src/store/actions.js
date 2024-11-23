import { createAction } from "@reduxjs/toolkit";
import { ACTION_STATES } from "../utils/constants";

// export const loadList = (list) => {
//   return {
//     type: ACTION_STATES.LOAD_LIST,
//     payload: list,
//   };
// };
export const loadList = createAction(ACTION_STATES.LOAD_LIST);
export const addList = createAction(ACTION_STATES.ADD_LIST);

// export const addList = (list) => {
//   return {
//     type: ACTION_STATES.ADD_LIST,
//     payload: list,
//   };
// };
