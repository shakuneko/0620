import {createContext} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from "./page/Home";
import Product from './page/Product';
import Shopping from "./page/Shopping";
import Shop from "./page/Shop";
import Login from './page/Login'
import Register from './page/Register'
import Profile from './page/Profile'
import Shipping from './page/Shipping'
import Payment from './page/Payment'
import Feed from './page/Feed'
import Order from './page/Order'


import { StoreProvider } from "./store";

export const StoreContext = createContext();
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin/feed-products" component={Feed} />
          <Route path="/products/:category/:productId" component={Product} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/Shop" component={Shop} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/order/:orderId" component={Order} />
          <Route path="/profile" component={Profile} />
  
        </Switch>
      </BrowserRouter>
    </StoreProvider>
    
  
  );
}

export default App;