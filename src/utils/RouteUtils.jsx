import { Route } from "react-router-dom";
import ProtectRoutes from "@components/ProtectRoutes";

export default class RouteUtils {
  static generateRoute(path, element) {
    return <Route key={path} path={path} element={element} />;
  }

  static generateRouteCollection(collection, isProtected = false) {
    const routes = collection.map((route) =>
      this.generateRoute(route.path, route.element)
    );

    if (isProtected) {
      return (
        <Route key="protected" element={<ProtectRoutes />}>
          {routes}
        </Route>
      );
    }

    return routes;
  }
}
