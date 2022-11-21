import React from 'react'

function Orders({orders}) {
  return (
    <>
    
    {
        orders.map((order) => {
            const {id,name,image,price} = order;
            return (
                <section key = {id} className='order'>
                    <img src={image} alt = {name} />
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                </section>
            )
        })
    }
    
    
    </>
  )
}

export default Orders