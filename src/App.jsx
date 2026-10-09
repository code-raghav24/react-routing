import { lazy, Suspense } from "react"
import { BrowserRouter,Routes,Route,useNavigate } from  "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
const Career = lazy(()=>import( "./components/Career" ));
const About = lazy(()=>import("./components/About"));

function App () {
  return <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/career" element={<Suspense fallback={<Loader/>}><Career/></Suspense>}/>
        <Route path="/about" element={<Suspense fallback={<Loader/>}><About/></Suspense>}/> 
      </Routes>
    </BrowserRouter>
  </>
}
function Loader () {
  return <h1 style={{color:"red"}}>Loading ....</h1>
}
function Nav () {
  const navigate = useNavigate();
  return <>
    <div style={{padding:"20px",border:"1px solid black",display:"flex", justifyContent:"center",gap:"20px"}}>
      <button onClick={()=>{
        navigate("/");
      }} style={{padding:"10px"}}>Home</button>
      <button onClick={()=>{
        navigate('/dashboard');
      }} >Dashboard</button>
      <button onClick={()=>navigate('/career')}>Career</button>
      <button onClick={()=>navigate("/about")}>About</button>
    </div>
  </>
}
export default App
