import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Landing} from './components/Landing';
import type { TopBar } from './components/TopBar';

const banner = "Stormlight Archive";
const buttonString = "See Maps!";
export const PropsContext = createContext<TopBar>({banner: "", buttonString: ""});

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
