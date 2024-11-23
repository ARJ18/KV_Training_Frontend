// import { ACTION_STATES } from "../utils/constants";
import {  createSlice } from "@reduxjs/toolkit";

const initialState = { employeeList: [] };
const initialAuthState = { isAuthenticated: false, user: null };

// const employeeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTION_STATES.LOAD_LIST: {
//       const newState = { ...state, employeeList: action.payload };
//       return newState;
//     }
//     case ACTION_STATES.ADD_LIST: {
//       const newState = {
//         ...state,
//         employeeList: [...state.employeeList, action.payload],
//       };
//       return newState;
//     }
//     default:
//       return state;
//   }
// };
// export const employeeReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(ACTION_STATES.LOAD_LIST, (state, action) => {
//       state.employeeList = action.payload;
//     })
//     .addCase(ACTION_STATES.ADD_LIST, (state, action) => {
//       state.employeeList.push(action.payload);
//     });
// });
export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    loadEmployee: (state, action) => {
      state.employeeList = action.payload;
    },
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload);
    },
  },
});

export const employeeReducer = employeeSlice.reducer;
export const { loadEmployee, addEmployee } = employeeSlice.actions;
// const authReducer = (state = initialAuthState, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, isAuthenticated: true, user: action.payload };
//     case "LOGOUT":
//       return { ...state, isAuthenticated: false, user: null };
//     default:
//       return state;
//   }
// };

// export const authReducer = createReducer(initialAuthState, (builder) => {
//   builder
//     .addCase("LOGIN", (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     })
//     .addCase("LOGOUT", (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     });
// });
export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {login,logout} = employeeSlice.actions;
