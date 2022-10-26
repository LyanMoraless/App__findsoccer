import React from 'react';
import api from '../services/api';

export const QuadrasContext = React.createContext();

export const QuadrasProvider = ({ children }) => {
  const [quadras, setQuadras] = React.useState([]);



  const listQuadras = async () => {
    const res = await api.get('/quadras');
    setQuadras(res.data);
  }

  return (
    <QuadrasContext.Provider value={{ quadras, listQuadras }}>
      {children}
    </QuadrasContext.Provider>
  )
}