import Orders from "../views/Orders/Orders";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// @material-ui/icons
const orderRoutes = [

    {
        path: '/orders',
        name: 'All Orders',
        icon: ShoppingCartIcon,
        component: Orders,
        layout: '/admin',
        children: [
            {
                path: '/orders/Dashboard',
                name: 'Dashboard',
                component: Orders,
                layout: '/admin'
            },
            {
                path: 'orders/typography',
                name: 'Typography',
                component: Orders,
                layout: '/admin'
            },
        ]
    },
];

export default orderRoutes;
