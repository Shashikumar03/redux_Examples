// import { Span } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decNumber, incNumber } from "./actions";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
        <h1>Increment Decrement</h1>
        <h4>using react redux</h4>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span className="quantity_minus">-</span>
          </a>
          <input type="text" name="quanntity" id="" value={myState} />
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
