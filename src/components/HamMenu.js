import { NavLink } from 'react-router-dom';
import React from 'react';
import {  Drawer,Badge } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { CartIcon2,PofileIcon2 } from "./Icon";


export default function HamMenu({  visible, onClose })    {
    return (
            <Drawer
            destroyOnClose
            title=" Your Home "
            visible={visible}
            placement="right"
            onClose={onClose}
            className="ham-menu"
            key={"left"}
            closeIcon={<CloseOutlined />}
            width={400}
            zIndex={99}
            bodyStyle={{ backgroundColor: "#426393" }}
            headerStyle={{ backgroundColor: "#426393",border:"0",height:"5rem", display:"flex",alignItems:"center",justifyContent:"center" }}
            >
                
                <div className="ham-menu-word">
                    <NavLink to="/inspirations" className="ham-menu1" activeClassName="ham-menu1--active">
                        Inspirations
                    </NavLink>
                    <NavLink to="/shop" className="ham-menu1" activeClassName="ham-menu1--active">
                        Shop
                    </NavLink>
                    <NavLink to="/designers" className="ham-menu1" activeClassName="ham-menu1--active">
                        Designers
                    </NavLink>
                    <NavLink to="/about-Us" className="ham-menu1" activeClassName="ham-menu1--active">
                        About Us
                    </NavLink>
                </div>
                <div className=" ham-menu-icons ">
                    <img alt="" className="ham-menu-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
                    <Link to="/profile">
                        <Badge  size={"small"} style={{ color: 'white', backgroundColor: '#FFC72D' }}>
                            <PofileIcon2 size={50}/>
                        </Badge>
                    </Link>
                    <Link to="/shopping">
                        <Badge  size={"small"} style={{ color: 'white', backgroundColor: '#FFC72D' }}>
                            <CartIcon2 size={50}/>
                        </Badge>
                    </Link>
                </div>
            </Drawer>
            
    
    );
}