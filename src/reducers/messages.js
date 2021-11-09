export default (messages = [], action) => {
    switch(action.type){
        case 'FETCH_MESSAGES':
            return action.payload;
        case 'ADD_MESSAGE':
            return [...messages, action.payload];
        default:
            return messages;
    }
}