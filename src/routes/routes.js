import LayoutHome from 'layouts/LayoutHome/LayoutHome';
import HomeBuilder from 'containers/HomeBuilder/HomeBuilder';

export const routes = [{
  layout: LayoutHome,
  subRoutes: [
    {
      path: "/",
      component: HomeBuilder,
      exact: true,
    },
  ],
},]