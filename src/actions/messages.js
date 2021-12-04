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

export const deleteMessage = (id) => async (dispatch) => {
    try {
        await axios.delete('/messages/' + id);
    
        dispatch({ type: 'DELETE_MESSAGE', payload: id });
      } catch (error) {
        console.log(error);
      }
}

export const updateMessage = (id,message) => async (dispatch) => {
    try {
        const { data } = await axios.patch('/messages/' + id, message);
        
        dispatch({ type: 'UPDATE_MESSAGE', payload: data });
    } catch (error) {
        console.error(error);
    }
}

