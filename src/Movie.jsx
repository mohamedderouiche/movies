/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


function Movie({data}) {
  return (
    <>
      <tr key={data.id}>
              <td>{data.Movie}</td>
              <td>{data.year}</td>
              <td>{data.img}</td>
              {/* <td><Link  className='btn btn-primary' to={`/details/${data.id}`} >details</Link></td> */}
            </tr>
      
    </>
  );
}

export default Movie;
