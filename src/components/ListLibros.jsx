import React, { useEffect, useState } from 'react';
import Libro from './Libro.jsx';

const ListLibros = () => {
  const [listaLibros, setListLibros] = useState([])
  const Api = 'https://www.etnassoft.com/api/v1/get/?any_tags=%5Bhtml,css,javascript%5D&order=newest'
  useEffect(() => {
    fetch(Api)
    .then(perro=>perro.json()
    .then(data => {
      let dataMasPrecio = data.map(item => {
      let price = Math.floor(Math.random() * 100)
        item.price = price
        return item
      })
      setListLibros(dataMasPrecio)
    })
    )
  }, [])
  
  return (
    <div>
      {
        listaLibros.length > 0
        ? listaLibros.map(libro => (
          <Libro
            author={libro.author}
            title={libro.title}
            key={libro.ID}
            coverImg={libro.cover}
            contentShort={libro.content_short}
            price={libro.price}
          />
        ))
        : <p>Loading...</p>
        }
    </div>
  );
};

export default ListLibros;

// const [step, setStep] = useState(0)

// const incrementStep = () => {
//   setStep(step + 1)
// }
// const decrementStep = () => {
//   setStep(step - 1)
// }
/* {step} */
/* <button onClick={() => setStep(step + 1)}>+</button>
<button onClick={() => setStep(step + 2)}>+2</button>
<button onClick={() => setStep(step + 3)}>+3</button>
<button onClick={() => setStep(step + 4)}>+4</button>
<button onClick={() => setStep(step + 5)}>+5</button> */
/* <button onClick={incrementStep}>+</button>
<button onClick={decrementStep}>-</button> */
/* <button onClick={()=>setStep(step + 1)}>+</button>
<button onClick={()=>setStep(step - 1)}>-</button> */