import React from 'react';
import "./single.css";
import Sidebar from '../../sidebar/Sidebar';
import SinglePost from '../../singlepost/Singlepost';

export default function Single() {
  return (
    <div className='single'>
                <SinglePost/>
                <Sidebar/>
    </div>
  )
}
