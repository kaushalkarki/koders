import React from 'react';

const Cards = ({ props }) => {
    const { product_name,image, brand_name, price, address, date, discription } = props;
    date.slice(7);
    return (<>
        <div className='container card-div'>
            <div className='row align-items-center' >
                <div className='col-5'>
                    <img className='image-fluid imz' src={image} alt='foto' />
                </div>
                <div className='col-7'>
                    <p>{product_name}</p>
                    <p>{brand_name}</p>
                    <p>{price}</p>
                </div>
                <div className='d-flex justify-content-around'>
                    <div>
                        <p>{address.city}</p>
                    </div>
                    <div>
                        <p>{date.slice(0, 10)}</p>
                    </div>
                </div>
                <p>{discription}</p>

            </div>
        </div>

    </>)
};

export default Cards;
