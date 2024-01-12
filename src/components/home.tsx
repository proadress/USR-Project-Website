import { MySlider } from "./base/slider";
import { RowCard } from "./base/card";
import { items } from "./data";

export const HomeSlider = () => {
    const slides = [
        "slider/adv1.png",
        "slider/adv3.png",
        "slider/adv2.png",
    ];
    return (
        <div>
            < MySlider slides={slides} />
        </div>
    );
}

export const HotRowCard = () => {
    return (
        < RowCard cardDatas={[items[1][3], items[0][2], items[0][0], items[4][0], items[0][1]]} title={'熱門商品'} />
    );
}
export const NewRowCard = () => {
    return (
        < RowCard cardDatas={[items[1][2], items[4][1], items[3][0], items[3][1], items[3][2]]} title={'最新上架'} />
    );
}

