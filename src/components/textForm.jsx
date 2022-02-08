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
      // document.getSelection().removeAllRanges() //to deselect text had document.getElById been used 
      props.showAlert("Copied text to clipboard","success");
    }
    const handleClearSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Spaces","success");
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
              className="btn btn-primary mx-2 my-1"
              onClick={handleUppercaseClick}
              disabled={text.length === 0}
            >
              To Uppercase
            </button>
            <button 
              className="btn btn-primary mx-2 my-1"
              onClick={handleLowercaseClick}
              disabled={text.length === 0}
            >
              To Lowercase
            </button>
            <button 
              className="btn btn-primary mx-2 my-1"
              onClick={handleClearClick}
              disabled={text.length === 0}
            >
              Clear Text
            </button>
            <button 
              className="btn btn-primary mx-2 my-1"
              onClick={handleClearSpaces}
              disabled={text.length === 0}
            >
              clear spaces
            </button>
            <button 
              className="btn btn-primary mx-2 my-1"
              onClick={handleCopyToClipboardClick}
              disabled={text.length === 0}
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
            {/*split will return an array of all words and spaces*/ /*filter will filter out empty spaces from array*/}
            <p>{text.split(" ").filter((element)=>element.length!==0).length} words and {text.length} characters</p>
            <p> {.008 * text.split(" ").filter((element)=>element.length!==0).length} minutes read (time needed to read 1 word is 0.008 min)</p>
            <h2>Preview</h2>
            {text.length>0?text:'Nothing to preview'}
          </div>
        </React.Fragment>
    );
}
 
export default TextForm;