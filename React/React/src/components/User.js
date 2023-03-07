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