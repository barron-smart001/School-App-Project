import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/01-home/Home";
import Fees from "./pages/02-fees/Fees";
import History from "./pages/03-history/History";
import Profile from "./pages/04-profile/Profile";
import Footer from "./layout/Footer";
import type { JSX } from "react/jsx-runtime";
import Onboarding from "./pages/00-onboarding/Onboarding";
import VerifyStudent from "./pages/00-onboarding/VerifyStudent";
import AccountSetUp from "./pages/00-onboarding/AccountSetUp";
import SignIn from "./pages/00-onboarding/SignIn";
import GetStarted from "./pages/00-onboarding/GetStarted";
import Pin from "./pages/00-onboarding/Pin";
import PasswordReset from "./pages/00-onboarding/PasswordReset";
import ProtectedRoute from "./components/ProtectedRoute";

// Layout wrapper - Footer appears only on these pages
const RootLayout = (): JSX.Element => {
  return (
    <>
      <div className="min-h-dvh flex flex-col">
        <div className="flex-1">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  // Onboarding page WITHOUT footer
  {
    path: "/",
    element: <Onboarding />,
  },

  {
    path: "/getstarted",
    element: <GetStarted />,
  },

  {
    path: "/verifystudent",
    element: <VerifyStudent />,
  },

  {
    path: "/accountsetup",
    element: <AccountSetUp />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/pin",
    element: (
      <ProtectedRoute>
        <Pin />
      </ProtectedRoute>
    ),
  },

  {
    path: "/reset-password",
    element: <PasswordReset />,
  },

  // Pages WITH footer
  {
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/fees",
        element: (
          <ProtectedRoute>
            <Fees />
          </ProtectedRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
