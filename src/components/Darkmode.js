import React from "react";


export default function Darkmode(props) {

    // const [mystyle, setmystyle ]  = useState({
    // color:"black",
    // backgroundColor:"white"
    // })

    // const [btnText, setbtnText] = useState("Enable Dark Mode")

    // const toggled = () =>{
    //     if(mystyle.color === "white"){
    //         setmystyle({
    //             color:"black",
    //             backgroundColor:"white"

    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setmystyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border:"1px Solid White"    
    //         })
    //         setbtnText("Disable Dark Mode");
    //     }
    // }

  return (
    <div className="container" >
        <h1 className="my-3">How to Create Dark Mode Button</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item"  style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}>
            <h2 className="accordion-header"  style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}>
                <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}
                >
                Accordion Item #1
                </button>
            </h2>
            <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
            >
                <div className="accordion-body" style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className="accordion-item"  style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}>
            <h2 className="accordion-header">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}
                >
                Accordion Item #2
                </button>
            </h2>
            <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
            >
                <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className="accordion-item"  style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}>
            <h2 className="accordion-header">
                <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style={{backgroundColor: props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}}
                >
                Accordion Item #3
                </button>
            </h2>
            <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
            >
                <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
        </div>

    </div>
  );
}
