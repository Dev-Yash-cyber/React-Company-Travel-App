import React from 'react'
import './main.css'

// IMport React-Icons
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

//Let me import the images so we dont have this error on the browser.
import img from '../../assets/1.jpg' 
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import img9 from '../../assets/9.jpg'
import img10 from '../../assets/10.jpg'
import img11 from '../../assets/11.jpg'


// Let me paste All array named Data
const Data =[
  {
   id:1,
   imgSrc:img,
   destTitle:'CN Tower',
   location:'Cananda',
   grade:'Telecommunication Tower',
   fees:'$580',
   description:'The CN Tower is Tallest Freestanding Structure on land for over 30 years.After Burj Khalifa had been recognized by the Guinness World Records as the Worlds tallest freestanding structure.'
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'The Land of Midnight Sun',
    location:'Norway',
    grade:'The Midnight Sun',
    fees:'$950',
    description:'The country, Norway has acquired the name of the Land of Midnight Sun, as Norway experiences the natural phenomena called the midnight sun because some parts of the country experience.'
   },
   {
    id:3,
    imgSrc:img3,
    destTitle:'Island',
    location:'Fiji Island',
    grade:'Fiji is a tropical island ',
    fees:'$680',
    description:'Fiji is a tropical island nation located in Oceania in the South Pacific Ocean and comprises an archipelago of more than 332 islands, 110 of which are permanently inhabited.'
   },
   {
    id:4,
    imgSrc:img4,
    destTitle:'Leaning Tower of Pisa',
    location:'Italy',
    grade:'Lean Tower',
    fees:'$800',
    description:'The Leaning Tower of Pisa is a medieval structure in Pisa, Italy, that is famous for the settling of its foundations, which by the late 20th century.'
   },
   {
    id:5,
    imgSrc:img5,
    destTitle:'Bali Handara Gate',
    location:'Bali',
    grade:'The path way to serenity',
    fees:'$800',
    description:'If you come to Handara Golf and Resort, you must prepare your camera to take pictures of your every single moment you spend there, as you will see a lot of Instagram worthy places within the golf club & resort.'
   },
   {
    id:6,
    imgSrc:img6,
    destTitle:'Palaces of Petra',
    location:'Petra',
    grade:' Petra is half-built',
    fees:'$750',
    description:'Inhabited since prehistoric times, this Nabataean caravan-city, situated between the Red Sea and the Dead Sea, was an important crossroads between Arabia, Egypt and Syria-Phoenicia.'
   },
   {
    id:7,
    imgSrc:img7,
    destTitle:'Cinque Terre National Park',
    location:'Italy',
    grade:'In 1997, UNESCO recognized Cinque Terre as a World Heritage site',
    fees:'$600',
    description:'In 1997, UNESCO recognized Cinque Terre as a World Heritage site: A remarkable cultural landscape created by human endeavor over a millennium in a rugged and dramatic natural environment.'
   },
   {
    id:8,
    imgSrc:img8,
    destTitle:'Taj Mahal',
    location:'Delhi',
    grade:'Taj Mahal is the jewel of Muslim art in India ',
    fees:'$500',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the   Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.'
   },
   {
    id:9,
    imgSrc:img9,
    destTitle:'Monument to Minin and Pozharsky',
    location:'Moscow,Russia',
    grade:'In front of Saint Basils Cathedral.',
    fees:'$950',
    description:'The prince Dmitry Pozharsky and the merchant Kuzma Minin were the heroes of the 17th century war. They gathered the all-Russian volunteer army and expelled the Poles from the Moscow Kremlin.'
   },
   {
    id:10,
    imgSrc:img10,
    destTitle:'Spiti Valley',
    location:'Himachal Pradesh,India',
    grade:'Spiti Valley is famous for its rich floral and fauna.',
    fees:'$700',
    description:'Spiti valley is famous for its natural beauty and cultural heritage. Tabo monastery is one of the most prominent attractions in Spiti. The monasteries in Spiti are renowned for spectacular murals, ancient temples, and several stupas.'
   },
   {
    id:11,
    imgSrc:img11,
    destTitle:'Horseshoe Bend',
    location:'Arizona',
    grade:'RedRock Mountains',
    fees:'$1200',
    description:'The Colorado River started to cut through endless layers of rock, and when it ran into Horseshoe Bend, it creates this natural, sculptural landscape. The river eventually went around it, and now there is a 270-degree bend in the river which created the now-famous horseshoe shape.'
   }
  
   ]

const main = () => {
  return (
   <section className='main container section' >

     <div className='secTitle'>
      <h3 className='title'>
        Most visited Destinations
      </h3>
     </div>

     <div className='secContent grid'>
      {/*so guys, here we are going to use high ordfer array metod(map).
        To do that we shall use a list if object in one array.I'm going
        to create an array named data and from that we shall .map() array to 
        fetch each destinations at once. I hope this will make sence to you!
     */}

      {
        Data.map(({ id , imgSrc, destTitle, location, grade, fees,
         description})=>{
           return(
        <div key={id} className='singleDestination'>
              {/* Here it will return single id from the map array */}

              <div className="imageDiv">
                <img src={imgSrc} width='280px' alt={destTitle}/>
              </div>

            <div className="cardInfo">
                <h4 className='destTitle'>{destTitle}</h4>
                <span className='continent Flex'>
                  <HiOutlineLocationMarker className='icon'/>
                  <span className='name'>{location}</span>
                </span>
                
               <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
               </div>

               <div className="desc">
                <p>{description}</p>
               </div>

               <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
               </button>

             </div>
        </div>
           )

        })
      }
     </div>

   </section>
  )
}

export default main