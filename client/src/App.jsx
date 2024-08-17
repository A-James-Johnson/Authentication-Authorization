import React from 'react';
import ReactDOM from 'react-dom';
import Home from './assets/components/home';
import Login from './assets/components/login';
import SignUp from './assets/components/Signup';
import New from './assets/components/new';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App(){
const appRouter = createBrowserRouter([
        {
         path:"/",
         element:<Home />
        } ,
        { 
         path:"/login",
         element:<Login />
        } ,
        {  
        path:"/signup",
        element:<SignUp />
      } ,
        {
         path:"/new", 
         element:<New />
      } 
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
}


export default App