import axios from "axios";

export const addCartPrograms = (program) => async (dispatch) => {
    try{
        const {data} = await axios.post('/cart', program);
        dispatch({
            type: 'ADD_TO_CART',
            payload: data
        })
    }catch(error){
        console.log(error);
    }
}


export const getCartPrograms = () => async (dispatch) => {
   
    try {
        const {data} = await axios.get('/cart');
        
        dispatch({
            type: 'FETCH_ALL_CART_PROGRAMS',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }

}

export const deleteCartItems = () => async (dispatch) => {
    try {
        await axios.delete('/cart');

        dispatch({
            type: 'DELETE_ALL_CART_PROGRAMS'
        })
    }catch(error){
        console.log(error);
    }
}

export const deleteCartItem = (id) => async (dispatch) => {
    try {
        await axios.delete('/cart/' + id);
    
        dispatch({ type: 'DELETE_CART_ITEM', payload: id });
      } catch (error) {
        console.log(error);
      }
}