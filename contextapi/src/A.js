import React, { useContext } from 'react'
import { Moviesprovider } from './Moviescontext'
function A() {
    const obj = useContext(Moviesprovider)
    function change(){
        obj.changemovie('Avatar')
    }
  return (
    <div style={{backgroundColor:'red'}}>
     <h1>This is A Component </h1>
     <h1>{obj.director}</h1>
     <button style={{margin:'10px'}} onClick={change}>Chnage movie name</button>
    </div>
  )
}
export default  A