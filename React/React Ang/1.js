//1
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW İT);

ReactDOM.render(<h1>ASD</h1>,document.getElementById("root"))

//2
var React = require("react");
var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

//3- render meth
ReactDOM.render(
<h1>ASD</h1>
p>this is a paragraph</p>,
document.getElementById("root"))

//3-1 sadece 1 div
ReactDOM.render(
    <div>
      <h1>ASD</h1>
      <p>this is a paragraph</p>
    </div>,
  
    document.getElementById("root")
  );
  

//4
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Hamburger</li>
      <li>Kumpir</li>
      <li>İskender</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//5 CONST
import React from "react";
import ReactDOM from "react-dom";

const name = "ismail"
const num = 7

ReactDOM.render(
  <div>
<h1>Hello {name}!</h1>
<p>Your lucky number is {num}</p>
<p>Your lucky number is {3+4}</p>
<p>Your lucky number is {Math.floor(Math.random()*10)}</p>
  </div>
,document.getElementById("root"))
 

