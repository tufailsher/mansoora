import React from 'react'

export const LargeSectionHeader = ({title}:{title:String}) => {
  return (
    <div className='flex justify-center font-extrabold  text-2xl m-0'>{title}</div>
  );
}

export default LargeSectionHeader;
