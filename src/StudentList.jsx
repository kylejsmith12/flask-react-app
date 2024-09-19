import React, { useContext, useState } from 'react';
import { ApiContext } from './ApiContext';
import { Autocomplete, TextField } from '@mui/material';

const StudentList = () => {
  const { students, grades, loading, error } = useContext(ApiContext);

  const [stuff, setStuff] = useState([])

  const newThing = students.map(i => ({label: i.first_name, id: i.row_id}) )
    console.log(students,grades, newThing)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.first_name}</li>
        ))}
      </ul>
      <Autocomplete
        options={newThing}
        renderInput={(params) => <TextField {...params} label="Names" />}
    />
    </div>
  );
};

export default StudentList;
