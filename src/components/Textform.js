import React, { useState } from 'react'

export default function Textform() {
    const handleUpClick = () => { 
        let newText = text.toUpperCase();
        setText (newText) ; 
    }
    const handleLowerClick = () => { 
        let newText = text.toLowerCase();
        setText (newText) ; 
    }
    const handleClearClick = () => { 
        let newText = "";
        setText (newText) ; 
    }
    const handleCopyClick = () => { 
        var copyText = document.getElementById("textBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);  
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
     <div className="container my-3">
        <label htmlFor="exampleFormControlTextarea1"  className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="textBox" rows="10"></textarea>
        <button onClick={handleUpClick} className="btn btn-primary m-2">Upper Text</button>
        <button onClick={handleLowerClick} className="btn btn-success m-2">Lower Text</button>
        <button onClick={handleClearClick} className="btn btn-danger m-2">Clear Text</button>
        <button onClick={handleCopyClick} className="btn btn-danger m-2">Copy Text</button>
        <button onClick={handleExtraspaces} className="btn btn-danger m-2">Extra Space Remove</button>
        <p>Total Charcters = {text.length} </p>
        <p>Total Charcters = {text.split(" ").length} </p>
        <h3>Read Mode</h3>
        <p>{text} </p>
      </div>
    )
}
