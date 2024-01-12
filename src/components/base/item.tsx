"use client"
// components/ProductPage.tsx
import React, { useState } from 'react';
import { Item } from '../data';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export const ProductPage: React.FC<{ product: Item }> = ({ product }) => {
    const [count, setCount] = useState(1);
    return (<div>
        <div className="card card-side dark:bg-base-100 bg-purple-50 shadow-xl h-1/2 lg:w-3/4 mt-8 text-black">
            <figure>
                <img src={`../../../${product.image}`} alt={product.title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
                <h1 className="card-title">{product.title}</h1>
                <p className="flex items-end">商品數量</p>
                <p className="">${product.price * count}</p>
                <div className='flex items-center space-x-4'>
                    <button className="btn btn-xs btn-outline" onClick={() => {
                        if (count - 1 > 0) {
                            setCount(count - 1);
                        }
                    }}
                    >-</button>
                    <div className="mx-2">{count}</div>
                    <button className="btn btn-xs btn-outline " onClick={() => setCount(count + 1)}>+</button>
                    <button className="btn btn-xs btn-warning">購買</button>
                </div>
            </div>
        </div>
        <div className="w-96 h-auto dark:bg-base-100 shadow-xl lg:w-3/4 mt-8 bg-yellow-50 rounded-lg text-black">
            <Table hideHeader isStriped layout='fixed' aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>標題</TableColumn>
                    <TableColumn>內容</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="0">
                        <TableCell>商品數量：</TableCell>
                        <TableCell>{product.count}</TableCell>
                    </TableRow>
                    <TableRow key="1">
                        <TableCell>商品類型：</TableCell>
                        <TableCell>{product.type}</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>商品成分：</TableCell>
                        <TableCell>{product.Material}</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>商品內容：</TableCell>
                        <TableCell>{product.Description}</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>有效期限：</TableCell>
                        <TableCell>{product.ValidityDate}</TableCell>
                    </TableRow>
                    <TableRow key="5">
                        <TableCell>運費：</TableCell>
                        <TableCell>{product.Fee}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        <div className="w-96 h-auto dark:bg-base-100 shadow-xl lg:w-3/4 mt-8 bg-sky-100 text-black">
            <div className="card-body space-y-1">
                {product.Features.map((feature, index) => { return <p key={index}>{feature}</p> })}
            </div>
        </div>
    </div>
    );
};






