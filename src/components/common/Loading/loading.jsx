import React from 'react';
import ReactLoading from 'react-loading';
import './loading.css';
 
const Loading = ({ type, color }) => (
    <ReactLoading className='loading' type={type} color={color} height={'20%'} width={'20%'} />
);
 
export default Loading;