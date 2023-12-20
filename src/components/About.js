import React from "react";

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let mystyle = {
    color:props.mode === 'dark'?'white':'#042743',
    backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white'
  }
 
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
            
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt odio, tempore ducimus ipsa placeat, maxime, quo
                  excepturi assumenda accusamus unde explicabo odit
                  necessitatibus? Quo aperiam aut, magnam ea harum dolore.
               
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
               
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  laudantium incidunt quia doloribus culpa ex voluptatum illum
                  iusto quam sunt?
               
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
               
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus, a.
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
