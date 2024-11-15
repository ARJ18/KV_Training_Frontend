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
      path: "/app",
      element: <HomeLayout />,
      children: [
        {
          path: "employee",
          children: [
            { index: true, element: <EmployeeList /> },
            { path: ":id", element: <EmployeeDetails /> },
          ],
        },
        { path: "create", element: <CreateEmployee /> },
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
