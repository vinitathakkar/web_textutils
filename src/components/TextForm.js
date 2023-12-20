import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpclick =()=>{
        // console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoclick =()=>{
        // console.log("uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase!", "success")
    }

    
    const clear =()=>{
        // console.log("uppercase was clicked" + text);
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared!", "success")
    }

    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
      }

    const handleOnchange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
 
    const handlecopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard!", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space Remove!", "success")
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading} </h2>
        <div className="mb-3">
            {/* <label for="myBox" className="form-label"></label> */}
            <textarea className="form-control" value={text} onChange={handleOnchange} style = {{backgroundColor: props.mode==='dark'?'grey':'white'
            ,color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clear}>Clear Text </button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handlecopy}>Copy Text </button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={speak}>Speak</button>
        </div>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words</b> and {text.length} <b>characters</b></p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} <b>Minutes read</b></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
   </div>
    </>
  )
}


// A LITTLE MODIFICATION TO START AND STOP THE SPEECH

// const [speaking, setSpeaking] = useState(false);

// const handleSpeakClick = () => {
//         if (!speaking) {
//           let msg = new SpeechSynthesisUtterance();
//           msg.text = text;
//           window.speechSynthesis.speak(msg);
//           setSpeaking(true);
//         } else {
//           window.speechSynthesis.cancel();
//           setSpeaking(false);
//         }
//     }
// <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>{speaking ? 'Stop' : 'Speak'}</button>