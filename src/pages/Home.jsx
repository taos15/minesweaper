import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useSome } from '../utilities/MainContextProvider';

export const Home = () => {
  // // react query, add a call back function as the second param to do the query
  // const { data, isLoading, isError } = useQuery(['idForQuery'], async () => {
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  //   const data = await res.data;
  //   return data;
  // });
  const { someState, setSomeState } = useSome();

  const handleCLick = (e) => {
    e.target.lastChild.className = 'visible';
    console.log('after changing:', e.target.lastChild);
  };

  const board = Array(100)
    .fill()
    .map((i, index) => (
      <div
        key={index}
        onClickCapture={(e) => handleCLick(e)}
        className='m-0 border-2 p-0 '
      >
        {/* <p onClick={(e) => handleCLick(e)} className='invisible'> */}
        <p className='invisible'>'</p>
      </div>
    ));
  console.log(board[0].props.children.props.children);

  return <div className='grid-rows-10 columns-10 gap-0  border-4'>{board}</div>;
};
