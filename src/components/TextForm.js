import React, { useState } from "react";
// import '../App.css';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const clickedchange = (e) => {
    setText(e.target.value);
  };

  const onupper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.alertmode("Converted to Uppercase", "success");
  };

  const onlower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.alertmode("Converted to Lowercase", "success");
  };

  const onCapatilize = () => {
  
    let convertedtext = text.split(" ");
    
    let capatilizedtext = "";
    convertedtext.forEach((element)=>{
      capatilizedtext+= element.charAt(0).toUpperCase()+element.slice(1)+" ";
    })
    
    
    setText(capatilizedtext);
    props.alertmode("Converted to Capatilize Case", "success");
  };

  const clear = () => {
    let newtext = "";
    setText(newtext);
    props.alertmode("Textarea cleared", "success");
  };

  const convertItalic = () => {
    document.getElementById("mybox").style.fontStyle = "italic";
    props.alertmode("Converted to Italic", "success");
  };

  const newstyle = {
    background: props.mode === "dark" ? "black" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  const wordcount = () => {
    let wordcount = text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    }).length;

    return wordcount;

    // if (text === "") {
    //   return (wordcount = 0);
    // } else {
    //   return wordcount - 1;
    // }
  };

  const characterscount = () => {
    let newtext = text.split(" ").join("");
    return newtext.length;
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={newstyle}
            value={text}
            onChange={clickedchange}
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={onupper}
          style={newstyle}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-secondary mx-2 my-2"
          onClick={onlower}
          style={newstyle}
          disabled={text.length === 0}
          >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-secondary mx-2 my-2"
          onClick={onCapatilize}
          style={newstyle}
          disabled={text.length === 0}
          >
          Convert to Capatilize Case
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={convertItalic}
          style={newstyle}
          disabled={text.length === 0}
          >
          Convert to Italic
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={clear}
          style={newstyle}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h2>Text summary</h2>
        <p>
          your text has <strong>{wordcount()}</strong> words and{" "}
          <strong> {characterscount()} </strong> characters and you can be learn
          in
          <strong>
            {" "}
            {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * 0.032}{" "}
          </strong>{" "}
          minutes.
        </p>
      </div>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </>
  );
}
