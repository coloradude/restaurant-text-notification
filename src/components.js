import React from 'react'
import './App.css';

export const EntryForm = ({addOrder, updatePhoneOrOrder, phone, orderId}) => {
  
  return <div>
    <input 
      type='number' 
      value={phone}
      placeholder='Phone Number'
      onChange={(e) => updatePhoneOrOrder('phone', Number(e.target.value))}
    />
    <input 
      type='number'
      placeholder='Order Id'
      value={orderId}
      onChange={(e) => {
        updatePhoneOrOrder('order', Number(e.target.value))
      }}
    />
    <button
      onClick={() => addOrder(phone, orderId)}
    >Add Order</button>
  </div>
}

const Order = ({orderId, phone, orderIsReady}) => {
  return <div>
    Order: {orderId} Phone: {phone}
    <button 
      onClick={() => orderIsReady(orderId, phone)}
    >Order is Ready</button>
  </div>
}

const RecentOrder = ({orderId, phone, textAgain}) => {
  return <div>
    Order: {orderId} Phone: {phone}
    <button 
      onClick={() => textAgain(orderId)}
    >Text Again</button>
  </div>
}



export const ActiveOrderList = ({activeOrders, orderIsReady}) => {
  console.log(orderIsReady, 'order is ready')
  
  return <div className='list-view'>{activeOrders.map((order, i) => {
    return <Order 
      orderId={order.orderId} 
      phone={order.phone}
      orderIsReady={orderIsReady}
      key={i}
    />
  })}</div>

}

export const RecentOrderList = ({recentOrders, textAgain}) => {

  console.log(recentOrders, 'recent')

  return <div className='list-view'>{recentOrders.map((order, i) => {
    console.log(order)
    return <RecentOrder 
      orderId={order.orderId} 
      phone={order.phone}
      textAgain={textAgain}
      key={i}
    />
  })}</div>

}

