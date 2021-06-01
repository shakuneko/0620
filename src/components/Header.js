import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import HamMenu from "./HamMenu";
import { useState } from "react";
import { Button } from "antd";

export default function Header() {
    const [activeNavItem] = useState('');
    const [visible, setStatetVisible] = useState(false);
    const onSelect = name => (
        // activeNavItemSet(name),
        setStatetVisible(true)
    )

    const ViewProfileButton = ({name}) => {
        return <Button  style={{float:"right"}}  className="ham-menu-btn" onClick={()=>onSelect(name) }>
            <img alt="" className="ham-menu-icon" src="https://img.onl/kTUjl9"></img>
        </Button>
    }

    const onClose = () => setStatetVisible(false)

    return (
       <div className="header">
           <div className="header-text">
                <Link to="/">
                    <h3 className="header-title">
                        Your Home
                    </h3>
                </Link>
            </div>

            <div className="navbar">
                {/* <UserInfo style={{marginRight: '20px'}} /> */}
                <NavBar />
                <ViewProfileButton  />
            </div>
            <HamMenu player={activeNavItem} visible={visible} onClose={onClose}/>
       </div>
    );
 }