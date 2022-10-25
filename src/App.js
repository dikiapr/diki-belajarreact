import React from "react";
import Counter from "./Redux/pembahasan/Counter";
import store from "./app/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
