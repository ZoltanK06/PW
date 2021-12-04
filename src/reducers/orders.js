export default (orders = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_ORDERS':
            return action.payload;
        case 'ADD_ORDER':
            return [...orders, action.payload];
        case 'DELETE_ORDER':
            return orders.filter((order) => order._id !== action.payload);
        default:
            return orders;
    }
}