import React from 'react';

const Libro = ({
  author,
  title,
  coverImg,
  contentShort,
  price
}) => {
  
  // const {author, title} = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <img src={coverImg} alt={title}/>
      <p>{contentShort}</p>
      <p>{price}</p>
      <button>Agregar a carrito</button>
    </div>
  );
};

export default Libro;