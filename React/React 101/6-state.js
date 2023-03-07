import React,{ useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)
    const [amount, setAmount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <h1>{value}</h1>
        <button onClick={()=> setCount(count + 1)}>Arttır</button>
        <button onClick={()=> setValue(value + 5)}>+5</button>
        <hr/>

        <h1>{amount}</h1>
        <button onClick={()=> setAmount(amount + 1)}>+1</button>
        <button onClick={()=> setAmount(amount + 3)}>+3</button>
        <button onClick={()=> setAmount(amount + 5)}>+5</button>

    </div>
  )
}

export default Counter

//useState OBJ
import React,{useState} from 'react'

function User() {
    const [user, setUser] = useState({name: "ismail", surname: "cubuk"})
  return (
    <div>
        <h2>User</h2>
        {user.name} {user.surname}
        <br/>
        <br/>
        <button>İsmi değiştir</button>
        <button>Soyismi değiştir</button>

        <button onClick={()=> setUser({name :"shanty", surname: "çbk"})}>shanty</button>
        <button onClick={()=> setUser({...user, name :"shanty"})}>soyad aynı</button>
         

    </div>
  )
}

export default User

//useState ARRY
import React,{useState} from 'react'

function Colors() {
    const [colors, setColors] = useState(["red","green","blue"]);
    const handleClick = () => {
      setColors([...colors,"black"])
    }
  return (
    <div>
        <h2>Colors</h2>
        {
            colors.map((color, i) => (
            <div key={i}>{color}</div>
            ))
        }
        <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default Colors

//useState Prev

import React,{useState} from 'react'

function Colors() {
    const [colors, setColors] = useState(["red","green","blue"]);
    const handleClick = () => {
      setColors((prev) => [...prev, "black"]) // önceki haliyle aynı
    }
  return (
    <div>
        <h2>Colors</h2>
        {
            colors.map((color, i) => (
            <div key={i}>{color}</div>
            ))
        }
        <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default Colors