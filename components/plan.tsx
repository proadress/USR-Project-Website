import { Panels } from "./base/card";
import { items } from "./data";
import { ProductPage } from '../components//base/item';
import { useRouter } from "next/router";



export const Plan1 = () => {
    const cardDatas = [
        items["plan1"]["item1"],
        items["plan1"]["item2"],
        items["plan1"]["item3"],
        items["plan1"]["item4"],
    ]
    return (
        < Panels cardDatas={cardDatas} />
    );
}
export const Plan3 = () => {
    const cardDatas = [
        items["plan3"]["item1"],
        items["plan3"]["item2"],
        items["plan3"]["item3"],
        items["plan3"]["item4"],
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
    const product = items["plan" + plan]["item" + item];
    return (<ProductPage product={product} />);
};



