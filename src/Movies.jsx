import React from 'react';
import * as service from './api/service';
import Movie from './Movie';


function Movies() {
    const [data, setData] = React.useState([]);
    const fetchdata = () => {
      service.getAllMovies().then((data) => {
        setData(data);
      });
    }
    React.useEffect(() => {
      fetchdata();
    }, []);

  return (
    <>
        <div className="container">
      <h1>Content Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>title</th>
            <th>year</th>
            <th>img</th>
            <th>genre</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
          <Movie data={item} key={index}/>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Movies;
