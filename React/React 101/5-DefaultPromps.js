import React from 'react'
// user.js

import PropTypes from 'prop-types'

function User({ title, data, colours }) {


    return (
        <div>
            <strong>{title}</strong>
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

User.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string.isRequired, //isRequired (zorunlu alan)
    age: PropTypes.number,
    city: PropTypes.string,
    colours: PropTypes.array
}
User.defaultProps={
    title: "insanlar", //burada yedek kod açabilirsin
};

export default User

//app.js
import User from "./components/User"

function App() {
  return (
    <div>
      <User
        // title="Kişi" // bunu engellersen
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
