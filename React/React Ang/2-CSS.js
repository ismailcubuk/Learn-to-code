//6 CSS = className
.heading{
    color: red;
}
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Hamburger</li>
      <li>Kumpir</li>
      <li>İskender</li>
    </ul>
  </div>,
  document.getElementById("root")
);


//7 CSS = Photo

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="imgb"
        src="https://i2.milimaj.com/i/milliyet/75/0x410/6204e25b86b247177892750c.jpg"
      />
      <img
        className="imgb"
        src="https://i4.hurimg.com/i/hurriyet/75/750x422/5f9c24c00f25442cb0cd76c1.jpg"
      />
      <img
        className="imgb"
        src="https://i.lezzet.com.tr/images-xxlarge-recipe/citir-patates-77942f15-e1b3-42a1-9a7d-3ca5b9e18a8d.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);

//7 CSS = Photo (With Const)

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img} />
  </div>,
  document.getElementById("root")
);



import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img}/>
  </div>,
  document.getElementById("root")
);