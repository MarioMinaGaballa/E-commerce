import React from "react";


function Cards(props) {
  const truncateTitle = (title, wordLimit) => {
    const words = title.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; 
    }
    return title;
  };
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; 
    }
    return description;
  };

  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
      <img src={props.product.images} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{truncateTitle(props.product.title,3)}</h5>
        <p class="card-text">
          {truncateDescription(props.product.description,10)}
        </p>
        <p>Price : ${props.product.price}</p>
        <a href={`/products/${props.product.id}`} class="btn btn-primary">
          Details
        </a>
      </div>
      </div>
      </>
  );
}

export default Cards;
