import Dashboard from "views/Dashboard.js";


var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
];
export default routes;
