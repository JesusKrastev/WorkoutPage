import Landing from "./public/Landing";

export const routes = {
  public: [
    {
      name: "main_page",
      path: "/",
      element: <Landing />,
    },
  ],
  private: [],
};

export function getRouteByName(name) {
  const route = [...routes.public, ...routes.private].find(
    (route) => route.name == name
  );
  return route?.path || "/";
}
