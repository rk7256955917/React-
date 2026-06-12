import React,{useEffect,useState} from "react";

const useEffect=()=>{
    const[clicked,setchild]=useState();


    return (
        <div>
            <button onClick={()=> setClicked
                ('subscribe')}>subscribe</button>
            <br/>
            <hr/>
            <button onClick={()=>setClicked('To')}
            >To</button>
            <br/>
            <hr/>
            <button onClick={()=>setClicked('DropXout')}>DropXout</button>
            <h1>{clicked}</h1>
        </div>
    )
}

export default useEffect