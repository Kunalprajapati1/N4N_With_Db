import axios from 'axios';
import { toast } from "react-toastify";

export const logNgo = (ngo) => async dispatch => {
    dispatch({type : 'NGO_LOGIN_REQUEST'})
    try {
        toast.info("Logging in. Please wait...", { autoClose: false, position: "top-center" });

        const res = await axios.post('/api/ngo/login',ngo);
        dispatch({type : 'NGO_LOGIN_SUCCESS'});
        localStorage.setItem('currentNgo', JSON.stringify(res.data));
        window.location.href = '/';
        toast.success("Logged In Successfully!", { position: "top-center" });
    } catch (error) {
        dispatch({type : 'NGO_LOGIN_FAIL',payload : error})
        toast.error("Invalid Credentials! Please Check again",{position:"top-center"});
    } 
};

export const signNgo = (ngo) => async dispatch => {
    dispatch({type : 'NGO_SIGNUP_REQUEST'})
    try {
        const res = await axios.post('/api/ngo/signup',ngo);
        dispatch({type : 'NGO_SIGNUP_SUCCESS'});
        toast.success("Signed Up Successfully!");
        window.location.href = '/LoginNgo';
    } catch (error) {
        dispatch({type : 'NGO_SIGNUP_FAIL',payload : error})
    } 
};

export const logoutNgo = () => dispatch => {
    toast.info("Loggin you out.", { position: "top-center" });

    localStorage.removeItem('currentNgo');
    window.location.href = '/';
};

export const getAllNgos = () => async (dispatch) => {
    dispatch({type : 'GET_NGO_REQUEST'});
    try {
        const res = await axios.get('/api/ngo/getAllNgo');
        dispatch({type : 'GET_NGO_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_NGO_FAIL',payload : err});
    }
  };
  export const admindeleteNgo = (ngoId) => async (dispatch) => {
    try {
        await axios.post('/api/ngo/admindeletengo',{ngoId});
        localStorage.removeItem('currentNgo');
        toast.info("Ngo Deleted Successfully!","success", { position: "top-center" });
        window.location.href = '/AdminNgoList';
    } catch (error) {
        toast.info("Error While Deleting Ngo", { position: "top-center" });
    }
};

export const addNgo = (ngo) => async (dispatch) => {
    dispatch({type : 'ADD_NGO_REQUEST'});
    try {
        const res = await axios.post('/api/ngo/addngo',{ngo});
        dispatch({type : 'ADD_NGO_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'ADD_NGO_FAIL',payload : err});
    }
  };

  export const getNgoById = (ngoId) => async (dispatch) => {
    dispatch({type : 'GET_NGOBYID_REQUEST'});
    try {
        const res = await axios.post('/api/ngo/getngobyid',{ngoId});
        dispatch({type : 'GET_NGOBYID_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_NGOBYID_FAIL',payload : err});
    }
};
export const deleteNgo = (ngoId) => async (dispatch) => {
    try {
        await axios.post('/api/ngo/deletedngo',{ngoId});
        localStorage.removeItem('currentNgo');
        toast.info("NGO Deleted Successfully!","success", { position: "top-center" });
        window.location.href = '/';
    } catch (error) {
        toast.info("Error While Deleting NGO", { position: "top-center" });
    }
  };

  export const updateNgo= (updatedNgo) => async (dispatch) => {
    dispatch({type : 'UPDATE_NGOBYID_REQUEST'});
    try {
        const res = await axios.post('/api/ngo/updatedngo',{updatedNgo});
        dispatch({type : 'UPDATE_NGOBYID_SUCCESS',payload : res.data});
        window.location.href = '/EditNgo';
        toast.info("Account Details Updated!", { position: "top-center" });

    } catch (err) {
        dispatch({type : 'UPDATE_NGOBYID_FAIL',payload : err});
    }
  };
  