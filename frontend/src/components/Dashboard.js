import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link, Outlet, useParams } from 'react-router-dom'
import { FaUser, FaHistory } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
// import { MdPayment } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { BsFillArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import { getUsers } from '../service/api';
// import { style } from '@mui/system';

function Dashboard() {
  const [icon, setIcon] = useState("right");


  const changeIcon = (e) => {
    if (e === "right") {
      return "left";
    }
    return "right";
  };




  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '75vh' }}>
      <Sidebar defaultCollapsed={true} overlayColor='rgba(98,198,221,255)'>
        <Menu closeOnClick={false} >
          <MenuItem icon={<FaUser />} routerLink={<Link to="Profile" />}> Profile</MenuItem>
          {/* <MenuItem icon={<FaHistory />} routerLink={<Link to="History" />}> History</MenuItem> */}
          <MenuItem icon={<BsFillStarFill />} routerLink={<Link to="Booking" />}> Booking</MenuItem>
          {/* <MenuItem icon={<MdPayment style={{color:'rgb(25,118,210'}}/>} routerLink={<Link to="Payment"/>}> Payment</MenuItem> */}
          <MenuItem icon={<IoLogOut />} routerLink={<Link to="Logout" />}> Logout</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => { collapseSidebar(); setIcon((old) => changeIcon(old)); }}>
          {icon === "right" ? <BsFillArrowRightSquareFill size={30} /> : <BsArrowLeftSquareFill size={30} />}
        </button>
        <Outlet />
      </main>
    </div>
  );
}


export default Dashboard