import React, { useReducer } from 'react';
import { userReducer, initialState } from './userReducer';
import { Button } from '@mui/material';

const UserComponent = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleFirstnameChange = (event) => {
    dispatch({type: 'SET_FIRSTNAME', data: event.target.value});
  };

  const sendToBackend = () => {
    console.log(state)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={state.firstname}
        onChange={handleFirstnameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={state.lastname}
      />
      <input
        type="text"
        placeholder="Grade"
        value={state.grade}
      />
      <div>
        <p>First Name: {state.firstname}</p>
        <p>Last Name: {state.lastname}</p>
        <p>Grade: {state.grade}</p>
      </div>
      <Button onClick={sendToBackend}>Submit</Button>
    </div>
  );
};

export default UserComponent;
