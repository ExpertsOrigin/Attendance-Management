import './App.css';
import Login from './Components/Login';
import Viewstudentdata from './Pages/Viewstudentdata';
import Addnewstudent from './Pages/Addnewstudent';
import Addnewteacher from './Pages/Addnewteacher';
import Teachers from './Pages/Teachers';
import Students from './Pages/Students';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Updatestudent from './Pages/Updatestudent';
import Teacherupdate from './Pages/Teacherupdate';
import Teacher22 from './Pages/Teacher22';
import Updatepassword from './Pages/Updatepassword';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route index element={<Login />} />
          <Route path='/addnewstudent' element={<Addnewstudent />} />
          <Route path='/addnewteacher' element={<Addnewteacher />} />
          {/* <Route path='/teacher' element={<Teachers />} /> */}
          <Route path='/student' element={<Students />} />
          <Route path='/viewstudentdata' element={<Viewstudentdata />}/>
          <Route path='/teacher22' element={<Teacher22 />}/>
          <Route path='/updatepassword' element={<Updatepassword />}/>
        

          <Route path='/updateteacher/:id' element={<Teacherupdate />} />
          <Route path='updatestudent/:id' element={<Updatestudent />} />
          


        </Routes>

      </BrowserRouter>


    </>


  );
}

export default App;
