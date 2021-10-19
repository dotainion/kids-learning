import { useState } from 'react';
import cover from '../images/cover.jpg';
import { GrLinkNext } from 'react-icons/gr';
import { useTalk } from '../tools/Talk';

export const Learn = () =>{
    const { transcript, resetTranscript, toggleListen, startListening, stopListening, ListenBtn } = useTalk();
    return(
        <div className="centered" style={{marginTop:"50px",textAlign:"center"}}>
            <div className="contents-container">
                Read about ways to help others then do the exercises to help you practise your reading in English.
            </div>
            <div className="contents-container">
                {transcript}
            </div>
            <ListenBtn />
            <button onClick={resetTranscript} style={{margin:"10px"}}>Reset</button>
        </div>
    )
}