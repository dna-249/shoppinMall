import React from 'react'
import './App.css'
import { Fetch } from './component.jsx/fetch'
import{Header} from  './component.jsx/header'
import { Search } from './component.jsx/search'
import { Review } from './component.jsx/review'

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
      <div id='review'  className='review'>
      <Review />
      </div>
    </>
  )
}

export default App
