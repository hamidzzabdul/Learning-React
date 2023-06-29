import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomePage";
import EditEvent from "./pages/EditEventPage";
import Events from "./pages/EventsPage";
import NewEvents from "./pages/NewEventpage";
import RootPage from "./pages/Root";
import EventsDetails from "./pages/EventDetailPage";
import EventsRoot from "./pages/EventsRoot";

// import MainNavigation from "../components/MainNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                // ....
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":eventId", element: <EventsDetails /> },
          { path: "new", element: <NewEvents /> },
          { path: ":eventId/edit", element: <EditEvent /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
