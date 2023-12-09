import { MySlider } from "./base/slider";
import { RowCard } from "./base/cards/RowCard";
import { items } from "./items";


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
        items["plan1"]["item1"],
        items["plan1"]["item4"],
        items["plan1"]["item2"],
        items["plan1"]["item3"],
    ]
    return (
        < RowCard cardData={cardData} />
    );
}
export const NewRowCard = () => {
    const cardData = [
        items["plan1"]["item4"],
        items["plan1"]["item1"],
        items["plan1"]["item5"],
        items["plan1"]["item3"],
    ]
    return (
        < RowCard cardData={cardData} />
    );
}

