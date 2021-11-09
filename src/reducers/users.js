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
        default:
            return users;
    }
}