// components/ProductPage.tsx
import React from 'react';

export const ProductPage = ({ product }: { product: any }) => {
    return (
        <div className="container mx-auto mt-8">
            <div className="mx-auto p-4 bg-gray-300 dark:bg-gray-600 rounded-md shadow-lg">
                <img className="w-full h-64 object-cover object-center mb-4" src={'../' + product.image} alt={product.title} />
                <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{product.content}</p>
                <p className="text-xl font-bold text-gray-800 dark:text-yellow-300 mb-4">${product.price}</p>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};


