import React, { useEffect , useState} from 'react'
import Card from './Card.js';
import './covid.css';

const Covid = () => {
    const [dataset, setDataset] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async () =>{
       try{
        const res = await fetch('https://data.covid19india.org/data.json');
        // https://data.covid19india.org/v4/min/data.min.json
        const data = await res.json();
        console.log(data.statewise[0]);
        setDataset(data.statewise[0]);
       }catch(err){
        console.log(err);
       }
    }

  return (
    <>
       <h1 className='top-head text-center'>Covid 19 Tracker</h1>
       <ul className='m-0 p-0'>
        <li className='country'>
            <div className=' text-center'>
                <h2>India</h2>
            </div>
        </li>
    <div className='d-flex flex-wrap justify-content-around m-5 p-5 card-div'>
    <Card title={"Total Recovered"} content={dataset.recovered} />
       <Card title={"Total Active"} content={dataset.active} />
       <Card title={"Total Confirmed"} content={dataset.confirmed} />
       <Card title={"Total Deaths"} content={dataset.deaths} />
    </div>
       </ul>
    </>
  )

}

export default Covid
