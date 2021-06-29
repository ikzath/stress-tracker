import React, { useState, useEffect } from 'react';
import "../Styles/HeartrateTracker.css";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import SwitchSelector from "react-switch-selector";


function HeartrateTracker() {

  const history = useHistory();
  const [results, setResults] = useState('');

  // useEffect(() => {
    
  // }, [])

  const options = [
    {
      label: "MANUAL ENTRY",
      value: "phone",
      selectedBackgroundColor: "white",
      selectedFontColor: "black"
    },
    {
      label: "SYNC YOUR SMART-WATCH",
      value: "bar",
      selectedBackgroundColor: "white",
      selectedFontColor: "black"
    }
  ];

  // const [dataAuto, setDataAuto] = useState({ 
  //   HR: '',
  //   MEDIAN_RR: '',
  //   MEAN_RR: '',
  //   RMSSD: '',
  //   pNN25: '',
  //   HF: '',
  //   LF: '',
  //   HF_LF: ''
  // });
    
  // const onChange = (event) => {
  //     const number = Math.floor(Math.random() * 100) + 1;
  //     setData({...dataAuto, [event.target.name]: event.number})
  // }

  
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

    const config = {
      headers: {'Access-Control-Allow-Origin': '*'}}

      const postData = e => { 
        e.preventDefault();        
        axios
        .post("http://localhost:5000/predict", data, config)
        .then(function (response) {
          const res = response.data;
          setResults( prev => ({...prev, res }))
          // setResults(res)
          console.log(results)
        })
        .catch(function (error) {
            console.log(error)
        })
    };

    function onFormSubmit(){
        if(results.res === 'stress'){
          history.push('/stress') 
        }  
        if(results.res === 'no stress'){
          history.push('/no-stress') 
        }
    }

    return (
      <div className='hrTracker' onSubmit={postData}>
          <div className="your-required-wrapper" style={{ width: 390, height: 60, marginBottom: 40 }}>
            <SwitchSelector
              onChange={console.log('clicked')}
              options={options}
              backgroundColor={"#007bff"}
              fontColor={"white"}
            />
        </div>
        <form className="hrTrackerInput">
            <input className='hrInputTab' type="float" name="HR" placeholder='HR' value={data.HR} onChange={handleChange} required /> 
            <input className='hrInputTab' type="float" name="MEDIAN_RR" placeholder='MEDIAN_RR' value={data.MEDIAN_RR} onChange={handleChange} required /> 
            <input className='hrInputTab' type="float" name="MEAN_RR" placeholder='MEAN_RR' value={data.MEAN_RR} onChange={handleChange} required /> 
            <input className='hrInputTab' type="float" name="RMSSD" placeholder='RMSSD' value={data.RMSSD} onChange={handleChange} required /> 
            <input className='hrInputTab' type="float" name="pNN25" placeholder='pNN25' value={data.pNN25} onChange={handleChange} required /> 
            <input className='hrInputTab' type="float" name="HF" placeholder='HF' value={data.HF} onChange={handleChange} required /> 
            <input className='hrInputTab' type="float" name="LF" placeholder='LF' value={data.LF} onChange={handleChange} required /> 
            <input className='hrInputTab' type="float" name="HF_LF"  placeholder='HF_LF' value={data.HF_LF} onChange={handleChange} required /> 
            <input className='hrInputTabButton' onClick={onFormSubmit} type="submit" value="Am i stressed ?" />
        </form>
            <Link to='/'>Home</Link>
    </div>
    );  
}

export default HeartrateTracker
