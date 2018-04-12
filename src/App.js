import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { 
  EntryForm,
  ActiveOrderList,
  RecentOrderList 
} from './components'

const App = ({
  phone,
  orderId,
  activeOrders,
  recentOrders,
  addOrder,
  updatePhoneOrOrder,
  orderIsReady,
  textAgain
}) => {

  return<div class='container'>
    <EntryForm 
      addOrder={addOrder}
      updatePhoneOrOrder={updatePhoneOrOrder}
      phone={phone}
      orderId={orderId}
    />
    <ActiveOrderList 
      activeOrders={activeOrders}
      orderIsReady={orderIsReady}
    />
    <RecentOrderList
      recentOrders={recentOrders}
      textAgain={textAgain}
    />
  </div>
}

const mapStateToProps = (state) => {
  return {
    phone: state.phone,
    orderId: state.orderId,
    activeOrders: state.activeOrders,
    recentOrders: state.recentOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOrder: (phone, orderId) => dispatch({type: 'ADD_ORDER', payload: {phone, orderId}}),
    updatePhoneOrOrder: (phoneOrOrder, num) => dispatch({type: 'UPDATE_PHONE_OR_ORDER', payload: {phoneOrOrder, num}}),
    orderIsReady: (orderId, phone) => dispatch({type: 'ORDER_IS_READY', payload: {orderId, phone}}),
    textAgain: phone => dispatch({type: 'TEXT_AGAIN', payload: {phone}})
  }
}


const OrderApp = connect(mapStateToProps, mapDispatchToProps)(App)


export default OrderApp
