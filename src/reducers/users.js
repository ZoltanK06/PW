export default (users = [], action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.payload;
        case 'GET_ADMINS':
            return action.payload;
        case 'GET_SIMPLE_USERS':
            return action.payload;
        case 'GET_USER':
            return action.payload;
        case 'DELETE_USER':
            return users.filter((user) => user._id !== action.payload);
        case 'UPDATE_USER':
            return users.map((user) => (user._id===action.payload._id ? action.payload : user));
        default:
            return users;
    }
}