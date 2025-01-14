import axios from 'axios';
import { toast } from "react-toastify";

export const contact = (userContact) => async dispatch => {
    dispatch({type : 'USER_CONTACT_REQUEST'})
    try {
        const res = await axios.post('/api/user/contact',userContact);
        dispatch({type : 'USER_CONTACT_SUCCESS'});
        toast.success("Request Submitted Successfully!", {
            position: "top-center",
          });
        // window.location.href = '/LoginDonator';

    } catch (error) {
        dispatch({type : 'USER_CONTACT_FAIL',payload : error});
        toast.success(`Failed to send! ${error} encountered! Try again Later,`, {
            position: "top-center",
          });
    }
};