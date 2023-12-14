import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [card, setCard] = useState([])
  const BaseUrl = "http://localhost:7000/books"
  async function fetchData() {
    const res = await axios.get(`${BaseUrl}`)
    setCard(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(card);


  return (
    <div >
    {card && card.map(item => (
        <>
          <img src={item.image} alt="" style={{maxWidth:"100px"}} />
          <p>{item.title}</p>
          {
            console.log(item)
          }
        </>
      ))}
    </div>
  )
}

export default App
