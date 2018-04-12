import React from 'react'
import './App.css'
import 'bootstrap-css-only/css/bootstrap.css'


export const EntryForm = ({addOrder, updatePhoneOrOrder, phone, orderId}) => {
  
  return <div className='input-form list-view'>
    <h2>New Order</h2>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="phone-number">Phone</span>
      </div>
      <input 
        type="number" 
        className="form-control" 
        aria-label="phone-number" 
        aria-describedby="phone-numeber"
        value={phone}
        placeholder='Phone Number'
        onChange={(e) => updatePhoneOrOrder('phone', Number(e.target.value))}
      />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="order-id">Order Id</span>
      </div>
      <input 
        type="number" 
        className="form-control" 
        aria-label="order-id" 
        aria-describedby="order-id"
        value={orderId}
        placeholder='Order Id'
        onChange={(e) => updatePhoneOrOrder('order', Number(e.target.value))}
      />
    </div>
    <button
      className='btn btn-primary'
      onClick={() => addOrder(phone, orderId)}
    >Add Order</button>
  </div>
}

const Order = ({orderId, phone, orderIsReady, deleteOrder}) => {
  return <p className='card'>
    <div className='card-body'>
      <h5 className='card-title'>Order: {orderId}</h5>
      <p className='card-text'>Phone: {phone}</p>
      <div className='half-width'>
        <button 
          className='btn btn-success'
          onClick={() => orderIsReady(orderId, phone)}
        >Send Text</button>
        <button
          className='btn btn-danger'
          onClick={() => deleteOrder(orderId)}
        >Delete</button>
      </div>
    </div>
  </p>
}

const RecentOrder = ({orderId, phone, textAgain, deleteOrder}) => {
  return<p className='card'>
    <div className='card-body'>
      <h5 className='card-title'>Order: {orderId}</h5>
      <p className='card-text'>Phone: {phone}</p>
      <div className='half-width'>
        <button 
          className='btn btn-warning padding-right-5'
          onClick={() => textAgain(phone)}
        >Follow-Up</button>
        <button 
          className='btn btn-danger padding-left-5'
          onClick={() => deleteOrder(orderId)}
        >Delete</button>
      </div>
    </div>
  </p>
}



export const ActiveOrderList = ({activeOrders, orderIsReady, deleteOrder}) => {
  return <div className='list-view'> 
    <h2>Active Orders</h2>
    <div className='flex-column'>{activeOrders.map((order, i) => {
      return <Order 
        orderId={order.orderId} 
        phone={order.phone}
        orderIsReady={orderIsReady}
        deleteOrder={deleteOrder}
        key={i}
      />
    })}
    </div>
  </div>

}

export const RecentOrderList = ({recentOrders, textAgain, deleteOrder}) => {
  console.log(textAgain, 'ttttt')

  return <div className='list-view'>
    <h2>Recent Orders</h2>
    <div className='flex-column'>{
      recentOrders.map((order, i) => {
        return <RecentOrder 
          orderId={order.orderId} 
          phone={order.phone}
          textAgain={textAgain}
          deleteOrder={deleteOrder}
          key={i}
        />
      })}
    </div>
  </div>

}

