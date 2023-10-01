//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import MenuNavbarButton from "./MenuNavbarButton"
import { Link } from "react-router-dom"
import styled from "styled-components";

const Navbar = styled(Link)`
    color: #757575;
    text-decoration: none;
`;

const NavbarComponent = (show) => {

    return (
    <div style={{ padding: '12px 8px', width:'315px', boxShadow: '0px 0px 5px 3px lightgray', height:'100%', position:'fixed',}}>

            <MenuNavbarButton icon="fa-solid fa-table-columns" label='Bảng điều khiển' show={show} />

            <Navbar to='/user' ><MenuNavbarButton icon="fa-solid fa-user" label='Quản lý người dùng' show={show} /></Navbar>

            <MenuNavbarButton icon="fa-regular fa-chart-bar" label='Phân loại học' show={show} />

            <Navbar to='/' ><MenuNavbarButton icon="fa-solid fa-otter" label='Loài nguy cấp quý hiếm' show={show} /></Navbar>
    </div>
    )

}

export default NavbarComponent