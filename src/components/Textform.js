import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => { 
        let newText = text.toUpperCase();
        setText (newText) ; 
        props.showAlert("Text Converted to Uppercase","success" );
    }
    const handleLowerClick = () => { 
        let newText = text.toLowerCase();
        setText (newText) ; 
        props.showAlert("Text Converted to Lowercase","success" );
    }
    const handleClearClick = () => { 
        let newText = "";
        setText (newText) ; 
        props.showAlert("Text Cleared","danger" );
    }
    const handleCopyClick = () => { 
       
        navigator.clipboard.writeText(text);
        if(text !== ""){
            props.showAlert("Text Copied","warning" );
        }
       
    }
    const handleExtraspaces = () => { 
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here ");
   
    return (
     <div className={`container my-3 text-${props.mode === "light"?"dark":"light"}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className={`form-control bg-${props.mode === "light"?"light":"dark"} text-${props.mode === "light"?"dark":"light"}`} value={text} onChange={handleOnChange} id="textBox" rows="10"></textarea>
        <button disabled = {text.length === 0} onClick={handleUpClick} className="btn btn-primary m-2">Upper Text</button>
        <button disabled = {text.length === 0} onClick={handleLowerClick} className="btn btn-success m-2">Lower Text</button>
        <button disabled = {text.length === 0} onClick={handleClearClick} className="btn btn-danger m-2">Clear Text</button>
        <button disabled = {text.length === 0} onClick={handleCopyClick} className="btn btn-danger m-2">Copy Text</button>
        <button disabled = {text.length === 0} onClick={handleExtraspaces} className="btn btn-danger m-2">Extra Space Remove</button>
        <p>Total Charcters = {text.length} </p>
        <p>Total Charcters = {text.split(/\s+/).filter((element)=>{return element.length !== 0; }).length} </p>
        <h3>Read Mode</h3>
        <p>{text.length === 0?"Enter Text in text area ":text}</p>
      </div>
    )
}
