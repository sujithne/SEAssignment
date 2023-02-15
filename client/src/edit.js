import React, { useState } from 'react';
import NavBar from './NavBar'
import Add from './add'
export default function DescriptionDisplay() {
    
  const [inputText, setInputText] = useState('Sujith Narnavaram');
  const [inputText1, setInputText1] = useState('A computer Science Gratuate Student');

  return (  
    <div>
<div className='edit'>
  <div>
    <nav className="nav1"> <ul>
            <li>
                <a><img className='imageicon'  src="https://img.icons8.com/ios11/600/000000/frame-rate.png" ></img></a>
            </li>
            <li>
                <a>Media Library</a>
            </li>
        </ul></nav>
    <div className='row'>
      <div className='col-sm-2'>
        
        <img className = "image" src="https://secure.gravatar.com/avatar/45752c14a9030d51d44ac177671416eb/?s=48&d=https://images.binaryfortress.com/General/UnknownUser1024.png" />
      </div>

      <div className='col-sm-8'>
        <p className='DisplayData'>{inputText}</p>
        <p className='DisplayData1'>{inputText1}</p>
      </div>
    </div>
    <p></p>
    <p></p>
    <div className='row'>
      <div className='col-sm-2'>
        <p>Edit Name : </p></div>
        <div className='col-sm-8'>
        <textarea
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      </div>

    </div>
    <div className='row'>
      <div className='col-sm-2'>
        <p>Edit description : </p></div>
        <div className='col-sm-8'>
        <textarea
        value={inputText1}
        onChange={e => setInputText1(e.target.value)}
      />
      </div>

    </div>

    </div>
  </div>
  <><Add/>
  
  </>
  
  </div>
    
    
  );
}