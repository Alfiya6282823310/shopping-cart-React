import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewallLive = () => {
    const [data, changeData] = useState(
        { "products": [] }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/products").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row-g-3">
                            {
                                data.products.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={value.images} class="card-img-top" alt="..." />
                                                    <h5 class="card-title">{value.price}</h5>
                                                    <p class="card-text">{value.id}</p>
                                                    <p class="card-text">{value.category}</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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

export default ViewallLive