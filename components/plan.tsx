import { items } from "./data";
import { ProductPage } from '../components//base/item';


export const ProductDetails: React.FC<{ plan: number, item: number }> = ({ plan = 1, item }) => {
    // 示例商品数据，实际应从数据库或 API 中获取
    const product = items[plan][item];
    return (<ProductPage product={product} />);
};



