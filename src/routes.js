import Dashboard from "views/Dashboard.js";
import Login from 'layouts/Login'


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
