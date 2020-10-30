import React, {useEffect} from 'react';
import './App.css';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadUsers } from './store/users';
import { loadCustomers } from './store/customers';

const store = configureStore();


function App() {

  useEffect(()=>{
    store.dispatch(loadUsers());
    store.dispatch(loadCustomers());
  })

  return (
    <Provider store={store}>
      <React.Fragment>
        
      </React.Fragment>
    </Provider>
  );
}

export default App;
