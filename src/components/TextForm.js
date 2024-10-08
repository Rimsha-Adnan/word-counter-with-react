import React,{useState} from 'react';
export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick =()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopyText =()=>{
        
        
         navigator.clipboard.writeText(text).then(() => {
            alert('Text Copied')
        })
        
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleClearText = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const [text,setText] = useState("");
    
  return (
    <>
    <div className='container' style={{color : props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="dark"?"grey":"white" , color : props.mode==="dark"?"white":"black"}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 " onClick={handleloClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyText}>Copy to Clipboard</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode==="dark"?"white":"#042743"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}  words  {text.length}   characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to Preview it here "}</p>
    </div>
    </>
  );
}
