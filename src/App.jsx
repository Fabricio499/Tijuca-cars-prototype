import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AdminPage } from './pages/AdminPage'
import {Login} from './pages/login/index'
import {Cliente} from './pages/cliente'
import { NoContent } from './pages/NoContent';
export const App = () => {
  
  return (
    <NoContent />
  )
}