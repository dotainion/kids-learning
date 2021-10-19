import React, { useEffect, useRef } from 'react';


export const StatusResults = ({transcript, listening, contentRef, readingRef}) =>{
    const resultRef = useRef();
    const percentRef = useRef();

    const status = (percent=0) =>{
        if (percent <= 25){
            resultRef.current.innerText = !transcript? "": "Poor";
        }else if (percent <= 50){
            resultRef.current.innerText = !transcript? "": "Fair";
        }else if (percent <= 75){
            resultRef.current.innerText = !transcript? "": "Good Job";
        }else if (percent <= 100){
            resultRef.current.innerText = !transcript? "": "Excellent";
        }
        percentRef.current.innerText = !transcript? "Click the button and read the above sentence": `${percent.toFixed(2)}%`.replace(".00","");
    }

    const percentage = () =>{
        const content = contentRef.current.innerText;
        const read = readingRef.current.innerText;
        if (content === read) return 100;
        let index = 0;
        for (let i=0; i < content.split(" ").length ; i++){
            if (content.split(" ")[i]?.toLowerCase?.() !== read.split(" ")[i]?.toLowerCase?.()){
                index ++;
            }
        }
        return (100 - ((100 / content.split(" ").length) * index));
    }

    useEffect(()=>{
        if (!listening){
            status(percentage());
        }
    }, [listening]);
    return(
        <div className="status-result-container">
            <div ref={resultRef} style={{}} />
            <div ref={percentRef} style={{width:"100%",textAlign:"center"}}>0%</div>
        </div>
    )
}