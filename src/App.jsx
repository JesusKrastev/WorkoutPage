import { Routes } from "react-router-dom";
import RouteUtils from "@utils/RouteUtils";
import { routes } from "@pages/routes";

export default function App() {
  return (
    <Routes>
      {RouteUtils.generateRouteCollection(routes.public)}
      {RouteUtils.generateRouteCollection(routes.private, true)}
    </Routes>
  );
}
