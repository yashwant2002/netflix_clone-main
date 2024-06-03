import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Home, Login, Movies, MyList, Player, Signup, TVShows } from './pages/index'

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/player/:id' element={<Player />} />
          <Route exact path='/mylist' element={<MyList />} />
          <Route exact path='/movies' element={<Movies />} />
          <Route exact path='/tv' element={<TVShows/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
