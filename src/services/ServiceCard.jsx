import React from 'react';
import '../styles/service-card.css';

const ServiceCard = ({ item, clickHandler }) => {
  const { imgUrl, title, title1, desc } = item;

  return (
    <div className="service__item" onClick={() => clickHandler(title)}>
      <div className="service__img">
        <img src={imgUrl} alt={title} />
      </div>
      <h5>{title}</h5>
      <h5>{title1}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
