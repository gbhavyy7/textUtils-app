import React, { useState } from 'react';
const TextForm = (props) => {
    const [text,setText] = useState("");

    const handleLowercaseClick = () =>{
      setText(text.toLowerCase());
      props.showAlert("Changed text to lowercase","success");
    } 
    const handleUppercaseClick = () =>{
      setText(text.toUpperCase());
      props.showAlert("Changed text to uppercase","success");
    } 
    const handleClearClick = () =>{
      setText("");
      props.showAlert("Cleared Text","success");
    } 
    const handleCopyToClipboardClick = () => {
      navigator.clipboard.writeText(text); 
      props.showAlert("Copied text to clipboard","success");
    }
    // const handleUndoClick = () => setText();

    const handleOnChange = event =>setText(event.target.value);

    return (
        <React.Fragment>
          <div className="container">
            <div className="mb-3" style={{color:props.mode==='light'?'#212529':'white'}}>
              <h1>{props.heading}</h1>
              <textarea 
              className="form-control" id="exampleFormControlTextarea1" rows="9" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'#212529':'white'}} 
              ></textarea>
            </div>
            <button 
              className="btn btn-primary"
              onClick={handleUppercaseClick}
            >
              To Uppercase
            </button>
            <button 
              className="btn btn-primary mx-2"
              onClick={handleLowercaseClick}
            >
              To Lowercase
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleClearClick}
            >
              Clear Text
            </button>
            <button 
              className="btn btn-primary mx-2"
              onClick={handleCopyToClipboardClick}
            >
              Copy to Clipboard
            </button>
            {/* <button 
              className="btn btn-primary"
              onClick={handleUndoClick}
            >
              Undo
            </button> */}
          </div>
          <div className="container my-3" style={{color:props.mode==='light'?'#212529':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {.008 * text.split(" ").length} minutes read (time needed to read 1 word is 0.008 min)</p>
            <h2>Preview</h2>
            {text.length>0?text:'Enter something in the textarea to preview'}
          </div>
        </React.Fragment>
    );
}
 
export default TextForm;