// import React from 'react';
// import useReg  from '../hooks/useReg';
import { useReg } from "../hooks/useReg";
import { Navigate } from 'react-router-dom';

export const RoutePermission = ({ children }: { children: JSX.Element}) => {

  const isReg = useReg();
  return !isReg.user ? children : <Navigate to="/main" />
};