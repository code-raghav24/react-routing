import { lazy, Suspense } from "react"
import { BrowserRouter,Routes,Route,useNavigate } from  "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
// import Career from "./components/Career"
// import About from "./components/About"
const Career = lazy(()=>import( "./components/Career" ));
const About = lazy(()=>import("./components/About"));

function App () {
  return <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/career" element={<Suspense fallback={"loading...."}><Career/></Suspense>}/>
        <Route path="/about" element={<Suspense fallback={"loading....."}><About/></Suspense>}/> 
      </Routes>
    </BrowserRouter>
  </>
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
