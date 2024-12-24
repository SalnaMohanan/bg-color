import React,{useState} from "react";
import './App.css'

function App() {

  const [bgClr,setBgClr]= useState("#ffffff")

  const handleColorChange = (color) =>{
    setBgClr(color);
  }

  return (
    <>
    <div className="app" style={{
      backgroundColor: bgClr,
      height: "100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center"    }} >
    
      <h1>Background Color Changing</h1>

      <div className="btn-Conatainer">
      <button className='btn btn1' onClick={()=>handleColorChange( '#F7AC0A')} >Orange</button>
      <button className='btn btn2 'onClick={()=>handleColorChange( '#0000FF')} >Blue</button>
      <button className='btn btn3' onClick={()=>handleColorChange( '#00FF00')}>Green</button>
      <button className='btn btn4' onClick={()=>handleColorChange( '#FF0000')}>Red</button>
      <button className='btn btn5' onClick={()=>handleColorChange( '#FFFF00')}>Yellow</button>
      </div>
     
      </div>
      
    </>
  )
}

export default App
