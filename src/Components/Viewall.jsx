import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
   const [data,changeData]=useState([])
   const fetchData = () =>{
    axios.get("https://fakestoreapi.com/products").then(
        (response)=>{
            console.log(response.data)
            changeData(response.data)
        }
    ).catch().finally()
}
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                    (value, index) => {

                               return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img height="250 px"src={value.image}class="card-img-top" alt="..."/>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.id}</h5>
                                                        <p class="card-text">{value.title}</p>
                                                        <p class="card-text">{value.price}</p>
                                                        <p class="card-text">{value.description}</p>
                                                        <p class="card-text">{value.category}</p>
                                                        <p class="card-text">{value.rating.rate}</p>
                                                        <p class="card-text">{value.rating.count}</p>
                                                        <a href="#" class="btn btn-primary">Add to buy</a>
                                                    </div>
                                            </div>
                                        </div>


                                    }
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall