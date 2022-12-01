import React from 'react'
import '../CSS/home.css'
import categories from '../allCategories'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <div className="categoriesDiv">
      <h1 id="categoriesHead" className="headings">
        Categories
      </h1>
      <div className="allcards">
        {categories.map(function (category) {
          // console.log(category);
          return <CategoryCard key={category.name} name={category.name} image={category.image} />
        })
        }
      </div>
    </div>
  )
}
