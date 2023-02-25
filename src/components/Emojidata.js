import React from 'react';
import Axios from 'axios'
import { useState, useEffect } from 'react'
import '../App.css'

const Emojidata = ({input}) => {
    const [emojidata, setEmojiData] = useState([]);
     const [emojiInput, setEmojiInput] = useState()
    
    useEffect(()=>{
        Axios.get('https://emoji-api.com/emojis?access_key=05702b9867aea46067348063326c299ec020f342')
        .then((res)=>{
          const responseData = res.data;
          setEmojiData(responseData);
        });
      }, []);


  return (
    <div>

      <div className='emoji-input'>
        <p>{emojiInput}</p>
        <p>Click Emoji to Display</p>
      </div>
      
      <ul className='emoji-container' >
      {emojidata.filter((val)=>{
        if(input ===''){
          return val
        }else if(val.unicodeName.toLowerCase().includes(input.toLowerCase())||val.group.toLowerCase().includes(input.toLowerCase())){
          return val
        }
      })
      .map((emoji)=>{
        const {character,unicodeName} = emoji
        return(
          <li key={unicodeName} onClick={()=>{
            setEmojiInput(character)
          }}> {character} </li>
        )
      })}
      </ul>
    </div>
   )
}

export default Emojidata