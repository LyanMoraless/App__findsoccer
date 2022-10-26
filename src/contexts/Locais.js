import React from 'react';
import api from '../services/api';

export const LocaisContext = React.createContext();

export const LocaisProvider = ({ children }) => {
  const [locais, setLocais] = React.useState([]);



  const listLocais = async () => {
    const res = await api.get('/locais');
    setLocais(res.data);
  }

  return (
    <QuadrasContext.Provider value={{ locais, listLocais }}>
      {children}
    </QuadrasContext.Provider>
  )
}