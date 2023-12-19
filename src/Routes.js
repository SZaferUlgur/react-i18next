import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import App from "./App";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);
