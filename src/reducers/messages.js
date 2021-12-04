export default (messages = [], action) => {
    switch(action.type){
        case 'FETCH_MESSAGES':
            return action.payload;
        case 'ADD_MESSAGE':
            return [...messages, action.payload];
        case 'DELETE_MESSAGE':
            return messages.filter((msg) => msg._id !== action.payload);
        case 'UPDATE_MESSAGE':
                return messages.map((message) => (message._id===action.payload._id ? action.payload :message));
        default:
            return messages;
    }
}