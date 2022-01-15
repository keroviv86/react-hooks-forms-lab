import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName]= useState('')
  const [category, setCategory]= useState('Produce')

  function handleSubmit(event){
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category,
    })
  }

  function handleNameChange(e){
    setName(e.target.value)
  }



  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange= {handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange= {handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
