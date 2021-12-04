import axios from 'axios';

export const getDiscounts = () => async (dispatch) => {
   
    try {
        const {data} = await axios.get('/discount');
        
        dispatch({
            type: 'FETCH_DISCOUNT',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }

}


export const deleteDiscount = (id) => async (dispatch) => {
    try {
        await axios.delete('/discount/' + id);
    
        dispatch({ type: 'DELETE_DISCOUNT', payload: id });
      } catch (error) {
        console.log(error);
      }
}

export const addDiscount = (discount) => async (dispatch) => {
    try{
        const {data} = await axios.post('/discount', discount);
        dispatch({
            type: 'ADD_DISCOUNT',
            payload: data
        })
    }catch(error){
        console.log(error);
    }
}


