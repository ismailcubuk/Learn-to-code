//1-1 User.js (OBJ)
import React from 'react'

function User({data:{name, age, city}}) {

    return (
        <div>
            User
            <div>İsim : {name}</div>
            <div>Yaş : {age}</div>
            <div>Şehir : {city}</div>
            <hr />
        </div>
    )
}

export default User

//1-2 app.js (OBJ)
import User from "./components/User"

let user = {
  name: "ismail cubuk",
  city: "ankara",
  age: 57,
}

function App() {
  return (
  <div>
    <User data={user} />

  </div>
  );
}

export default App;

//2-1 User.js (ARRAY)
import React from 'react'

function User({data, colours}) {
console.log(colours)
    return (
        <div>
            User
            <div>İsim : {data.name}</div>
            <div>Yaş : {data.age}</div>
            <div>Şehir : {data.city}</div>
            <h3>Renkler</h3>
            {
                colours.map((colours, i) => (
                    <div key={i}>{colours}</div>
                ))
            }
            <hr />
        </div>
    )
}
export default User

//2-2 app.js (ARRAY)
import User from "./components/User"

let user = {
  name: "murat cubuk",
  city: "ankara",
  age: 57,
}

function App() {
  return (
  <div>
    <User data={user} colours={["siyah","beyaz","mavi","gri"]} />

  </div>
  );
}

export default App;
