import React from 'react';
import '../pages/Cards.css';
import CardItem from '../pages/Carditem';

function Cards() {
  return (
    
    <div className='cards'>
      <h1>ITSP Projects are displayed here-</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Project members - Thor, Tony, Steve, Natasha'
              label='AI-Bot'
              path='/Project1'
            />
            <CardItem
              src='images/2.jpg'
              text='Project members - Thor, Tony, Steve, Natasha'
              label='Self balancing bot'
              path='/Project1'
            />
            <CardItem
              src='images/3.png'
              text='Project members - Thor, Tony, Steve, Natasha'
              label='Web application development'
              path='/Project1'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/4.jpeg'
              text='Project members - Thor, Tony, Steve, Natasha'
              label='Mars-Rover'
              path='/Project1'
            />
            <CardItem
              src='images/5.jpeg'
              text='Project members - Thor, Tony, Steve, Natasha'
              label='Assistant arm'
              path='/Project1'
            />
            <CardItem
              src='images/6.png'
              text='Project members - Thor, Tony, Steve, Natasha'
              label='Image Compressor web app'
              path='/Project1'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;