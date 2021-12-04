import axios from 'axios'

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/users/users');
        dispatch({ type: 'GET_USERS', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getAdmins = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/users/admins');
        dispatch({ type: 'GET_ADMINS', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getSimpleUsers = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/users/simple');
        dispatch({ type: 'GET_SIMPLE_USERS', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getUser = (id) => async () => {
    try {
        const { data } = await axios.get('/users/' + id);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
      await axios.delete('/users/' + id);
  
      dispatch({ type: 'DELETE_USER', payload: id });
    } catch (error) {
      console.log(error);
    }
}

export const updateUser = (id,user) => async (dispatch) => {
    try {
        const { data } = await axios.patch('/users/' + id, user);
        
        dispatch({ type: 'UPDATE_USER', payload: data });
    } catch (error) {
        console.error(error);
    }
}

