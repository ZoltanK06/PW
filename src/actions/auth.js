import axios from 'axios'
import { useHistory } from 'react-router-dom';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
})

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await API.post('/users/signin', formData);
    dispatch({ type: 'AUTH', data });

    history.push('/');
    
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await API.post('/users/signup', formData);

    dispatch({ type: 'AUTH', data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};