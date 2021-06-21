import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store";
import CheckoutSteps from "./CheckoutSteps";
import { setPage } from "../action"

export default function ShippingHeader(props) {
  const { dispatch } = useContext(StoreContext);
  const history = useHistory();

  const onClickHeader = () => {
    setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
    history.push("/");
  };
    return (
    <div className="order">
      <h3 className="header-title  header-title-sm" onClick={onClickHeader}>Your Home</h3>
      <header className="order-main-layout">
            <h4 className="order-title">{props.title}</h4>
      </header>
      </div>

    );
  }