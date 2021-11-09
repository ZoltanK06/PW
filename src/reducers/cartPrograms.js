export default (programs = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...programs, action.payload];
        case 'FETCH_ALL_CART_PROGRAMS':
            return action.payload;
        case 'DELETE_ALL_CART_PROGRAMS':
            return programs;
        case 'DELETE_CART_ITEM':
            return programs.filter((program) => program._id !== action.payload);
        default:
            return programs;
    }
}