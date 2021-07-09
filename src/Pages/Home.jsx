import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Image from '../components/image'
import { LoadImages } from '../components/api';


const Home = () => {


    // const [ images , setImages] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=beach&per_page=24&format=json&nojsoncallback=1')
    //     .then(response => {
    //         console.log(response)
    //         return response.json()
    //     })

    //     .then (images =>{
    //         console.log(images)
    //         setImages(images)
    //     })

    // },[]);

    const data = LoadImages()

    console.log(data)
    return (
        <>
            {/* {
                data.map((fdata)=>{
                    <Image src={fdata.photo}/>
                })
            } */}


            <section className="Home">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Search Image" />
                        <br />
                        <div className="search-buttons">

                            <button> Beaches </button>
                            <button> Mountains </button>
                            <button> Birds </button>
                            <button> Food </button>
                        </div>
                    </div>







                    <div className="gallery">

                        <div class="grand_parent">
                            
                            <div class="parent">
                                <div class="child">
                                    {/* <p>first child</p> */}
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>
                                <div class="child">
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>
                                <div class="child">
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>
                                <div class="child">
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>
                                <div class="child">
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>
                                <div class="child">
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>
                                <div class="child">
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>
                                <div class="child">
                                    <img src="../images/popup2.jpg" alt="" />
                                </div>



                            </div>

                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
