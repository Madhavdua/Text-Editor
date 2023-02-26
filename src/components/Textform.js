import React,{useState} from 'react'
import PropTypes from 'prop-types'


function Textform(props) {
    const[text,setText] = useState("Type something here")

    const writing=(e)=>{
        console.log("changing text");
        setText(e.target.value);
    }


    const upperCase=(e)=>{
        let t=text.toUpperCase();
        setText(t);
        console.log("uppercase clicked");
        props.showAlert('success','Converted to uppercase')
      
    }
    const lowerCase=(e)=>{
        let t=text.toLowerCase();
        setText(t);
        console.log("lowercase clicked");
        props.showAlert('success','Converted to lowercase')
    }
    const clear=()=>{
        console.log("clear button clicked");
        props.showAlert('success','Text cleared')
        setText("");
    }
    const copyClipboard=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('success','Copied to clipboard')
    }
    const increaseFont=()=>{
        let copy=document.getElementById('exampleFormControlTextarea1');
        let s=copy.style.fontSize.substring(0,2);
        let sNo=parseInt(s);
        if(s<=55){
            sNo+=3;
        }
        else{
            alert("Max font size reached");
        }
        s=sNo.toString()+"px";
        console.log(s+" "+typeof(s));
        copy.style.fontSize=s;
    }
    const decreaseFont=()=>{
        let copy=document.getElementById('exampleFormControlTextarea1');
        let s=copy.style.fontSize.substring(0,2);
        let sNo=parseInt(s);
        if(s>=13){
            sNo-=3;
        }
        else{
            alert("Max font size reached");
        }
        s=sNo.toString()+"px";
        console.log(s+" "+typeof(s));
        copy.style.fontSize=s;
    }
    const format=()=>{
        let arr=text.split(/[ ]+/);
        console.log(arr);
        setText(arr.join(" "));
    }
    
  return (
    <>
    <div>
        <div className="container my-6" >
            <div className="mb-2" style={{color:`${props.textColor}`}}>
            <label htmlFor="exampleFormControlTextarea1" style={{fontSize:"25px"}} className="form-label">{props.details}</label>
            <textarea className={`form-control`} value={text} onChange={writing} id="exampleFormControlTextarea1" rows="3" style={{fontSize:"20px" ,backgroundColor:`${props.mode==='light'?"white":"	rgb(208,208,208)"}`}}></textarea>
            <div className="container my-2" >
            <button type="button" onClick={upperCase} className="btn btn-info  my-2 mx-1" disabled={(text.length===0)}>UpperCase</button>
            <button type="button" onClick={lowerCase} className="btn btn-info  mx-1 my-2" disabled={(text.length===0)}>LowerCase</button>
            <button type="button" onClick={clear} className="btn btn-info my-2 mx-1" disabled={(text.length===0)}>Clear</button>
            <button type="button" onClick={increaseFont} className="btn btn-info  mx-1 my-2" disabled={(text.length===0)}>Increase Font</button>
            <button type="button" onClick={copyClipboard} className="btn btn-info my-2 mx-1" disabled={(text.length===0)}>Copy to clipboard</button>
            <button type="button" onClick={decreaseFont} className="btn btn-info  mx-1 my-2" disabled={(text.length===0)}>Decrease Font</button>
            <button type="button" onClick={format} className="btn btn-info my-2 mx-1 " disabled={(text.length===0)}>Clear Extra space</button>
            </div>
            </div>
        </div>
    </div>
    <div className="container" style={{color:props.textColor}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length>=1?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}

Textform.propTypes = {
    details: PropTypes.string
}
Textform.defaultProps={
    details:"Enter anything"
}

export default Textform