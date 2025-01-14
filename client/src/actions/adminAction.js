import axios from 'axios'; //create krne ka treeks ahia post api (method)

export const loginAdmin = (admin) => async dispatch => {
    dispatch({type : 'ADMIN_LOGIN_REQUEST'})
    try {
        const res = await axios.post('/api/adminlogin/login',admin);
        console.log(res);
        dispatch({type : 'ADMIN_LOGIN_SUCCESS'});
        localStorage.setItem('currentAdmin', JSON.stringify(res.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'ADMIN_LOGIN_FAIL',payload : error})
    }
};

export const logoutAdmin = () => dispatch => {
    localStorage.removeItem('currentAdmin');
    window.location.href = '/';
};