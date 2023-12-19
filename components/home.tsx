import { MySlider } from "./base/slider";
import { RowCard } from "./base/card";
import { items } from "./data";


export const HomeSlider = () => {
    const slides = [
        "shoe.jpg",
        "shoe.jpg",
    ];
    return (
        < MySlider slides={slides} />
    );
}

export const HotRowCard = () => {
    const cardData = [
        items[2][0],
        items[2][3],
        items[2][1],
        items[2][2],
    ]
    return (
        < RowCard cardDatas={cardData} title={'熱門商品'} />
    );
}
export const NewRowCard = () => {
    const cardData = [
        items[2][3],
        items[2][1],
        items[2][0],
        items[2][2],
    ]
    return (
        < RowCard cardDatas={cardData} title={'最新上架'} />
    );
}

