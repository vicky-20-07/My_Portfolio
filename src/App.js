import React, { useState } from 'react';
import styled from 'styled-components';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import portrait from './portrait.png';
import './GoToTop';
import GoToTop from './GoToTop';
import { FaAppStore, FaCode, FaFigma } from 'react-icons/fa';
import C from './C.png';
import Java from './java.png';
import JS from './js.png';
import html from './html.png';
import css from './css.png';
import react from './react.png';
import mysql from './mysql.png';
import flutter from './flutter.png';
import mongo from './mongo.png';
import vscode from './vscode.png';
import as from './android.png';
import figma from './figma.png';
import Footer from './Footer';
import qpixel from './Screenshot 2024-03-19 135549.png';
import netflix from './Screenshot 2024-03-19 151810.png';
import sports from './Screenshot 2024-03-19 154909.png';
import madrid from './ASSISTANT (2).jpg';
import snapixel from './ASSISTANT.jpg';
import resume from './Screenshot 2024-05-29 211545.png';
import './App.css';

export default function Portfolio() {

  const [state, setState] = useState(1);
  const [projectState, setProjectState] = useState(0);

  const [typeEffect] = useTypewriter({
    words: ['Full Stack Development', 'Android Development', 'Web designing'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <div className='Container'>
      <div className='Header' id='home'>
        <div className='Logo'>
          <h1>VIGNESH <span>M</span></h1>
        </div>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#Projects">PROJECT</a></li>
          <li><a href="#portfolio">RESUME</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
      <div className='Home'>
        <p>
          <h6>Hi There !</h6>
          <h1>My name is <span>VIGNESH M</span></h1>
          <h5>I'm an enthusiast in {typeEffect}<span><Cursor cursorStyle='|' /></span></h5>
          <a href='717821F260-VIGNESH M (2).pdf' download='Resume.pdf'><button>DOWNLOAD CV</button></a>
        </p>
        <div className='Portrait'>
          <img src={portrait} alt='Portrait' />
        </div>
      </div>
      <div className='About' id='about'>
        <h1>About Me</h1>
        <div className='aboutMe'>
          <div className='AboutContent'>
            <p>I am currently in my third year of pursuing a Bachelor's degree in Information Technology. I am particularly drawn to full-stack development, which constitutes the primary focus of my work. Moreover, I have cultivated proficiency in my problem-solving skills and have acquired a foundational understanding of Object Oriented Programming (OOP) concepts.</p>
            <div className="tabs">
              <p className={state === 1 ? "tab-links active" : "tab-links"} onClick={() => setState(1)}>Skills</p>
              <p className={state === 2 ? "tab-links active" : "tab-links"} onClick={() => setState(2)}>Education</p>
              <p className={state === 3 ? "tab-links active" : "tab-links"} onClick={() => setState(3)}>Certificates</p>
            </div>
            {
              state === 1 ? (
                <div class="tab-contents" id="skills">
                  <ul>
                    <li>
                      <h3>Languages</h3>
                      <ul className='inner-list'>
                        <li><a href='https://devdocs.io/c/'><img src={C} /></a></li>
                        <li><a href='https://docs.oracle.com/en/java/'><img src={Java} /></a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/javascript'><img src={JS} /></a></li>
                      </ul>
                    </li>
                    <li>
                      <h3>Development Technologies</h3>
                      <ul className='inner-list'>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><img src={html} /></a></li>
                        <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><img src={css} /></a></li>
                        <li><a href='https://legacy.reactjs.org/docs/getting-started.html'><img src={react} /></a></li>
                        <li><a href='https://docs.flutter.dev/'><img src={flutter} /></a></li>
                        <li><a href='https://www.mongodb.com/docs/'><img src={mongo} /></a></li>
                        <li><a href='https://dev.mysql.com/doc/' style={{ height: '80px' }}><img src={mysql} style={{ height: '80px', margin: '-20px 0 0 -40px' }} /></a></li>
                      </ul>
                    </li>
                    <li>
                      <h3>Development Tools</h3>
                      <ul className='inner-list'>
                        <li><a href='https://code.visualstudio.com/'></a><img src={vscode} style={{ filter: 'none', height: '35px' }} /></li>
                        <li><a href='https://developer.android.com/studio'></a><img src={as} style={{ filter: 'none' }} /></li>
                        <li><a href='https://www.figma.com/@vicky84'></a><img src={figma} /></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : <></>
            }

            {
              state === 2 ? (
                <div class="tab-contents" id="education">
                  <ul>
                    <li><span>Karpagam College of Engineering</span><br />BTech in Information Technology<br />CGPA - 7.6 till 5th semester<br />2021-2025</li>
                    <li><span>HNUPR Matric. hr. sec. School</span><br />Computer Science<br />86.65 - Higher Secondary Certificate<br />2020-2021</li>
                    <li><span>Kaviyan School</span><br />82.4 - Secondary School Leaving Certificate<br />2018-2019</li>
                  </ul>
                </div>
              ) : <></>
            }

            {
              state === 3 ? (
                <div class="tab-contents" id="projects">
                  <ul>
                    <li><span>Udemy Certificate</span><br />The MERN Full Stack Guide</li>
                    <li><span>UiPath Certificate</span><br />UiPath Studio Family - Learnathon India 2023</li>
                    <li><span>Hackerrank Certificates</span><br />Problem solving, JavaScript, Java, React - Basic</li>
                    <li><span>LinkedIn Certificates</span><br /> Illustrator 2023 Quick Start, HTML for programmers, Web development</li>
                    <li><span>NPTEL Certificate</span><br />Developing Softskills and Personality</li>
                  </ul>
                </div>
              ) : <></>
            }
          </div>
          <div className='AboutImage'>
            <img src={portrait} alt='Portrait' />
          </div>
        </div>
      </div>
      <div className='Projects' id='Projects'>
        <div class="container">
          <h1 class="sub-title">Projects</h1>
          <div class="services-list">
            <div>
              <FaCode style={{ fontSize: '80px' }} />
              <h2>Web Development</h2>
              <p>In the past, I've crafted websites utilizing HTML, CSS, and JavaScript. Presently, my focus has shifted towards projects built on the MERN stack. These projects serve as playgrounds for my experimentation with various React Js libraries and styling with CSS, allowing me to explore and integrate new technologies into my work.</p>
              <a onClick={() => setProjectState(1)} href='#1'>View Projects</a>
            </div>
            <div>
              <FaFigma style={{ fontSize: '75px' }} />
              <h2>UI/UX design</h2>
              <p>I recently acquired a passion for crafting the user interfaces for mobile applications using Figma. I gravitate towards creating simple and clean interfaces that prioritize the ease of use. My aim is to seamlessly deliver every service within the application to make the user understand the design language for the clean user experience.</p>
              <a onClick={() => setProjectState(2)} href='#2'>View Projects</a>
            </div>
            <div>
              <FaAppStore style={{ fontSize: '80px' }} />
              <h2>App Development</h2>
              <p>As a novice in Flutter mobile application development, I utilize Android Studio to craft functional and minimalist mobile applications using Dart. Prioritizing user accessibility, I strive to create intuitive interfaces for optimal user experience. My focus is on delivering applications with the best possible UI design.</p>
              <a onClick={() => setProjectState(3)} href='#3'>View Projects</a>
            </div>
          </div>
          {
            projectState === 1 ?
              <div id='1' className='WebDevelopment'>
                <h2>Web Development Project</h2>
                <div className='project-container'>
                  <div className='projects'>
                    <div>
                      <img src={qpixel} />
                    </div>
                    <div>
                      <h4>QPixel</h4>
                      <p>QPixel is a photography platform for users to manage and share high-quality images that allowing viewing and downloading in full resolution.</p>
                      <div className='buttons'>
                        <a href='https://github.com/vicky-20-07/QPixel'><button>Repository</button></a>
                        <a href='https://qpixel-3e00e.firebaseapp.com/'><button>View Project</button></a>
                      </div>
                    </div>
                  </div>
                  <div className='projects'>
                    <div>
                      <img src={netflix} />
                    </div>
                    <div>
                      <h4>Netflix Clone</h4>
                      <p>The Netflix clone project is an opportunity for me to enhance my front-end skills. It serves as a refinement for my frontend development abilities.</p>
                      <div className='buttons'>
                        <a href='https://github.com/vicky-20-07/Contest'><button>Repository</button></a>
                        <a href='https://vicky-20-07.github.io/Contest/'><button>View Project</button></a>
                      </div>
                    </div>
                  </div>
                  <div className='projects'>
                    <div>
                      <img src={sports} />
                    </div>
                    <div>
                      <h4>Sports Management System (Console)</h4>
                      <p>This is a console based java project, which is built using Java and MySql. [This is a exceptional project and my first project]</p>
                      <div className='buttons'>
                        <a href='https://github.com/vicky-20-07/SportsManagement'><button>Repository</button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : <></>
          }
          {
            projectState == 2 ?
              <div id='2' className='UiDevelopment'>
                <h2>UI/UX Design Project</h2>
                <div className='project-container'>
                  <div className='projects'>
                    <div>
                      <img src={madrid} />
                    </div>
                    <div>
                      <h4>Madrid Assistant</h4>
                      <p>The Madrid Assistant is a User Interface meticulously crafted using Figma. Inspired by the renowned Real Madrid as an assistance application tailored to the needs of users.</p>
                      <div className='buttons'>
                        <a href='https://www.figma.com/community/file/1346524026313250384'><button>View Project</button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : <></>
          }
          {
            projectState == 3 ?
              <div id='3' className='AppDevelopment'>
                <h2>App Development Project</h2>
                <div className='project-container'>
                  <div className='projects'>
                    <div>
                      <img src={snapixel} id='snapixel' />
                    </div>
                    <div>
                      <h4>Snapixel</h4>
                      <p>Snapixel is a mobile application built with Flutter. It serves as a platform for photographers to participate in contests organized within the platform and compete with other users.</p>
                      <div className='buttons'>
                        <a href='https://github.com/Nagarasu0408/snapixel'><button>Repository</button></a>
                      </div>
                    </div>
                  </div>
                  <div className='projects'>
                    <div>
                      <img src={madrid} />
                    </div>
                    <div>
                      <h4>Z1-Pass</h4>
                      <p>Z1-Pass is a mobile application developed using Flutter. The project focuses on automating the generation of outpasses which reduces the rush happens usually in the hostel.</p>
                      <div className='buttons'>
                        <a href='https://github.com/Nagarasu0408/z1pass'><button>Repository</button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : <></>
          }
        </div>
      </div>
      <div className='Portfolio_Div' id='portfolio'>
        <h1>Resume</h1>
        <div className='portfolio_Div'>
          <img src={resume}></img>
          <div className='portfolio_right'>
            <p>For a better understanding, Download my resume with the link given below</p>
            <a href='717821F260-VIGNESH M (2).pdf' download='Resume.pdf'><button>DOWNLOAD CV</button></a>
          </div>
        </div>
      </div>
      <Contact id='contact'>
        <Footer />
      </Contact>
      <GoToTop />
    </div>
  )
}

const Contact = styled.div`
`