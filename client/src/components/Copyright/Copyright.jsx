import React from 'react';
import { Link } from 'react-router-dom';


export default function Copyright(props) {
  return (
  <>
        {'Copyright © '}
        <Link color="inherit" to="/">
        La Centrale
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </>
  )
}
