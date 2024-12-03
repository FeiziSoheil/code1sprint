import AboutUS from "./Page/AboutUs/AboutUS";
import ExpWorks from "./Page/ExpWorks/ExpWorks";
import Home from "./Page/Home/Home";
import MainPlan from "./Page/MainPlan/MainPlan";


const routes = [
    {path:'/' , element : <Home/>},
    {path : '/aboutUS' , element: <AboutUS/>},
    {path : '/plan/:planID' , element: <MainPlan/>},
    {path : '/expWorks' , element: <ExpWorks/>},
]

export default routes