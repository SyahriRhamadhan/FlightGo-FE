import React from 'react';
import Slider from 'react-slick';
import '../landingPage.css'

// Assets
import pict1 from '../../assets/img/LandingPage/destinations/1.png'
import pict2 from '../../assets/img/LandingPage/destinations/2.png'
import pict3 from '../../assets/img/LandingPage/destinations/3.png'
import Flight from '../../assets/img/LandingPage/destinations/Flight.png'

function Destination() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
    <div className="Favorit">
        <div className='text-5xl font-bold'>Popular Routes</div>
        <div className='text-sm pt-2 pb-5'>Popular destinations open to the most visitors</div>
        <div className='text-4xl font-bold pb-3'>Domestic</div>

        <Slider {...settings}>
          <div className="card">
            <div className="card-top">
              <img src={pict1} alt={pict1}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Lombok</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Mountain Hiking Tour</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$89/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={pict2} alt={pict2}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Bandung</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Bandung</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$99/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={pict3} alt={pict3}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Medan</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Mountain Hiking Tour</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$79/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={pict1} alt={pict1}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Bali</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Bali</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$69/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>
        </Slider>

        <div className='text-4xl font-bold pt-5 pb-3'>International</div>
        <Slider {...settings}>
          <div className="card">
            <div className="card-top">
              <img src={pict1} alt={pict1}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Spanyol</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Mountain Hiking Tour</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$89/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={pict2} alt={pict2}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Qatar</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Qatar</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$99/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={pict3} alt={pict3}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Jerman</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Mountain Hiking Tour</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$79/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={pict1} alt={pict1}/>
              <div className='grid grid-cols-3 ml-5 text-base font-semibold pt-2'>
                <div>Jakarta</div>
                <img alt='Flight' src={Flight}/>
                <div>Amerika</div>
              </div>
            </div>

            <div className="card-bottom text-sm">
              <div>Amerika</div>
              <div className='grid grid-cols-2 pt-2'>
                <div>$69/ Person</div>
                <button className='py-1 bg-orange-500 rounded-md text-white'>Booking Now</button>
              </div>
            </div>
          </div>
      </Slider>
    </div>
  );
}

export default Destination;