import { Panels } from "./base/card";
import { items } from "./data";
import { ProductPage } from '../components//base/item';

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
    const product = items[plan][item];
    return (<ProductPage product={product} />);
};



