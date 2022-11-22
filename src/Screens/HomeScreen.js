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
          setData([])
        }}
        className="btn-clear">clear</button>
    </div>
  )
}

export default HomeScreen