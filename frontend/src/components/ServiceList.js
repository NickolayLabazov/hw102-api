import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { removeService, fetchServices, currentId, editService } from '../actions/actionCreators';

function ServiceList(props) {
  const { items, loading, error } = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const editRemove =(id) => {
    dispatch(currentId(id));
    dispatch(editService());    
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong try again</p>;
  }

  return (
    <Route exact path='/services'>
      <table>
        <tbody>
          {items.map(o => (
            <tr key={o.id}>
              <td>
                {o.name}
              </td>
              <td>
                {o.price}
              </td>
              <td>
                <Link className="serviceList-link" exact to={`/services/${o.id}`} onClick={() => editRemove(o.id)}>&#9998;</Link>
              </td>
              <td>
                <button onClick={() => handleRemove(o.id)}>✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Route>
  );
}

export default ServiceList
