import React, { Component } from 'react'

export default class Emojidata extends Component {
    constructor(props){
        super(props)
        this.state = {
        emojiData: [],
        emojiInput : ''
    }
    }

    componentDidMount(){
        fetch('https://emoji-api.com/emojis?access_key=05702b9867aea46067348063326c299ec020f342').then(resp=>resp.json()).then(resp=>this.setState({emojiData:resp}))
    }
    render() {
    return (
    <div>

        <div className='emoji-input'>
            <p>{this.state.emojiInput}</p>
            <p>Click Emoji to Display</p>
        </div>
        <ul className='emoji-container' >
            {this.state.emojiData.filter((val)=>{
                if(this.props.input ===''){
                    return val
                }else if(val.unicodeName.toLowerCase().includes(this.props.input.toLowerCase())||val.group.toLowerCase().includes(this.props.input.toLowerCase())){
                    return val
            }
            }).map((emoji)=>{
                const {character,unicodeName} = emoji
                    return(
                <li key={unicodeName} onClick={()=>{
                this.setState({emojiInput:character})
                }}> {character} </li>
                )
                })}
        </ul>
    </div> )
    }
}
