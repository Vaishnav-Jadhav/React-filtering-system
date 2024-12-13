import { Nav } from './Navigation/Nav';
import { Products } from './Products/Products';
import { Recommended } from './Recommended/Recommended';
import { Sidebar } from './Sidebar/Sidebar';
import { Card } from './components/Card';
import './index.css'

//Database
import data from './DB/Data';
import { useState } from 'react';
import { Category } from './Sidebar/Category/Category';


function App() {
  const[selectCategory,setSelectedCategory]=useState(null);

  //input Filter
  const[query,setQuery]=useState("");

  const handleInputChange =(event)=>{
    setQuery(event.target.value);
  };

  const filteredItems = data.filter((data)=>
  data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1)
  );

  //console.log(filteredItems);

  //Radio Filter
  const handleChange=event=>{
    setSelectedCategory(event.target.value);
  }

  //Buttons Filter
  const handleBtnClick=event=>{
    setSelectedCategory(event.target.value);
  }


  function FilteredProducts(products,selected,query)
  {
    let filteredData =products

    //filtering Input Items
    if(query)
    {
      filteredData=filteredItems;
    }

    //selected Filter
    if(selected)
    {
      filteredData=filteredData.filter((products)=>
        products.category ===selected||
        products.color=== selected||
        products.company===selected||
        products.newPrice===selected||
        products.title===selected
      );
    }

    
      return filteredData.map((value,index)=>
      <Card key={index}
      img={value.img} 
      title={value.title}
      rating={value.rating}
      reviews={value.reviews}
      newPrice={value.newPrice}
      prevPrice={value.prevPrice}/> )
     

    // return filteredData.map(({img,title,rating,reviews,newPrice,prevPrice})=>(        
    //   <Card key={Math.random()}
    //   img={img}
    //   title={title}
    //   rating={rating}
    //   reviews={reviews}
    //   newPrice={newPrice}
    //   prevPrice={prevPrice}
    //   />
    //))
  }

  const result=FilteredProducts(data,selectCategory,query)

  return (
    <div className="App">
     <Sidebar handleChange={handleChange}/>
     <Nav query={query} handleInputChange={handleInputChange} />                                           
     <Recommended handleBtnClick={handleBtnClick}/>
     <Products result={result}/>
    </div>
  );
}

export default App;
