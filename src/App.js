import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
function App() {
  const[cart,setCart]=useState(0)

  const clickPlus=()=>{
    setCart(cart+1)
  }
  const clickMinus=()=>{
    if(cart>0){
      setCart(cart-1)
    }
    else{
      setCart(0)
    }
  }
  // let body=document.body
  // const clickDark=()=>{
  //     body.classList.add('active')
  // }

  // const clickWhite=()=>{
  //   body.classList.remove('active')
  // }

  const[color,setColor]=useState('white')
  let clickDark=()=>{
    if(color==='light'){
      setColor('dark')
    }
    else{
      setColor('dark')
    }
  }


  let clickWhite=()=>{
    if(color==='dark'){
      setColor('white')
    }
    else{
      setColor('white')
    }
  }

  useEffect(()=>{
    document.className=color
  },[color])

  return (
   <>
   <Header color={color} cart={cart}  />

   <section className={`shop-main ${color}`}>
     <div className='container'>
         <div className='all-shop-main'>
           <div className='shop-box'>
              <div className='shop-img'>
                <img src='https://picsum.photos/id/237/200/300' alt='pic'/>
              </div>

              <div className='shop-text'>
                <p>loremlore lloremlorem</p>
                <button onClick={()=>clickPlus()}>add to cart</button>
                <button onClick={()=>clickMinus()}>remove from cart</button>
              </div>
           </div>
         </div>
     </div>

   </section>


   <section className='color'>
      <button className='dark-btn' onClick={()=>clickDark()}>dark</button>
      <button className='white-btn' onClick={()=>clickWhite()}>white</button>
   </section>
   </>
  );
}

export default App;
