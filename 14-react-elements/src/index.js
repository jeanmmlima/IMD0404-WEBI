import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ItemList from './components/ItemList';
import ItemListClick from './components/ItemListClick';
import CustomForm from './components/CustomForm';
import FormMultipleFields from './components/FormMultipleFields';
import ControlledComponentEx from './components/ControlledComponentEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ItemList />
    <ItemListClick /> */}
    <ControlledComponentEx />
    {/* <CustomForm />
    <FormMultipleFields /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
