import React from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";
import RandomUserDetails from './components/RandomUser';
var root = createRoot(document.getElementById("root"));


root.render(<RandomUserDetails />);