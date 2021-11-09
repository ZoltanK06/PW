import axios from 'axios';

export const addOrder = (order) => async (dispatch) => {
    try {
        const {data} = await axios.post('/orders', order);
        dispatch({
            type: 'ADD_ORDER',
            payload: data
        })
    } catch (error) {
        console.log(error);        
    }
}

export const getOrders = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/orders');
        dispatch({
            type: 'FETCH_ALL_ORDERS',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }

}