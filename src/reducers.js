import rp from 'request-promise'

const reducer = (state, action) => {

  const newState = {...state}
  console.log(newState)

  switch(action.type){

    case 'ADD_ORDER':

      const { phone, orderId } = action.payload
      newState.activeOrders = [{ phone, orderId }, ...state.activeOrders]
      newState.phone = ''
      newState.orderId = ''
      return newState

    case 'UPDATE_PHONE_OR_ORDER': 

      if (action.payload.phoneOrOrder === 'phone'){
        newState.phone = action.payload.num
      } else {
        newState.orderId = action.payload.num
      }
      return newState

    case 'ORDER_IS_READY':
      
      const newActiveOrders = newState.activeOrders.filter(order => order.orderId !== action.payload.orderId)
      newState.activeOrders = newActiveOrders
      const newRecentOrders = newState.recentOrders
      newState.recentOrders = [{orderId: action.payload.orderId, phone: action.payload.phone}, ...newRecentOrders]

      fetch(`https://nameless-eyrie-82335.herokuapp.com/${action.payload.phone}`)
        .then(res => res.json())
        .then(res => console.log(res))

      return newState

    case 'TEXT_AGAIN': 
      fetch(`https://nameless-eyrie-82335.herokuapp.com/${action.payload.phone}`)
        .then(res => res.json())
        .then(res => console.log(res))

      return newState

    case 'DELETE_RECENT_ORDER': 
      newState.recentOrders = newState.recentOrders.filter(order => order.orderId !== action.payload.orderId)
      return newState

    case 'DELETE_ACTIVE_ORDER':
      newState.activeOrders = newState.activeOrders.filter(order => order.orderId !== action.payload.orderId)
      return newState

    default:
      return state
  }
}

export default reducer