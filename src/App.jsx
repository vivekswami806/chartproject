import { useState } from 'react'
import './App.css'
import Form from './component/Form'
import SelectingNumber from './component/SelectingNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Form/>   
      {/* <SelectingNumber/>    */}
    </>
  )
}

export default App
