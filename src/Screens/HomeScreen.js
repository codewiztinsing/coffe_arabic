import React, {useState} from 'react'
import Orders from '../Components/Orders'
import data from "../data"


function HomeScreen() {
    const {orders,setOrders} = useState(data)
  return (
    <div >
        <h1 className='titleContainer'>
        Well Come to Emush Coffe Center
        </h1>

        <Orders orders={orders} />
    </div>
  )
}

export default HomeScreen