"use client"
import Link from "next/link"
import { useState } from "react";
import { items, Item } from "./data";

const Sidber: React.FC<{ planNum: number, itemNum: number }> = ({ planNum, itemNum }) => {

    const plans = ["海洋運動遊程創新與元宇宙", "USR商品", "和平島XR元宇宙", "王爺海上游江文創系列商品", "和平島海藻生態智慧監控"]

    const Collapse: React.FC<{ item: Item[], ind: number }> = ({ item, ind }) => {
        const [open, setOpen] = useState(ind == planNum);

        return (
            <>
                <div className="relative inline-block">
                    <div
                        onClick={() => setOpen(!open)}
                        className="cursor-pointer "
                    >{plans[ind]}
                    </div>
                    <div
                        className={`${open
                            ? 'max-h-screen opacity-100 p-2'
                            : 'max-h-0 opacity-0'
                            }  origin-top mt-1 border-gray-300 w-auto overflow-hidden transition-all duration-700 ease-in-out space-y-4`}
                    >
                        {item.map((ite, index) => {
                            return (<div key={index}>
                                <Link href={"/" + ite.url} className={`${ind == planNum && index == itemNum ? " border-blue-400" : "border-gray-400"} border-b-2 
                                    `}>{ite.card}</Link>
                            </div>)
                        })}
                    </div>
                </div>
            </>
        );
    };



    return (
        <div className="drawer lg:drawer-open w-auto" >
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className=" mt-10 drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className=" drawer-overlay"></label>
                <ul className=" menu p-2 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {items.map((item, index) => {
                        return (<li key={index}>
                            <Collapse item={items[index]} ind={index} />
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    );
};


export default Sidber;