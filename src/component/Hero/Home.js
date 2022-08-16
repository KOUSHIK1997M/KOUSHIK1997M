import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import { DiJavascript1, DiNodejs, DiPython } from "react-icons/di";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Koushik Mandal</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder😉.", " Front End Developer😃.", " Backend Developer", "Full-Stack Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                    <TiSocialFacebook/>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                    <TiSocialLinkedin/>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                    <TiSocialTwitter/>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  {/* <img src={skill1} alt='' /> */}
                  <DiJavascript1/>
                </button>
                <button className='btn_shadow'>
                  {/* <img src={skill2} alt='' /> */}
                  <DiNodejs/>
                </button>
                <button className='btn_shadow'>
                  {/* <img src={skill3} alt='' /> */}
                  <DiPython/>
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
