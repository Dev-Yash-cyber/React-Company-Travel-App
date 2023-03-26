import React from 'react'
import './main.css'

const main = () => {
  return (
   <section className='main container section'>

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
        Data.map(({ id , imgsrc, destTitle, location, grade, fees,
         description})=>{
           return(
            <div key={id} className='singleDestination'>
              {/* Here it will return single id from the map array */}
            </div>
           )

        })
      }
     </div>

   </section>
  )
}

export default main