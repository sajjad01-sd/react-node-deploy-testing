
import { RiDashboardLine,RiAdminLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BiSpreadsheet } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdStorage } from "react-icons/md";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        icon: <RiDashboardLine/>,
        // eslint-disable-next-line no-undef
        name: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <FiUsers/>,
        // eslint-disable-next-line no-undef
        name: 'Employees',
        path: '/employee'
    },
    {
        icon: <RiAdminLine/>,
        name: 'Administration',
        path: '/adminstration'
    },
    {
        icon: <BiSpreadsheet/>,
        name: 'Sheet',
        path: '/sheet-management'
    },
    {
        icon: <HiOutlineDocumentReport/>,
        name: 'Reports',
        path: '/reports'
    },
    {
        icon: <MdStorage/>,
        name: 'Lead Server',
        path: '/lead-server'
    }
]