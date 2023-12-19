// components/ProductPage.tsx
import React, { useState } from 'react';
import { Item } from '../data';

export const ProductPage: React.FC<{ product: Item }> = ({ product }) => {
    const [count, setCount] = useState(1);
    return (<div>
        <div className="card card-side dark:bg-base-100 shadow-xl h-1/2 lg:w-3/4 mt-8 ">
            <figure>
                <img src={'../shoe.jpg'} alt={product.title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
                <h1 className="card-title">{product.title}</h1>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="">商品數量</div>
                <div className='flex items-center space-x-4'>
                    <button className="btn btn-xs btn-neutral" onClick={() => {
                        if (count - 1 > 0) {
                            setCount(count - 1);
                        }
                    }}
                    >-</button>
                    <div className="mx-2">{count}</div>
                    <button className="btn btn-xs btn-neutral" onClick={() => setCount(count + 1)}>+</button>
                    <button className="btn btn-xs btn-success">購買</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export const Discription: React.FC = () => {
    return (<></>)
}


