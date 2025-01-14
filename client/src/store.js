import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { addNgoReducer, getAllNgosReducer, getNgoByIdReducer, loginNgoReducer, ngoSignupReducer, updateNgoByIdReducer } from './reducers/ngoReducer';
import { addDonatorReducer, donatorSignupReducer, getAllDonatorsReducer, getDonatorByIdReducer, loginDonatorReducer, updateDonatordByIdReducer } from './reducers/donatorReducer';
import { loginAdminReducer } from './reducers/adminReducer';
import { contactUser } from './reducers/userReducer';

let currentNgo = localStorage.getItem('currentNgo') ? JSON.parse(localStorage.getItem('currentNgo')) : null;
let currentDonator = localStorage.getItem('currentDonator') ? JSON.parse(localStorage.getItem('currentDonator')) : null
let currentAdmin = localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin')) : null




const rootReducer = combineReducers({
 
    //NGO
    ngoSignupReducer,
    loginNgoReducer,
    getAllNgosReducer,
    addNgoReducer,
    getNgoByIdReducer,
    updateNgoByIdReducer,

    //Donator
    donatorSignupReducer,
    loginDonatorReducer,
    getAllDonatorsReducer,
    addDonatorReducer,
    getDonatorByIdReducer,
    updateDonatordByIdReducer,
    
    //Admin
    loginAdminReducer,

    //Contact
    contactUser,
});


const initialState = {
    loginNgoReducer : {
      currentNgo
    },
    loginDonatorReducer : {
      currentDonator
  },
  loginAdminReducer : {
    currentAdmin
  },
  };


const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    + window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
export default store;