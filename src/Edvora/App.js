import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./ed.css";
import RArrow from "./rarrow.png";
import Cards from "./Cards";

const App = () => {
  const [product, setProduct] = useState([]);
  let [I, setI] = useState(0);

  const getProduct = async () => {
    const res = await fetch("https://assessment-edvora.herokuapp.com");
    const data = await res.json();
    setProduct(data);
  }
  const mySet = new Set();
  for (let i = 0; i < product.length; i++)
    mySet.add(product[i].brand_name);

  const categories = Array.from(mySet);
  // let datalength = product.length;

  useEffect(() => {
    getProduct()
  }, []);

  const movefunction = () => {
    const text = document.getElementsByClassName("inner-div").length;
    I < product.length - 4 ?
      setI(I = I + 4) : setI(0);
    console.log(text);
  }

  return (
    <>
      <div className='container  main-div'>
        <div className='row w-100 d-lg-flex d-sm-grid'>
          <div className='col-sm-12 col-lg-2  d-grid filter-div '>
            <div>
              <h4>Filters</h4>
              <hr />
              <div className=' mb-2'>
                <select className='opt-div'>
                  <option >-Products-</option>
                  {
                    categories.map((element, index, data) => {
                      return (
                        <option key={element} >{element}</option>

                      )
                    })}

                </select>

              </div>
              <div className=' mb-2'>
                <select className='dropdown opt-div '>
                  <option >-State-</option>

                  {
                    product.map((element, index, data) => {
                      return (
                        <option key={element.date} >{element.address.state}</option>

                      )
                    })}

                </select>


              </div>
              <div className=' mb-2'>
                <select className='opt-div'>
                  <option >-City-</option>

                  {
                    product.map((element, index, data) => {
                      return (
                        <option key={element.date} >{element.address.city}</option>

                      )
                    })}

                </select>

              </div>
            </div>
          </div>
          <div className='col-lg-8 content-div'>
            <h2>Edvora</h2>
            <h4>Products</h4>


            {categories.map((elm) => {
              return (
                <>
                  <h5 key={elm}>{elm}</h5>
                  <hr />
                  <div className='d-flex align-items-center w-100'>
                    <div className='item-div d-flex  col-lg-12'>

                      {product.filter((el) => { return el.brand_name === elm })
                        .slice(I, I + 4)
                        .map((el) => {
                          return (
                            <>
                              <div className='inner-div' > <Cards props={el} key={el.date} /></div>
                            </>
                          )
                        })}

                    </div>
                    <img src={RArrow} className='arrow' alt="slider"
                      onClick={movefunction}
                    />

                  </div>

                </>
              )
            })}






          </div>
        </div>
      </div>

    </>
  )
}
export default App;
