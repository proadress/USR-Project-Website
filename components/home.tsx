import { MySlider } from "./base/slider";
import { RowCard } from "./base/card";
import { items } from "./data";


export const HomeSlider = () => {
    const slides = [
        "slider/messageImage_1703145095514.jpg",
        "slider/S__73564162.jpg",
        "slider/S__73580546.jpg",

    ];
    return (
        < MySlider slides={slides} />
    );
}

export const HotRowCard = () => {
    return (
        < RowCard cardDatas={items[2]} title={'熱門商品'} />
    );
}
export const NewRowCard = () => {
    return (
        < RowCard cardDatas={items[2]} title={'最新上架'} />
    );
}

