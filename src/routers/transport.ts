import Transport from "../views/Transport/Transport";
import CommuteIcon from '@material-ui/icons/Commute';
// @material-ui/icons
const transportRoutes = [

    {
        path: '/transport',
        name: 'Transport',
        icon: CommuteIcon,
        component: Transport,
        layout: '/admin',
        children: [
            {
                path: '/Dashboard',
                name: 'Dashboard',
                component: Transport,
                layout: '/admin'
            },
            {
                path: '/typography',
                name: 'Typography',
                component: Transport,
                layout: '/admin'
            },
        ]
    },
];

export default transportRoutes;
