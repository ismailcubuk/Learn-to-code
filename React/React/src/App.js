import User from "./components/User"
import Users from "./components/Users"
import Counter from "./components/Counter"
import Colors from "./components/Colors";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (

    <div>


      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Göster/gizle</button>
      <User />
      <Colors />
      <Form />
      <Users />
    </div>
  );
}

export default App;
