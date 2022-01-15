import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearched, setIsSearched] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e){
    setIsSearched(e.target.value)
    // const filterList = itemData.filter(item => {
    //   return item.name.includes(value)
    // })
    // setIsSearched(filterList)


  }
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  itemsToDisplay = itemsToDisplay.filter((item) => {
    return(
    item.name.toLowerCase().includes(isSearched.toLowerCase())
    )
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
