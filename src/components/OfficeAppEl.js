import React from "react";

export default function OfficeAppEl(props){

    function openLink(){
        if(props.href){
            window.open(props.href,'_blank').focus();
        }
    }

    return(
        <>
            <div className="OfficeAppEl" onClick={openLink}>
                <div className="icon-office">{props.children}</div>
                <p className="name">{props.name}</p>
            </div>
        </>
    )
}