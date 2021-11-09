import axios from 'axios';

export const getAdmins = () => async (dispatch) => {
   
    try {
        const {data} = await axios.get('/admins');
        
        dispatch({
            type: 'FETCH_ADMINS',
            payload: data
        })
    } catch (error) {
        console.log(error);
    }

}

export const addAdmin = (admin) => async (dispatch) => {
    try{
        const {data} = await axios.post('/admins', admin);
        dispatch({
            type: 'ADD_ADMIN',
            payload: data
        })
    }catch(error){
        console.log(error);
    }
}