import React, { Component } from 'react'
export const Moviesprovider = React.createContext();
class Moviescontext extends Component {
    constructor(){
        super()
        this.state ={
            director :'Christopher Nolan',
            movie : 'Interstellar',
            changemovie:this.changemovie,
            changedirector:this.changedirector
        }
    }
   
    changemovie=(movie)=>{
        this.setState({movie:movie})
    }
    changedirector=(director)=>{
        this.setState({director:director})
    }
  render() {
    return <Moviesprovider.Provider value ={{...this.state}}>
         {this.props.children} 
    </Moviesprovider.Provider>
  }
}
export default Moviescontext