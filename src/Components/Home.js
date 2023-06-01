import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './UI/Header'
import Taem from './UI/Team'
import Contact from './UI/Contact'
import Footer from './UI/Footer'
import banar from '../images/banar.png';

function Home() {

    //for

    const navigate=useNavigate()
  return (
    <div>
      <Header/>
        
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">XSell Affiliate Marketing
                    Website
                </h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Pakistan's First Dedicated Affiliate Marketing Website.</p>
            </div>

            <button className="flex mx-auto mt-5 mb-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>navigate('login')}>Login</button>

            <div className="flex flex-col">
                <div className="h-1 bg-gray-200 rounded overflow-hidden">
                    <div className="w-24 h-full bg-indigo-500"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                </div>
            </div>

            <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway
                            tile
                            poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway
                            tile
                            poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway
                            tile
                            poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway
                            tile
                            poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway
                            tile
                            poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway
                            tile
                            poke farm.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    

    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
                <div className="rounded-lg h-64 overflow-hidden">


                    <img alt="content" className="object-cover object-center h-full w-full" src={banar}/>


                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin
                                sartorial
                                venmo tbh hot chicken gentrify portland.</p>
                        </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie
                            man
                            bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small
                            batch
                            listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel
                            truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher.
                            Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt
                            butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                        <a className="text-indigo-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <Taem/>

    <Contact/>

    <Footer/>
    
    </div>
  );
}

export default Home;
