import React from 'react'
import Counter from './Counter'
import Addition from './Addition'
import Substraction from './Substraction'
import Multiplication from './Multiplication'
import Division from './Division'
import Temperature from './Temperature'
import Emi from './Emi'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Bmi from './Bmi'
import Bmr from './Bmr'
import Calorie from './Calorie'


function App() {
  return (
    <div>


      <BrowserRouter>
      <Navbar></Navbar>


      <Routes>

        <Route path='addition' element={<Addition></Addition>}></Route>
        <Route path='temperature' element={<Temperature></Temperature>}></Route>
        <Route path='counter' element={<Counter></Counter>}></Route>
        <Route path='bmi' element={<Bmi></Bmi>}></Route>
        <Route path='emi' element={<Emi></Emi>}></Route>
        {/* <Route path='bmr'element={<Bmr></Bmr>}></Route> */}
        <Route path='calorie' element={<Calorie></Calorie>}></Route>

      </Routes>
      </BrowserRouter>

      {/* <Counter></Counter> */}

      {/* <Addition></Addition> */}

      {/* <Substraction></Substraction> */}

      {/* <Multiplication></Multiplication> */}


         {/* <Division></Division> */}
         {/* <Temperature></Temperature> */}
         {/* <Emi></Emi> */}
    </div>
  )
}

export default App
