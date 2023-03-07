// user.js
import React from 'react'
import PropTypes from 'prop-types'

function User({name, age, city, colours}) {


    return (
        <div>
            Kişi
            <div>İsim : {name}</div>
            <div>Yaş : {age}</div>
            <div>Şehir : {city}</div>
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

User.propTypes = {
    name: PropTypes.string.isRequired, //isRequired (zorunlu alan)
    age: PropTypes.number,
    city: PropTypes.string,
    colours: PropTypes.array
}


export default User

// app.js
import User from "./components/User"

function App() {
  return (
    <div>
      <User
      name ="ismail cubuk"
      city = "ankara"
      age = {26}

        data={{
          name: "ismail cubuk",
          city: "ankara",
          age: 26,
        }}
        colours={["siyah", "beyaz", "mavi", "gri"]}
      />

    </div>
  );
}

export default App;
