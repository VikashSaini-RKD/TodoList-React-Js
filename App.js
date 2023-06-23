// import Nav from "./Navbar/Nav";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import "./Navbar/App.css"
// import Footer from "./Navbar/Footer"
// import Signup from "./Navbar/Signup";
// import Private from "./Navbar/Private";
// import Login from "./Navbar/Login";

// const App = () => {
//     return (
//         <div className="App">
//             <BrowserRouter>
//                  <Nav />
//                 <Routes>
//                     <Route element={<Private />}>
//                         <Route path="/" element={<h1>Product listing component</h1>} />
//                         <Route path="/add" element={<h1>Add Product listing component</h1>} />
//                         <Route path="/update" element={<h1>Update Product listing component</h1>} />
//                         <Route path="/logout" element={<h1>Logout</h1>} />
//                         <Route path="/profile" element={<h1>Profile component</h1>} />
//                     </Route>
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                 </Routes>
//             </BrowserRouter>
//             <Footer />
//         </div>
//     )
// }
// export default App;





// import './App.css';
// import Counter from './features/counter/Counter';
// import Coin from './features/coin/Coin';
// import Theme from './features/theme/Theme';
// function App() {
//   return (
//     <div className="App">
//       <Counter/>
//       <Coin />
//       <Theme />
//     </div>
//   );
// }

// export default App;




import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom";
import CardsInfo from "./components/CardsInfo"
import Address from './components/Address';
import {Signup ,Login,Private} from "./components/Form"
import {Profile,UpdateProfile} from "./Profile/Profile"
import Order from "./Profile/Order"
import Verify from './components/Verify';
import Termcondition from './Term&condition/Term&condition';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/verify/:id' element={<Verify />} />
        <Route path='/' element={<Cards />} />
        <Route path='/Termcondition' element={< Termcondition/>} />

        <Route element={<Private />}>
        <Route path='/cart/:id' element={<CardsDetails />} />
        <Route path='/CardsInfo/:id' element={<CardsInfo />} />
        <Route path='/Address' element={<Address />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/UpdateProfile' element={<UpdateProfile />} />
        <Route path='/Order' element={<Order />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;



// import React ,{useState}from 'react'
// import ExpenceData from './delete/ExpenceData'
// import { Routes, Route } from "react-router-dom";
// import DeleteUpdate from './delete/DeleteUpdate';

// export const data = [
//   {
//     id: 1,
//     rname: "IKALL ",
//     address: "15999 ",
//     price: 11350,

//   },
//   {
//     id: 2,
//     rname: "Moto",
//     address: "16799 ",
//     price: 15389,
//   },
//   {
//     id: 3,
//     rname: "Redmi ",
//     address: "15999 ",
//     price: 14780,

//   },

//   {
//     id: 4,
//     rname: "Oppo ",
//     address: "19799 ",
//     price: 17980,
//   },
//   {
//     id: 5,
//     rname: "Iphone ",
//     address: "45699 ",
//     price: 42350,

//   }]


// function App() {
//   const [CardData, setCardData] = useState(data)

// const deletehandle=(id)=>{
//   const dataList = CardData.filter(i=>i.id!==id)
//   setCardData(dataList)
// }

//   return (
//     <>
//       <Routes>
//           <Route path='/DeleteUpdate' element={<DeleteUpdate />} />
//       </Routes>
//         {
//           CardData.map((item,i) => (
//             <ExpenceData key={i}
//               name={item}
//               address={item}
//               price={item}
//               id={item} 
//               deletehandle={deletehandle}>
//             </ExpenceData>
//           ))}
    
//     </>
//   )}
// export default App