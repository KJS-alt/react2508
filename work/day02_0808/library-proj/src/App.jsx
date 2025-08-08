import { useState } from 'react'
import './App.css'
// import Book from './components/Book.jsx'
// import Library from './components/Library'
// import ConfirmDialog from './components/ConfirmDialog'
// import Boxlist from './components/Boxlist'
import RenoCars from './components/RenoCars'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>오늘의 수업은...</h1>
      {/* <Book></Book> */}
      {/* <Library></Library> */}
      {/* <ConfirmDialog /> */}
      {/* <Boxlist/> */}
      <RenoCars/>
    </>
  )
}

export default App
