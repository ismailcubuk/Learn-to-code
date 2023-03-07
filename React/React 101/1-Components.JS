//1-1 Layer.js
function Layer() {
    return (
        <div>
            <h1>Layer</h1>
        </div>

    )
}
export default Layer
//1-2 app.js
import Layer from "./components/Layer";
function App() {
    return (
        <div>Merhaba
            <Layer />
        </div>
    );
}
export default App;

//2 div kapsayıcısı
import Layer from "./components/Layer";
function App() {
    return (
        <> // kapsayıcı div
            <div>Merhaba</div>
            <div>Merhaba</div>
        </>

    );
}
export default App;

//label for html for

//if else
if ?
else :

//KOŞULLU RENDER

import './App.css';
import Login from "./components/Login";

let isLoggedIn = false
let fullName = "İsmail Cubuk";

function App() {
  return (
     <div>

      {
        isLoggedIn ? "Hoş geldin " + fullName : <Login />
      }

     </div>
  );
}

export default App;
