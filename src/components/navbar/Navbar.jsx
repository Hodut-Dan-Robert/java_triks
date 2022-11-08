import React,{useEffect, useState, useRef} from 'react';
import './navbar.scss';
import logo from '../../images/image1.jpg';

let useClickOutside = (handler) => {
  let domNode = useRef ();


useEffect (() => {
  let maybehandler = (event) => {
    if(!domNode.current.contains (event.target)) {
     handler ();
      
    }
  };
  
  document.addEventListener("mousedown", maybehandler);

return () => {
  document.removeEventListener ("mousedown", maybehandler);
};
});

return domNode


}


function Navbar() {
  const [show, setShow ]=useState(false)

  let domNode = useClickOutside (() => {
  setShow (false);
});


  return (
    
      <div ref={domNode} className="nav">
        <div  className="navbar" >
          <button>JAVA-SCRIPT DEFINITION</button>
          <button  onClick={()=>setShow(!show)}>JAVA-SCRIPT TRICKS</button>
          <button>JAVA-SCRIPT EXAMPLES</button>
        </div>
        <img src={ logo } alt="LOGO" />
        {
       show?<div  className="tricks-list"> 
        <p>Click Outside to Close - React Hook</p>
        <p>trick</p>
        <p>trick</p>
        <p>trick</p>
        <p>trick</p>
      </div> :null }
        {
       show?<div  className="tricks-list-0"> 
        <p>Click Outside to Close - React Hook</p>
        <p>trick</p>
        <p>trick</p>
        <p>trick</p>
        <p>trick</p>
      </div> :null }
      </div>
  
  )
}

 export default Navbar ;
