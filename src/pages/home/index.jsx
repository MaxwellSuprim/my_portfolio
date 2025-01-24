import React from 'react';
import './styles.scss';
import { FaUserGraduate } from "react-icons/fa6";

const Home = () => {
  return (
    <section id="home" className='home'>
      <div className='home-text-wrapper'>
        <h1>
          Hello , I'm Suprim
          <br/>
          A passionate IT Engineer<br/>
          <div><FaUserGraduate size={60}color="yellow"/></div>

          

        </h1>

      </div>

    </section>
  )
}

export default Home