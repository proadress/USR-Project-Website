import { Panels } from "./base/card";
import { items } from "./data";
import { ProductPage } from '../components//base/item';
import { useRouter } from "next/router";



export const Plan1 = () => {
    const cardDatas = [
        items[0][0],
        items[0][1],
        items[0][2],
        items[0][3],
    ]
    return (
        < Panels cardDatas={cardDatas} />
    );
}
export const Plan3 = () => {
    const cardDatas = [
        items[2][0],
        items[2][1],
        items[2][2],
        items[2][3],
    ]
    return (
        < Panels cardDatas={cardDatas} />
    );
}

interface ProductDetailsProps {
    plan: number;
    item: number;
}


export const ProductDetails: React.FC<ProductDetailsProps> = ({ plan = 1, item }) => {
    // 示例商品数据，实际应从数据库或 API 中获取
    const product = items[plan - 1][item - 1];
    return (<ProductPage product={product} />);
};



