import React, { createContext, useContext } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const TalkContext = createContext();
export const useTalk = () => useContext(TalkContext);

export const TalkProvider = ({children}) =>{
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({continuous:true});
  const stopListening = () => SpeechRecognition.stopListening();
  const toggleListen = () => listening ? stopListening() : startListening();
  const ListenBtn = ({cssClass}) =>(
    <button 
      onClick={toggleListen} 
      className={`round-btn ${cssClass} ${listening && 'talking-border'}`} 
    >{listening ? 'Done' : 'Talk'}</button>
  )

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const providers = {
    transcript,
    listening,
    resetTranscript,
    startListening,
    stopListening,
    toggleListen,
    ListenBtn
  }
  return (
    <TalkContext.Provider value={providers}>
      <p className="float-top-left" style={{zIndex:"999"}}>Microphone: {listening ? 'on' : 'off'}</p>
      {children}
    </TalkContext.Provider>
  );
};

