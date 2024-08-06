import React from 'react'
import './App.css'
import { Fetch } from './component.jsx/fetch'
import{Header} from  './component.jsx/header'
import { Search } from './component.jsx/search'

function App() {
   return (
    <>
      <div>
     <Header/>
     </div>
     <div id='search' className='searchs'>
    <Search/>
     </div>
     <div id='fetch'className='fetch' >
     <Fetch />
      </div>
    </>
  )
}

export default App
