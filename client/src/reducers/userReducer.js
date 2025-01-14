export const contactUser = (state={},action) => {
    switch(action.type){
        case 'USER_CONTACT_REQUEST' :
            return{
                loading : true
            }
        case 'USER_CONTACT_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'USER_CONTACT_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};
