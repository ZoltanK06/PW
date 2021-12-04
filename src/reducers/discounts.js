export default (discounts = [], action) => {
    switch(action.type){
        case 'FETCH_DISCOUNT':
            return action.payload;
        case 'ADD_DISCOUNT':
            return [...discounts, action.payload];
        case 'DELETE_DISCOUNT':
            return discounts.filter((discount) => discount._id !== action.payload);
        default:
            return discounts;
    }
}