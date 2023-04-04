import React from 'react'
import './footer.css'


import video2 from '../../assets/video(2).mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillInstagram, AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'


const Footer = () => {
  return (
    <section className='footer'>
         <div className="videoDiv">
             <video src={video2}loop  autoPlay muted type='video/mp4'></video>
         </div>

         <div className="secContent container">
             <div className="contactDiv flex">
                <div className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>

                <div className="inputDiv flex">
                    <input type='text' placeholder='Enter Email Address'/>
                    <button className='btn Flex' type='Submit'>
                           SEND <FiSend className='icon'/>
                    </button>
                </div>

             </div>

             <div className="footercard flex">
                <div className="footerIntro flex">
                     <div className="logoDiv">
                        <a href='#' className='logo flex'> 
                           <MdOutlineTravelExplore className='icon'/> Travel.
                        </a>
                     </div>

                     <div className="footerParagraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Praesentium quas ipsam iusto! Quaerat hic reiciendis deleniti 
                      laudantium placeat? Alias ratione error repudiandae doloremque, 
                      similique illo dolor possimus voluptates rem autem!
                     </div>

                     <div className="footerSocials flex">
                      <AiOutlineTwitter className='icon'/>
                      <AiFillYoutube className='icon'/>
                      <AiFillInstagram className='icon'/>
                      <FaTripadvisor className='icon'/>
                     </div>
                </div>
               
                <div className="footerLinks grid">

                  {/*Group One*/}
                  <div className="linkGroup">
                    <span className="groupTitle">
                      OUR AGENCY
                    </span>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Services
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Insurances
                    </li>
                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Agency
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Tourism
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Payment
                    </li>

                  </div>

                  {/*Group Two*/}
                  <div className="linkGroup">
                    <span className="groupTitle">
                      PARTNERS
                    </span>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Bookings
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Rentcars
                    </li>
                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      HostelWorld
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Trivago
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      TripAdvisor
                    </li>

                  </div>

                  {/*Group Three*/}
                  <div className="linkGroup">
                    <span className="groupTitle">
                      LAST MINUTE
                    </span>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      London
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      California
                    </li>
                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Indonesia
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Europe
                    </li>

                    <li className="footerlistflex">
                      <FiChevronRight className='icon'/>
                      Oceania
                    </li>

                  </div>

                  
                </div>

                <div className="footerDiv flex">
                  <small>BEST TRAVEL WEBSITE</small>
                  <small>COPYRIGHTS RESERVED  - PSYCHOTECH</small>
                </div>
             </div>
         </div>

         </section>
  )
}

export default Footer