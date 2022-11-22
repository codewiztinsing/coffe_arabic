import React from 'react'
import '../App.css';


function Orders({orders}) {
  return (
    <>
    
    {
      orders.map((order) => {
      return (
        <div className='container'>
        <article key = {order.id} className='order'>
          <image src = {order.image} alt = {order.name} className="image"/>
          <h1 >{order.name}</h1>
          <p>{order.price}</p>

        </article>

        </div>
   
      )
      })
    }
    
    </>
  )
}

export default Orders