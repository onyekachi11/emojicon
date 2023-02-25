import React, { Component } from 'react'
import Emojidata from './Emojidata'
import '../App.css'


export default class Searchinput extends Component {
 constructor(){
  super()
   this.state= {
    input: ''
  }
 }
  render() {
    return (
    <div>
    <div className='input'>
        <input type="text" placeholder='Type here' onChange={(e)=>{
          this.setState({input: e.target.value})
        }} /> 
    </div>
       < Emojidata input={this.state.input}/>
        </div>
  )
  }
}