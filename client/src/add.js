
import React, { useEffect, useState } from 'react';
import { getAddresult } from './services/add';
import Axios from "axios";


export default function Add() {
    const [inputText, setInputText] = useState();
    const [inputText1, setInputText1] = useState();
    const [backendData, setBackendData] = useState([{}])

    const [first, setFirst] = useState(null);
    const [sec, setSec] = useState(null);
    const [r1, setR1] = useState();
    const [r2, setR2] = useState();
    const addition = () => {
        setR1(Number(first) + Number(sec));
        Axios.get(`http://18.235.62.53:3003/add/${first}/and/${sec}`).then((response) => {
            setR2(Number(response.data.addResult));
            console.log(response.data.addResult);
        });
    }
    return (
        <div className='edit1'>
            <div>
                <div>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <p className='details'>Your Addition result (From Server) is : </p>
                        </div>
                        <div className='col-sm-2'>
                            <p className='details' id='input'>{r2}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <p className='details'>Your Addition result (From ReactJS) is : </p>
                        </div>
                        <div className='col-sm-6'>
                            <p className='details'>{(parseInt(first) + parseInt(sec) || 0)}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <p>First number  : </p></div>
                        <div className='col-sm-8'>
                            <textarea
                                value={inputText}
                                onChange={(event) => { setFirst(event.target.value) }}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <p>Second Number : </p></div>
                        <div className='col-sm-8'>
                            <textarea
                                value={inputText1}
                                onChange={(event) => { setSec(event.target.value) }}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <p></p></div>
                        <div className='col-sm-8'>
                            <button className='button' onClick={addition}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}