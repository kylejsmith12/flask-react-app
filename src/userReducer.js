// Initial state
const initialState = {
    firstname: '',
    lastname: '',
    grade: ''
  };
  
  // Action types
  const SET_FIRSTNAME = 'SET_FIRSTNAME';
  const SET_LASTNAME = 'SET_LASTNAME';
  const SET_GRADE = 'SET_GRADE';
  
  // Reducer function
  const userReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case SET_FIRSTNAME:
        return { ...state, firstname: action.data };
      case SET_LASTNAME:
        return { ...state, lastname: action.payload };
      case SET_GRADE:
        return { ...state, grade: action.payload };
      default:
        return state;
    }
  };
  
  export { userReducer, initialState, SET_FIRSTNAME, SET_LASTNAME, SET_GRADE };
  