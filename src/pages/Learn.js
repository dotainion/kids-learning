import { useRef, useState } from 'react';
import cover from '../images/cover.jpg';
import { GrLinkNext } from 'react-icons/gr';
import { useTalk } from '../tools/Talk';
import { StatusResults } from '../components/StatusResults';

export const Learn = () =>{
    const { listening, transcript, resetTranscript, toggleListen, startListening, stopListening, ListenBtn } = useTalk();
    
    const contentRef = useRef();
    const readingRef = useRef();
    return(
        <div className="read-page">
            <div className="contents-container">
                <div ref={contentRef} className="contents">
                    Read about ways to help others then do the exercises to help you practise your reading in English.
                </div>
                <div ref={readingRef} className="contents">
                    {transcript}
                </div>
                <StatusResults listening={listening} contentRef={contentRef} readingRef={readingRef} transcript={transcript} />
                <div style={{textAlign:"center"}}>
                    <ListenBtn />
                    <button hidden={!transcript} onClick={resetTranscript} style={{margin:"10px"}}>Reset</button>
                </div>
            </div>
        </div>
    )
}