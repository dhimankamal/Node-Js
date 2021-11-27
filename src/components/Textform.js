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
    const handleOnChange = (event) => {
       
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here ");
    return (
     <div className="container my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="10"></textarea>
        <button onClick={handleUpClick} className="btn btn-primary m-2">Upper Text</button>
        <button onClick={handleLowerClick} className="btn btn-danger m-2">Lower Text</button>
      </div>
    )
}
