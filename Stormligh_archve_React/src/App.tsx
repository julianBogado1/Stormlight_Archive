import { createContext} from 'react'
import './App.css'
import {Landing} from './components/Landing';
import type { TopBar, TopBarProps } from './components/TopBar';
  
const banner = "Stormlight Archive";
const buttonString = "See Maps!";
export const PropsContext = createContext<TopBarProps>({banner: "", buttonString: ""});

function App() {

  return (
    <>
      <PropsContext.Provider value={{banner, buttonString}}>
        <Landing />
      </PropsContext.Provider>
    </>
  )
}

export default App
