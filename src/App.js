import { useCallback } from "react";
import { useState } from "react";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContext";


function App() {
  const [isBasketVisible, setBasketVisible] = useState(false)

  const showBasketHandler = useCallback(()=>{
    setBasketVisible(prevState=>!prevState)
  },[])
  return (   
    <BasketProvider>
     <Header onShowBasket={showBasketHandler}/>
     <Content>
      <Summary/>
      <Meals/>
    {isBasketVisible && <Basket onClose={showBasketHandler}/>} 
     </Content>
    </BasketProvider>
  )
}

export default App;

const Content = styled.div`
   margin: 101px;
`

/*
GET /foods
GET /basket
POST /foods/:foodId/addToBasket
BODY: { amount: number }
DELETE /basketItem/:id/delete
PUT /basketItem/:id/update
BODY: { amount: number }
*/