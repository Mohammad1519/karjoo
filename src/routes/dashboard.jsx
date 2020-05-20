import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import { Dashboard, Person, TableChart } from '@material-ui/icons';
import ContractsManagement from '../views/ContractsManagement/ContractsManagement';
import Logout from '../views/Logout/Logout';
import CertificatesManagement from '../views/CertificatesManagement/CertificatesManagement';
import EmployersManagement from '../views/EmployersManagement/EmployersManagement';
import JobSeekersManagement from '../views/JobSeekersManagement/JobSeekersManagement';
import RegisterManagement from '../views/RegisterManagement/RegisterManagement';
import Test from '../views/Test/Test';

const dashboardRoutes = [
	{
		path: '/dashboard',
		sidebarName: 'داشبورد',
		navbarName: 'داشبورد',
		icon: Dashboard,
		component: DashboardPage,
	},
	{
		path: '/registerManagement',
		sidebarName: 'مدیریت ثبت نام های اولیه',
		navbarName: 'مدیریت ثبت نام های اولیه',
		icon: TableChart,
		component: RegisterManagement,
	},
	{
		path: '/jobSeekersManagement',
		sidebarName: 'مدیریت کارجویان',
		navbarName: 'مدیریت کارجویان',
		icon: TableChart,
		component: JobSeekersManagement,
	},
	{
		path: '/employersManagement',
		sidebarName: 'مدیریت کار فرمایان',
		navbarName: 'مدیریت کار فرمایان',
		icon: TableChart,
		component: EmployersManagement,
	},
	{
		path: '/contractsManagement',
		sidebarName: 'مدیریت قرارداد ها',
		navbarName: 'مدیریت قرارداد ها',
		icon: TableChart,
		component: ContractsManagement,
	},
	{
		path: '/certificatesManagement',
		sidebarName: 'مدیریت گواهینامه ها',
		navbarName: 'مدیریت گواهینامه ها',
		icon: TableChart,
		component: CertificatesManagement,
	},

	{
		path: '/logout',
		sidebarName: 'خروج',
		navbarName: 'خروج',
		icon: TableChart,
		component: Logout,
	},
	// {
	//   path: "/typography",
	//   sidebarName: "Typography",
	//   navbarName: "Typography",
	//   icon: LibraryBooks,
	//   component: Typography
	// },
	// {
	//   path: "/icons",
	//   sidebarName: "Icons",
	//   navbarName: "Icons",
	//   icon: BubbleChart,
	//   component: Icons
	// },
	// {
	//   path: "/maps",
	//   sidebarName: "Maps",
	//   navbarName: "Map",
	//   icon: LocationOn,
	//   component: Maps
	// },
	// {
	//   path: "/notifications",
	//   sidebarName: "Notifications",
	//   navbarName: "Notifications",
	//   icon: Notifications,
	//   component: NotificationsPage
	// },
	{ redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' },
];

export default dashboardRoutes;
