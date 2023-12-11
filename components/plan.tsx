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


export const ProductDetails = ({ item }, { item: number }) => {
    // 示例商品数据，实际应从数据库或 API 中获取
    const product = items["plan1"]["item" + item];
    return (<ProductPage product={product} />);
};



