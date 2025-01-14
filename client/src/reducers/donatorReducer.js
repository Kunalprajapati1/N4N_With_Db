export const loginDonatorReducer = (state={},action) => {
    switch(action.type){
        case 'DONATOR_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'DONATOR_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentDonator : action.payload
            }
        case 'DONATOR_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};


export const donatorSignupReducer = (state={},action) => {
    switch(action.type){
        case 'DONATOR_SIGNUP_REQUEST' :
            return{
                loading : true
            }
        case 'DONATOR_SIGNUP_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'DONATOR_SIGNUP_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const getAllDonatorsReducer = (state = {donators : []}, action) => {
    switch(action.type){
      case 'GET_DONATOR_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_DONATOR_SUCCESS' :
          return {
            donators : action.payload,
              loading : false
          }
      case 'GET_DONATOR_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const addDonatorReducer = (state = {}, action) => {
    switch(action.type){
      case 'ADD_DONATOR_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'ADD_DONATOR_SUCCESS' :
          return {
              success : true,
              loading : false
          }
      case 'ADD_DONATOR_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};


export const getDonatorByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'GET_DONATORBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_DONATORBYID_SUCCESS' :
          return {
              donator : action.payload,
              loading : false
          }
      case 'GET_DONATORBYID_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};



export const updateDonatordByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'UPDATE_DONATORBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'UPDATE_DONATORBYID_SUCCESS' :
          return {
              updatesuccess : true,
              updateloading : false
          }
      case 'UPDATE_DONATORBYID_FAIL' :
          return {
              updateerror : action.payload,
              updateloading : false
          }
      default : return state
    }
};
