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
    <header className="shipping-header">
      <div className="header-wrap">
        <div className="shipping-header-text">
          <h1 className="header-title" onClick={onClickHeader}>{props.title}</h1>
        </div>
      </div>

      <CheckoutSteps {...props}></CheckoutSteps>
    </header>
  );
}
