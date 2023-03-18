

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom'
import { FaUser, FaHistory } from "react-icons/fa";
import { SiSimpleanalytics } from 'react-icons/si'
import { GrUserWorker } from 'react-icons/gr'
import { BsFillArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs"
import { useState } from "react"
// import { SiSimpleanalytics } from 'react-icons/si';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

function Admin() {
  const [icon, setIcon] = useState("right");

  const changeIcon = (e) => {
    if (e === "right") {
      return "left";
    }
    return "right";
  };



  const { collapseSidebar } = useProSidebar();
  return (
    <>
      <div style={{ display: 'flex', height: '75vh' }}>
        <Sidebar defaultCollapsed={true} overlayColor='rgba(98,198,221,255)'>
          <Menu closeOnClick={false} >
            <MenuItem icon={<SiSimpleanalytics />} routerLink={<Link to="Analytics" />}> Anayltics</MenuItem>
            <MenuItem icon={<GrUserWorker />} routerLink={<Link to="Employees" />}> Employees</MenuItem>
            <MenuItem icon={<FaUser />} routerLink={<Link to="Employers" />}> Employers</MenuItem>
            <MenuItem icon={<FaHistory />} routerLink={<Link to="Workhistory" />}> Work History</MenuItem>
            <MenuItem icon={<PendingActionsIcon style={{ color: 'red' }} />} routerLink={<Link to="Actions" />}>Actions</MenuItem>
            {/* <MenuItem routerLink={<Link to="Logout" />}> </MenuItem> */}

          </Menu>
        </Sidebar>
        <main>
          <button onClick={() => { collapseSidebar(); setIcon((old) => changeIcon(old)); }}>
            {icon === "right" ? <BsFillArrowRightSquareFill size={30} /> : <BsArrowLeftSquareFill size={30} />}
          </button>
          <Outlet />
        </main>
      </div>
    </>
  );
}


export default Admin