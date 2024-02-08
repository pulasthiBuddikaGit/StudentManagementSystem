import './App.css';
import AddStudent from './Components/AddStudent';
import AllStudents from './Components/AllStudents';
import SearchStudents from './Components/SearchStudents'
import UpdateStudent from './Components/UpdateStudent'
import DeleteStudent from './Components/DeleteStudent';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
   
    
      <div>
        <BrowserRouter>
          <Header/>
          <Routes> 
        
            <Route path='/add'  element={<AddStudent/>} />
            <Route path='/'  element={<AllStudents/>}/>
            <Route path='/search' element={<SearchStudents/>}/>
            <Route path='/update' element={<UpdateStudent/>}/>
            <Route path='/delete' element={<DeleteStudent/>}/>
            
          </Routes> 
        </BrowserRouter>
      </div>
    
  );
  
}

export default App;
