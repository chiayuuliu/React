// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import React, { useState } from 'react'

// 組合用元件
import Product from './../components/Product'
import Detail from './../components/Detail'
import Comments from './../components/Comments';


function App() {

  return (
    <>
    <div className="dt-bg"></div>
    {/* 商品大圖 */}
    <div className="container mb80">
        <div className="row d-flex dt-product">
            <Product/>
        </div>
    </div>
    {/* detail */}
    <div className="container">
        <div className="row">
            <div className="dt-sub-title"><h4>Detail</h4></div>
            <div className="dt-product-wrap d-flex">
                <Detail/>
            </div>
        </div>
    </div>
    {/* 評論區 */}
    <div className="container mb80">
        <div className="row">
            <div className="dt-sub-title"><h4>Reviews</h4></div>
            <div className="dt-review d-flex mb80">
                <div className="dt-reviews-wrap d-flex col-sm-12 col-lg-3 ">
                {/* 評論框 */}
                    <Comments/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
