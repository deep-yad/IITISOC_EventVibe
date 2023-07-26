import React from 'react';

export default function Date(date){
 const date1=new Date(date);

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formattedDate;
};