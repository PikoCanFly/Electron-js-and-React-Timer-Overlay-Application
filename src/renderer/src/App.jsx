import TopBar from './components/TopBar'
import { useState, useEffect } from 'react'
import Timer from './components/Timer'
function App() {
  const [isOverlay, setIsOverlay] = useState(false)
  
  useEffect(()=>{
    window.electron.ipcRenderer.on("overlay-mode", ()=>{
      setIsOverlay((prevState) => !prevState);
    });

    return () => {
      window.electron.ipcRenderer.removeAllListeners("overlay-mode")
    }

  }, [])
  
  return (
    <>
    <div className={ !isOverlay ? 'visible' : 'invisible'}>
      <TopBar></TopBar>
      </div>
      <div className={ !isOverlay ? "bg-black bg-opacity-40 p-2 rounded-b-xl" : "bg-black bg-opacity-40 p-2 rounded-xl"}>
        <Timer isOverlay={isOverlay}></Timer>
      </div>
    </>
  )
}

export default App
