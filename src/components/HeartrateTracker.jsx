import React, { useState, useEffect } from 'react';
import "../Styles/HeartrateTracker.css";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import list from '../DataSet';
import trackStress from "../images/trackStress.png";


function HeartrateTracker() {

  const history = useHistory();
  const [results, setResults] = useState(''); 
  

  const options = [
    {
      label: "",
      value: "unsync",
      selectedBackgroundColor: "red",
      selectedFontColor: "white"
    },
    {
      label: "SYNC YOUR SMART-WATCH",
      value: "sync",
      selectedBackgroundColor: "red",
      selectedFontColor: "white"
    }
  ];
     
  const [data, setData] = useState({ 
    HR: '',
    MEDIAN_RR: '',
    MEAN_RR: '',
    RMSSD: '',
    pNN25: '',
    HF: '',
    LF: '',
    HF_LF: ''
  });
    
  const handleChange = (event) => {
      setData({...data, [event.target.name]: event.target.value})
  }

    const clickHandler = (event) => {
      const number = Math.floor(Math.random() * 7) + 1;
   
      setData({
        HR: list[number][0] })

        setTimeout(() => {(    
        setData({   
        ...data,  
        HR: list[number][0],
        MEDIAN_RR: list[number][1],
        MEAN_RR: list[number][2],
        RMSSD: list[number][3],
        pNN25: list[number][4],
        HF: list[number][5],
        LF: list[number][6],
        HF_LF: list[number][7] 
      })  
        )}, 3000);
  } 
  

    const config = {
      headers: {'Access-Control-Allow-Origin': '*'}}

      const postData = e => { 
        e.preventDefault();        
          axios
          .post("http://localhost:5000/predict", data, config)
          .then(function (response) {
            const res = response.data;
            setResults(res)
          })
          .catch(function (error) {
              console.log(error)
          })
    };

    function onFormSubmit(){
        if(results === 'stress'){
          history.push('/stress') 
        }  
        if(results === 'no stress'){
          history.push('/no-stress') 
        }
    }

    useEffect(() => {      
      onFormSubmit()
      console.log(results)
      
    }, [results])

    return (
      <div className='hrTracker' onSubmit={postData}>
        <button onClick={clickHandler} className='hrInputTabButton'>Heartrate</button>
        <form className="hrTrackerInput">
            <input className='hrInputTab'style={{ backgroundColor: 'rgb(194, 194, 221)'}} type="number" name="HR" placeholder='HR' value={data.HR} onChange={handleChange} required /> 
            <input className='hrInputTab' type="number" name="MEDIAN_RR" placeholder='MEDIAN_RR' value={data.MEDIAN_RR} onChange={handleChange} required /> 
            <input className='hrInputTab' type="number" name="MEAN_RR" placeholder='MEAN_RR' value={data.MEAN_RR} onChange={handleChange} required /> 
            <input className='hrInputTab' type="number" name="RMSSD" placeholder='RMSSD' value={data.RMSSD} onChange={handleChange} required /> 
            <input className='hrInputTab' type="number" name="pNN25" placeholder='pNN25' value={data.pNN25} onChange={handleChange} required /> 
            <input className='hrInputTab' type="number" name="HF" placeholder='HF' value={data.HF} onChange={handleChange} required /> 
            <input className='hrInputTab' type="number" name="LF" placeholder='LF' value={data.LF} onChange={handleChange} required /> 
            <input className='hrInputTab' type="number" name="HF_LF"  placeholder='HF_LF' value={data.HF_LF} onChange={handleChange} required /> 
            <input className='hrInputTabButton' onClick={onFormSubmit} type="submit" value="Track" />
        </form>
    </div>
    );  
}

export default HeartrateTracker
