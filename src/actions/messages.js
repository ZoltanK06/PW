import axios from 'axios';

export const addMessage = (message) => async (dispatch) => {
    try {
        const {data} = await axios.post('/messages', message);
        dispatch({
            type: 'ADD_MESSAGE',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getMessages = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/messages');
        dispatch({
            type: 'FETCH_MESSAGES',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}