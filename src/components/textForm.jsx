import React, { useState } from 'react';

export default function TextForm(props){
const [text, setText] = useState('');

const handleUpClick = () => {
  setText(text.toUpperCase())
  props.alert('Converted to uppercase', 'success');
  console.log(text.length)
  console.log(text.slice(-1) != ' ')
  console.log(text.split(" "))
}
const handleLoClick = () => {
  setText(text.toLowerCase())
  props.alert('Converted to lowercase', 'success');
}

const handleClrClick = () => {
  document.getElementById('mybox').style.color = document.querySelector('.clr').value;
  props.alert('Color Changed', 'warning');

}
const handleOnChange = (e) => {
  
  setText(e.target.value);
}

return(
  <>
  <div className="container my-3">
    <h2>{props.title}</h2>
  <div className="form-group">
    <textarea style={{color:props.mode==='dark'?'grey':'black',backgroundColor:props.mode==='dark'?'#ccc':'#fff'}} onChange={handleOnChange} className="form-control my-3" id="mybox" rows="8" value={text} placeholder='Enter Your Text Here..'></textarea>
  </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <input className='clr ' type="color"/>
    <button className="btn btn-secondary mx-2" onClick={handleClrClick}>Apply</button>
  </div>
  <div className="container my-4">
    <h2>Your Text Summary</h2>
    <p>{text.length} characters {text.length>0 && text.slice(-1) != ' ' ?text.split(" ").length:text.split(" ").length -1} words</p>
    <p>{text.split(" ").length * 0.008} Minutes Read</p>
    <h1>Preview</h1>
    <p>{text.length>0?text:'Enter a text to preview'}</p>
  </div>
</> 
);


}