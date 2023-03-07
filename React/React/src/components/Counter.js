import React,{ useState, useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)

useEffect(()=>{
  let interval = setInterval(() => {
    console.log("interval");
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
},[]);


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + amount)}>Arttır</button>
        <hr/>

        <h1>{amount}</h1>
        <button onClick={()=> setAmount(1)}>+1</button>
        <button onClick={()=> setAmount(3)}>+3</button>
        <button onClick={()=> setAmount(5)}>+5</button>

    </div>
  )
}

export default Counter