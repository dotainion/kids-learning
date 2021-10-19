import { useState } from 'react';
import cover from '../images/cover.jpg';
import { GrLinkNext } from 'react-icons/gr';
import { useHistory } from 'react-router';

export const Cover = () =>{
    const history = useHistory();
    return(
        <div className="centered flex" style={{backgroundColor:"lightgray"}}>
            <div className="relative">
                <img 
                    src={cover} style={{height:"99.5vh"}} 
                    draggable={false} 
                    alt="" 
                />
            </div>
            <div className="relative" style={{width:"50%"}}>
                <button onClick={()=>history.push("/learn")} className="float-center cover-btn" style={{width:"80%"}}>START</button>
            </div>
        </div>
    )
}