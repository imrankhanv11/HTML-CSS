import { useEffect, useState } from "react";

function About() {
  const [input, changecount] = useState(1);

  const handleClick = () => {
    changecount(prev => prev + 1); 
  };

  useEffect(()=> {
    console.log("input", input);
  });

  return (
    <div className="container mt-4">
       
      <button className="btn btn-dark" onClick={handleClick}>
        Count
      </button>
      <div className="mt-2">
        <p>Count is : {input}</p>
      </div>
       <div style={{height : "80vh"}}>

        </div>
    </div>
  );
}

export default About;
