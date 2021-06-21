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
    <div>
      <h3 className="header-title  header-title-sm" onClick={onClickHeader}>Your Home</h3>
      <header className="shipping-header">
        <div className="header-wrap">
          <div className="shipping-header-text">
            <h1 className="shipping-title" onClick={onClickHeader}>{props.title}</h1>
          </div>
        </div>
    

        <CheckoutSteps {...props}></CheckoutSteps>
      </header>
    </div>
  );
}