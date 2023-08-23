import React, { useContext } from 'react'
import { Moviesprovider } from './Moviescontext'
export default function B() {
    const obj = useContext(Moviesprovider)
    function change(){
        obj.changedirector('James cameron')
    }
  return (
    <div style={{backgroundColor:'blue'}}>
        <h1>This is B Component</h1>
         <h1>The movie name is {obj.movie}</h1>
         <button style={{margin:'10px'}} onClick ={change}>Change movie name</button>
    </div>
  )
}
