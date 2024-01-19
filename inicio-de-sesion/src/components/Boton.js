import React from "react";
function Boton([funClick, text]){
    return(
        <button onClick={funClick}>
            {text}
        </button>
    );
}
export default Boton;