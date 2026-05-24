import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Button } from '@mui/material'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false);
  const [content, setContent] = useState("");

  const list = ["apple","banana","carrot"]

  useEffect(()=>{
    if (!active)
    return;
    const interval = setInterval(()=>{
       setCount((prev)=>(prev + 1)) 
    },1000);

    const timeout = setTimeout(()=>{
      setActive(false);
      alert("Time Exceeded")
    },5000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  },[active])

  useEffect(()=>{
    document.getElementById("color-div").setAttribute("style",`background:${content}`)
  },[content])

  const filteredRows = list.filter((item)=>item.toLowerCase().includes(content.toLowerCase()))

  return (
    <>
     <p>Hello</p>

     {<p>{count}</p>}
    <div id="color-div">
     <Button onClick={()=>{setActive(!active)}}>
      {!active?"Start":"Stop"}
     </Button>
     <Button onClick={()=>{setCount(0)}}>
      Reset
     </Button>
     <input value={content} type="text" onChange={(e)=>{setContent(e.target.value)}} placeholder="Enter color here..."/>
     </div>

     {
      filteredRows.map((item,idx)=>(
        <p>{item}</p>
      ))
     }
    </>
  )
}

export default App
