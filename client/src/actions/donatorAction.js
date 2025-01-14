import axios from 'axios';
import { toast } from "react-toastify";

export const loginDonator = (donator) => async (dispatch) => {
  dispatch({ type: 'DONATOR_LOGIN_REQUEST' });
  try {
    toast.info("Logging in. Please wait...", { autoClose: false, position: "top-center" });

    const res = await axios.post('/api/donator/login', donator);

    dispatch({ type: 'DONATOR_LOGIN_SUCCESS', payload: res.data });
    localStorage.setItem('currentDonator', JSON.stringify(res.data));
    window.location.href = '/';
    toast.success("Logged In Successfully!", { position: "top-center" });
  } catch (error) {
    dispatch({ type: 'DONATOR_LOGIN_FAIL', payload: error });
    toast.error("Invalid Credentials! Please Check again", { position: "top-center" });
  }
};

export const signupDonator = (donator) => async dispatch => {
    dispatch({type : 'DONATOR_SIGNUP_REQUEST'})
    try {
        const res = await axios.post('/api/donator/signup',donator);
        dispatch({type : 'DONATOR_SIGNUP_SUCCESS'});
        toast.success("Signed Up Successfully!");
        window.location.href = '/LoginDonator';

    } catch (error) {
        dispatch({type : 'DONATOR_SIGNUP_FAIL',payload : error})
    }
};


export const logoutDonator = () => dispatch => {

    toast.info("Loggin you out.", { position: "top-center" });

    localStorage.removeItem('currentDonator');
    window.location.href = '/';
}


export const addDonator = (donator) => async (dispatch) => {
    dispatch({type : 'ADD_DONATOR_REQUEST'});
    try {
        const res = await axios.post('/api/donator/adddonator',{donator});
        dispatch({type : 'ADD_DONATOR_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'ADD_DONATOR_FAIL',payload : err});
    }
  };
export const admindeleteDonator = (donatorId) => async (dispatch) => {
    try {
        await axios.post('/api/donator/admindeletedonator',{donatorId});
        localStorage.removeItem('currentDonator');
        toast.info("Donator Deleted Successfully!","success", { position: "top-center" });
        window.location.href = '/DonatorsList';
    } catch (error) {
        toast.info("Error While Deleting Donator", { position: "top-center" });
    }
};

export const getAllDonators = () => async (dispatch) => {
    dispatch({type : 'GET_DONATOR_REQUEST'});
    try {
        const res = await axios.get('/api/donator/getAllDonator');
        dispatch({type : 'GET_DONATOR_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_DONATOR_FAIL',payload : err});
    }
  };

  export const getDonatorById = (donatorId) => async (dispatch) => {
    dispatch({type : 'GET_DONATORBYID_REQUEST'});
    try {
        const res = await axios.post('/api/donator/getdonatorbyid',{donatorId});
        dispatch({type : 'GET_DONATORBYID_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_DONATORBYID_FAIL',payload : err});
    }
};

export const updateDonator= (updatedDonator) => async (dispatch) => {
    dispatch({type : 'UPDATE_DONATORBYID_REQUEST'});
    try {
        const res = await axios.post('/api/donator/updateddonator',{updatedDonator});
        dispatch({type : 'UPDATE_DONATORBYID_SUCCESS',payload : res.data});
        toast.info("Account Details Updated!", { position: "top-center" });
        window.location.href = '/EditDonator';
    } catch (err) {
        dispatch({type : 'UPDATE_DONATORBYID_FAIL',payload : err});
    }
  };
  

  
export const deleteDonator = (donatorId) => async (dispatch) => {
    try {
        await axios.post('/api/donator/deleteddonator',{donatorId});
        localStorage.removeItem('currentDonator');
        toast.info("Donator Deleted Successfully!","success", { position: "top-center" });
        window.location.href = '/';
    } catch (error) {
        alert("Error While Deleting Donator");
    }
  };
  