import React, { createContext, useState, useEffect } from 'react';

// Define context
export const ApiContext = createContext();

// Define provider component
export const ApiProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch students and grades from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await fetch('http://127.0.0.1:5000/students');
        if (!studentsResponse.ok) throw new Error('Failed to fetch students');
        const studentsData = await studentsResponse.json();
        console.log(studentsData)
        setStudents(studentsData);

        const gradesResponse = await fetch('http://127.0.0.1:5000/grades');
        if (!gradesResponse.ok) throw new Error('Failed to fetch grades');
        const gradesData = await gradesResponse.json();
        console.log(gradesData)
        setGrades(gradesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ students, grades, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
