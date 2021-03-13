  
import React from "react";
import Navigation from "./Navigation/navigation";
import { Provider } from 'react-redux'
import store from './Redux/Store'
function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;