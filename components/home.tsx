import { MySlider } from "./base/slider";
import { RowCard } from "./base/card";
import { items } from "./data";

export const HomeSlider = () => {
    const slides = [
        "slider/88.jpg",
        "slider/1.jpg",
        "slider/2.jpg",

    ];
    return (
        <div className="slide-background">
        < MySlider slides={slides} />
        </div>
    );
}

export const HotRowCard = () => {
    return (
        < RowCard cardDatas={items[2]} title={'熱門商品'} num={0}/>
    );
}
export const NewRowCard = () => {
    return (
        < RowCard cardDatas={items[2]} title={'最新上架'} num={1}/>
    );
}

