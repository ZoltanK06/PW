export default (admins = [], action) => {
    switch(action.type){
        case 'ADD_ADMIN':
            return [...admins, action.payload];
        case 'FETCH_ADMINS':
            return action.payload;
        default:
            return admins;
    }
}