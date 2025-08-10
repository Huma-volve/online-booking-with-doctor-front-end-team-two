import { createBrowserRouter, RouterProvider, Routes } from 'react-router'
import ForgetPassword from './components/Authentication/ForgetPassword/ForgetPassword'
import SignIn from './components/Authentication/SignIn/SignIn'
import SignUp from './components/Authentication/SignUp/SignUp'
import UpdatePassword from './components/Authentication/UpdatePassword/UpdatePassword'
import Verification from './components/Authentication/Verification/Verification'
import BookYourAppoinment from './components/BookYourAppoinment/BookYourAppoinment'
import FindDoctors from './components/FindDoctors/FindDoctors'

import Layout from './Layout/Layout'
import { Toaster } from 'react-hot-toast'

import VisaVersion from './components/VisaVersion/VisaVersion'
import AddNewCard from './Payment/AddNewCard/AddNewCard'
import PaymentMethod from './Payment/PaymentMethod/PaymentMethod'
import EmptyCards from './Payment/EmptyCards/EmptyCards'
import Home from './components/Home/Home'


function App() {

     const router =  createBrowserRouter([
 {
   path : "/" , element: <Layout/>,
   children: [
       { index: true,        element: <Home /> },
       { path: "SignUp", element: <SignUp />},
       { path: "SignIn", element: <SignIn />},
       {path: "ForgetPassword", element: <ForgetPassword />},
       {path: "UpdatePassword", element: <UpdatePassword />},
       {path: "Verification", element: <Verification />},
       {path: "BookYourAppoinment", element: <BookYourAppoinment />},
       {path:"FindDoctors",  element: <FindDoctors/>},
       {path:"PaymentMethod",  element: <PaymentMethod/>},
       {path:"Home",  element: <Home/>},
       {path:"VisaVersion",  element: <VisaVersion/>},
       {path:"EmptyCards",  element: <EmptyCards/>},
       {path:"AddNewCard",  element: <AddNewCard/>},


        
 
   ]
 }
     ])

 
  return (
    <>
  
 <RouterProvider router={router} />
     <Toaster position="top-right" reverseOrder={false} />
  

    </>
  )
}

export default App
