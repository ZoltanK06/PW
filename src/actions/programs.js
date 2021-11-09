import Axios from 'axios';

export const getPrograms = () => async (dispatch) => {
   
    try {
        const {data} = await Axios.get('/programs');
        
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }

}