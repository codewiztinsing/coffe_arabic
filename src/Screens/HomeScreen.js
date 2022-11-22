import React, {useState} from 'react'
import Orders from '../Components/Orders'
import data from "../data"


function HomeScreen() {
    const [_data ,setData] = useState(data)
 
  return (
    <div >
        <h1 className='titleContainer'>
        Well Come to Emush Coffe Center
        </h1>

        <Orders orders={_data} />

        <button onClick={() => {
          _data.length > 0 ?
          setData([]):setData(data)
        }}
        className="btn-clear">
          {
            _data.length >0 ?" Finish": "show"
          }
          
          </button>
    </div>
  )
}

export default HomeScreen