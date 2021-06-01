import { useState } from "react";
import { Drawer } from "antd";
import ShopNavItem from "./NavItem";
import ShopHamMenu from "./ShopHamMenu";

export default function ShopNavBar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div>
            <ShopHamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="shop-nav-bar collapse-mobile">
                <p className="shop-nav-item">Categories</p>
                <ShopNavItem to="/Shop" className="shop-nav-item" activeClassName="nav-item--active">
                    All
                </ShopNavItem>
                <ShopNavItem to="/table" className="shop-nav-item" activeClassName="nav-item--active">
                    Table
                </ShopNavItem>
                <ShopNavItem to="/chair" className="shop-nav-item" activeClassName="nav-item--active">
                    Chair
                </ShopNavItem>
                <ShopNavItem to="clock" className="shop-nav-item" activeClassName="nav-item--active">
                    Clock
                </ShopNavItem>
                <ShopNavItem to="/lighting" className="shop-nav-item" activeClassName="nav-item--active">
                    Lighting
                </ShopNavItem>
                <ShopNavItem to="/other" className="shop-nav-item" activeClassName="nav-item--active">
                    Other
                </ShopNavItem>
            </div>
            <Drawer
                title=" "
                placement={"left"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"left"}
                width={400}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#111828" }}
                headerStyle={{ backgroundColor: "#111828", color: "#fff" }}
            >
                 <ShopNavItem onClose={handleCloseDrawer} to="/Shop" className="nav-item" activeClassName="nav-item--active">
                    All
                </ShopNavItem>
                <ShopNavItem onClose={handleCloseDrawer} to="/table" className="nav-item" activeClassName="nav-item--active">
                    Table
                </ShopNavItem>
                <ShopNavItem onClose={handleCloseDrawer} to="/chair" className="nav-item" activeClassName="nav-item--active">
                    Chair
                </ShopNavItem>
                <ShopNavItem onClose={handleCloseDrawer} to="/lighting" className="nav-item" activeClassName="nav-item--active">
                    Lighting
                </ShopNavItem>
                <ShopNavItem onClose={handleCloseDrawer} to="/clock" className="nav-item" activeClassName="nav-item--active">
                    Clock
                </ShopNavItem>
                <ShopNavItem onClose={handleCloseDrawer} to="/other" className="nav-item" activeClassName="nav-item--active">
                    Other
                </ShopNavItem>
            </Drawer>
        </div>
    );
}