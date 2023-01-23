import React from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleXmark,faCircleArrowRight,faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {
  const [slideNumber,setSlideNumber]= useState(0)
  const [open,setOpen]= useState(false)

 const photos=[
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/56681997.jpg?k=b8ba628e0172543accbd36cac872d48359d697211f14e876ecef5f227f690587&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/16286724.jpg?k=30057191700d4ed4321fd599dc0d82da125726ea28734d1b4c1710f435b2a370&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/144087819.jpg?k=2de7dd70c3b1f1bf80a60d1c6caf2b58d222982244928a02930fe238eec6d5a6&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/280782457.jpg?k=6fbdd55dc2ab5e857b98ef8ae95f1fea823b02f9b43e6a39467a9d45c4069b0f&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/56682197.jpg?k=a6d7df65365268a9d532d888646f3a8ddd5a6ca9f19be7c7af62b05b73ab3061&o=&hp=1"
  },
  {
    src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/227705409.jpg?k=23e51005a3c3f09ca19535e08c2f73e178c6ee9ca3f3bc059dab95ac92da1f32&o=&hp=1"
  },
 ]
 
 const handleOpen= (i)=>{
  setSlideNumber(i);
  setOpen(true)
 }
 const handleMove=(direction)=>{
  let newSlideNumber;
  if(direction==="l"){
    newSlideNumber = slideNumber===0 ? 5 : slideNumber-1;
  }
  else{
    newSlideNumber = slideNumber===5 ? 0 : slideNumber+1;
  }
  setSlideNumber(newSlideNumber)
 }

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
     {open &&  <div className="slider">
         <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} className='close' />
         <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>{handleMove("l")}} />
         <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" />
         </div>
         <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=>{handleMove("r")}} className='arrow'/>

      </div>}
       <div className='hotelWrapper'>
       <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton St 125 New york</span>
        </div>
        <span className="hotelDistance">
          Excellent location - 500m from centre
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo,i)=>(
            <div className="hotelImgWrapper">

            <img onClick={()=>handleOpen(i)} src={photo.src}  className='hotelImg' alt="img" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">
              Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
              Encompassed within a rustic surrounding and lush gardens, Jasmin Hotel is located a 25-minute drive from Dabolim Airport. The property offers free Wi-Fi and an outdoor pool.Located only 1.2 mi to Colva Beach, the hotel is also within a 3.1 mi distance to Margao City and 5 mi from Margao railway station. Margao bus stand is 3.1 mi away.Air-conditioned rooms at Jasmin Hotel are equipped with a ceiling fan, a TV, a mini fridge and individual tea/coffee-makers. Attached bathrooms include hot/cold shower facilities. Each room also features a direct view of the hotel’s lush gardens.A 24-hour front desk can assist guests with laundry and ironing services, car rental as well as Airport shuttle services at a surcharge. Breakfast can be served in the room upon request.Jasmin Hotel’s Melati Resto Bar serves local and international cuisine.
              </p>
          </div>
          <div className="hotelDetailsPrice">
             <h1>Perfect for a 9-night stay!</h1>
             <span>
              Located in the heart of Krakow,this property has an excellent location score of 9.8!
             </span>
             <h2>
              <b>$987</b> (9 nights)
             </h2>
             <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Hotel