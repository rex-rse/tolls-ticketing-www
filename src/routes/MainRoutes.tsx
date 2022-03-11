import { lazy } from 'react'

// project imports
import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/Loadable'
import AuthGuard from 'utils/route-guard/AuthGuard'

//Empresas operadoras
const Dashboard = Loadable(lazy(() => import('views/dashboard/Default')))
const ReadFares = Loadable(lazy(() => import('views/fares/ReadFares')))
const CreateFares = Loadable(lazy(() => import('views/fares/CreateFares')))
const EditFares = Loadable(lazy(() => import('views/fares/EditFares')))
const ReadTags = Loadable(lazy(() => import('views/TagsSale/ReadTags')))
const CreateTag = Loadable(lazy(() => import('views/TagsSale/CreateTag')))
const EditTag = Loadable(lazy(() => import('views/TagsSale/EditTag')))
const ViewReports = Loadable(
    lazy(() => import('views/reports/reportsIncome/ReportsIncome'))
)
const CreateAccount = Loadable(lazy(() => import('views/users/CreateAccount')))
const ReadAccount = Loadable(lazy(() => import('views/users/ReadAccount')))
const EditAccount = Loadable(lazy(() => import('views/users/EditAccount')))
const Maintenance = Loadable(lazy(() => import('views/mantenance/Maintenance')))
const ReadTolls = Loadable(lazy(() => import('views/tollSite/ReadTolls')))
const CreateToll = Loadable(lazy(() => import('views/tollSite/CreateToll')))
const EditToll = Loadable(lazy(() => import('views/tollSite/EditToll')))
const ProfileForm = Loadable(lazy(() => import('views/profile/CreateProfile')))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Dashboard />,
        },
        {
            path: '/peajes',
            element: <ReadTolls />,
        },
        {
            path: '/peajes/crear',
            element: <CreateToll />,
        },
        {
            path: '/peajes/editar/:id',
            element: <EditToll />,
        },
        {
            path: '/tarifas',
            element: <ReadFares />,
        },
        {
            path: '/tarifas/crear',
            element: <CreateFares />,
        },
        {
            path: '/tarifas/editar/:id',
            element: <EditFares />,
        },
        {
            path: '/ventaTag',
            element: <ReadTags />,
        },
        {
            path: '/ventaTag/crear',
            element: <CreateTag />,
        },
        {
            path: '/ventaTag/editar/:id',
            element: <EditTag />,
        },
        {
            path: '/reportes',
            element: <ViewReports />,
        },
        {
            path: '/gestion-de-cuentas',
            element: <ReadAccount />,
        },
        {
            path: '/gestion-de-cuentas/crear',
            element: <CreateAccount />,
        },
        {
            path: '/gestion-de-cuentas/editar/:id',
            element: <EditAccount />,
        },

        {
            path: '/mantenimiento',
            element: <Maintenance />,
        },
        {
            path: '/profile',
            element: <ProfileForm />,
        },
    ],
}

export default MainRoutes
