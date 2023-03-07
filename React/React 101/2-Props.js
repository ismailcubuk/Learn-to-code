// User.js
import React from 'react'

function User(props) {
console.log(props)

    return (
        <div>
            User
            <div>İsim : {props.name}</div>
            <div>Yaş : {props.age}</div>
            <div>Şehir : {props.city}</div>
            <hr />
        </div>
    )
}

export default User

// App.js
import User from "./components/User"
function App() {
  return (
  <div>
    <User name="İsmail Çubuk" city="Ankara" age={27} />
    <User name="Shanty" city="Mamak" age={26} />
  </div>
  );
}

export default App;
