import Login from "./pages/Login";
// import CreateEmployee from "./pages/CreateEmployee";
// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomeLayout } from "./layouts/HomeLayout";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Login />, errorElement: <NotFound /> },
    {
      path: "/employee",
      element: <HomeLayout />,
      children: [
        { index: true, element: <EmployeeList /> },
        { path: "create", element: <CreateEmployee /> },
        { path: ":id", element: <EmployeeDetails /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
