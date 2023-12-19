import { MySlider } from "./base/slider";
import { RowCard } from "./base/card";
import { items } from "./data";


export const HomeSlider = () => {
    const slides = [
        "slider/ppt1.png",
        "slider/ppt2.png",
        "slider/ppt3.png",
        "slider/ppt4.png",
        "slider/ppt5.png",
    ];
    return (
        < MySlider slides={slides} />
    );
}

export const HotRowCard = () => {
    const cardData = [
        items[0][0],
        items[0][3],
        items[0][1],
        items[0][2],
    ]
    return (
        < RowCard cardDatas={cardData} title={'熱門商品'} />
    );
}
export const NewRowCard = () => {
    const cardData = [
        items[0][3],
        items[0][1],
        items[0][4],
        items[0][2],
    ]
    return (
        < RowCard cardDatas={cardData} title={'最新上架'} />
    );
}

