import { NavLink } from 'react-router-dom';
import React from 'react';
import {  Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

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
                    <img alt="" className="ham-menu-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-account.png"/>
                    <img alt="" className="ham-menu-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-cart.png"/> 
                </div>
            </Drawer>
            
    
    );
}