import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {

  
  const [categories, setCategories] = useState(['Samurai X']);

 /*  const handleAdd = () => {
    setCategories([...categories, 'HunterXHunter']); */
    /* setCategories(cats => [...cats, 'HunterHunter']);  */
  /* } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          categories.map(category => 
             <GifGrid 
                key = {category}
                category = {category}/>
          )
        }

      </ol>
   </> 
  )
}
GifExpertApp.propTypes = {
}

export default GifExpertApp;