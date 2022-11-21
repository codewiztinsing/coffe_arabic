import React from 'react'

function Orders({orders}) {
  return (
    <>
    
    {
        orders.map((order) => {
            const {id,name,image,price} = order;
            return (
                <section className='order'>
                    <h1>{name}</h1>
                </section>
            )
        })
    }
    
    
    </>
  )
}

export default Orders