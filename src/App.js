import React from "react";
import { connect } from "react-redux";

import Card from "./components/Card";

const App = (props) => {
  const { increment, decrement, value } = props;
  return (
    <div className="App">
      <Card>
        {value}
        <button onClick={increment}>Add 1</button>
        <button onClick={decrement}>Minus 1</button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.app.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
