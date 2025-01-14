export const loginNgoReducer = (state={},action) => {
    switch(action.type){
        case 'NGO_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'NGO_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentNgo : action.payload
            }
        case 'NGO_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const getNgoByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'GET_NGOBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_NGOBYID_SUCCESS' :
          return {
              ngo : action.payload,
              loading : false
          }
      case 'GET_NGOBYID_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};



export const ngoSignupReducer = (state={},action) => {
    switch(action.type){
        case 'NGO_SIGNUP_REQUEST' :
            return{
                loading : true
            }
        case 'NGO_SIGNUP_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'NGO_SIGNUP_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};


export const getAllNgosReducer = (state = {ngos : []}, action) => {
    switch(action.type){
      case 'GET_NGO_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'GET_NGO_SUCCESS' :
          return {
            ngos : action.payload,
              loading : false
          }
      case 'GET_NGO_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const addNgoReducer = (state = {}, action) => {
    switch(action.type){
      case 'ADD_NGO_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'ADD_NGO_SUCCESS' :
          return {
              success : true,
              loading : false
          }
      case 'ADD_NGO_FAIL' :
          return {
              error : action.payload,
              loading : false
          }
      default : return state
    }
};

export const updateNgoByIdReducer = (state = {}, action) => {
    switch(action.type){
      case 'UPDATE_NGOBYID_REQUEST' :
          return {
              ...state,
              loading : true
          }
      case 'UPDATE_NGOBYID_SUCCESS' :
          return {
              updatesuccess : true,
              updateloading : false
          }
      case 'UPDATE_NGOBYID_FAIL' :
          return {
              updateerror : action.payload,
              updateloading : false
          }
      default : return state
    }
};


