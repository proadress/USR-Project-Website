"use client"
import Sidebar from "@/components/Sidebar";
import { ProductDetails } from "@/components/plan";

export default function Page({ params }: { params: { slug: string } }) {
    console.log(params);
    const plan = parseInt(params.slug[0], 10) - 1;
    const item = parseInt(params.slug[1], 10) - 1;

    return (
        <>
            <div className="flex">
                <Sidebar planNum={plan} itemNum={item} />
                <div className="p-8 w-3/4">
                    <ProductDetails plan={plan} item={item} />
                </div>
            </div>
        </>
    );
};
