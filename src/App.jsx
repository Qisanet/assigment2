import React from 'react'
import Card from './Card'
import './index.css'



function App() {  
  const mylist=[
    {
      image:"https://via.placeholder.com/150",
      tittle:"Card1",
      description:"THis is my card one"
  },
    {
      image:"https://via.placeholder.com/150",
      tittle:"Card2",
      description:"THis is my card two"
  },
    {
      image:"https://via.placeholder.com/150",
      tittle:"Card3",
      description:"THis is my card three"
  },
    

  ];
 
  return (
    <
    Card mycard={mylist}/>
   
     
      
    
  )
}

export default App
