import Login from "./pages/login/Login";
// import CreateEmployee from "./pages/CreateEmployee";
// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomeLayout } from "./layouts/HomeLayout";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import EditEmployee from "./components/EditEmployee";

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
            { path: "edit/:id", element: <EditEmployee /> },
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
