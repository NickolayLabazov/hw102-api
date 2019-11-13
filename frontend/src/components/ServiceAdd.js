import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';

function ServiceAdd() {
  const { item, loading, error, currentId } = useSelector(state => state.serviceAdd);
  const { items } = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

 // const currentItem = (items[items.findIndex(o => o.id == currentId)])
  
 /*  console.log(currentItem)  
  if(currentItem){
    dispatch(changeServiceField(currentItem.name, currentItem.value));
  } */
  

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService());
  }

  return (
    <Route exact path={`/services/${currentId}`}>
      <form className='serviceAdd-form' onSubmit={handleSubmit}>
        <label>Название</label>
        <input name='name' onChange={handleChange} value={item.name} />
        <label>Стоимость</label>
        <input name='price' onChange={handleChange} value={item.price} />
        <label>Описание</label>
        <input name='content' onChange={handleChange} value={item.content} />
        <div className="serviceAdd-buttonBox">
        <Link className="serviceList-link" exact to={`/services`}>Отмена</Link>
        {/* <button type='submit' disabled={loading}>Отмена</button> */}
        <button type='submit' disabled={loading}>Сохранить</button>
        </div>
        {error && <p>Something went wrong try again</p>}
      </form>
    </Route>
  );
}

export default ServiceAdd;
