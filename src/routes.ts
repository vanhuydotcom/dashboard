// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
// import BubbleChart from '@material-ui/icons/BubbleChart';
// import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommuteIcon from '@material-ui/icons/Commute';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PeopleIcon from '@material-ui/icons/People';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AssessmentIcon from '@material-ui/icons/Assessment';
// import Unarchive from '@material-ui/icons/Unarchive';
// import Language from '@material-ui/icons/Language';



// core components/views for Admin layout
import DashboardPage from './views/Dashboard/Dashboard';
import UserProfile from './views/UserProfile/UserProfile';
// import TableList from './views/TableList/TableList';
import Typography from './views/Typography/Typography';
// import Icons from './views/Icons/Icons';
// import Maps from './views/Maps/Maps';
import NotificationsPage from './views/Notifications/Notifications';
import Orders from './views/Orders/Orders';
import Transport from './views/Transport/Transport';
import Products from './views/Products/Products';
import Customer from './views/Customer/Customer';
import Inventory from './views/Inventory/Inventory';
import Promotion from './views/Promotion/Promotion';
import Report from './views/Report/Report';
// import UpgradeToPro from './views/UpgradeToPro/UpgradeToPro';
// core components/views for RTL layout
// import RTLPage from './views/RTLPage/RTLPage';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Bảng Điều Khiển',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
    // children: null,
  },
  {
    path: '/orders',
    name: 'Tất Cả Đơn Hàng',
    icon: ShoppingCartIcon,
    component: Orders,
    layout: '/admin',
    children: [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        icon: Notifications,
        component: NotificationsPage,
        layout: '/admin'
      },
      {
        path: '/typography',
        name: 'Typography',
        icon: LibraryBooks,
        component: Typography,
        layout: '/admin'
      },
    ]
  },
  {
    path: '/transport',
    name: 'Vận Chuyển',
    icon: CommuteIcon,
    component: Transport,
    layout: '/admin',
    // children: null,
  },
  {
    path: '/products',
    name: 'Sản Phẩm',
    icon: LoyaltyIcon,
    component: Products,
    children: null,
    layout: '/admin',
  },
  {
    path: '/customer',
    name: 'Khách Hàng',
    icon: PeopleIcon,
    component: Customer,
    // children: null,
    layout: '/admin',
  },
  {
    path: '/inventory',
    name: 'Tồn Kho',
    icon: MoveToInboxIcon,
    component: Inventory,
    // children: null,
    layout: '/admin'
  },
  {
    path: '/promotion',
    name: 'Khuyến Mãi',
    icon: CardGiftcardIcon,
    component: Promotion,
    // children: null,
    layout: '/admin',
    children: [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        icon: Notifications,
        component: NotificationsPage,
        layout: '/admin'
      },
      {
        path: '/typography',
        name: 'Typography',
        icon: LibraryBooks,
        component: Typography,
        layout: '/admin'
      },
    ]
  },
  {
    path: '/report',
    name: 'Báo Cáo',
    icon: AssessmentIcon,
    component: Report,
    // children: null,
    layout: '/admin'
  },
  // {
  //   path: '/user',
  //   name: 'User Profile',
  //   icon: Person,
  //   component: UserProfile,
  //   // children: null,
  //   layout: '/admin'
  // },
  // {
  //   path: '/table',
  //   name: 'Table List',
  //   rtlName: 'قائمة الجدول',
  //   icon: 'content_paste',
  //   component: TableList,
  //   layout: '/admin'
  // },
  // {
  //   path: '/typography',
  //   name: 'Typography',
  //   rtlName: 'طباعة',
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: '/admin'
  // },
  // {
  //   path: '/icons',
  //   name: 'Icons',
  //   rtlName: 'الرموز',
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: '/admin'
  // },
  // {
  //   path: '/maps',
  //   name: 'Maps',
  //   rtlName: 'خرائط',
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: '/admin'
  // },
  // {
  //   path: '/notifications',
  //   name: 'Notifications',
  //   rtlName: 'إخطارات',
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: '/admin'
  // },

  // {
  //   path: '/upgrade-to-pro',
  //   name: 'Upgrade To PRO',
  //   rtlName: 'التطور للاحترافية',
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: '/admin'
  // },
  // {
  //   path: '/rtl-page',
  //   name: 'RTL Support',
  //   rtlName: 'پشتیبانی از راست به چپ',
  //   icon: Language,
  //   component: RTLPage,
  //   layout: '/rtl'
  // }
];

export default dashboardRoutes;
