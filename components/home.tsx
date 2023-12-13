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
        <>
            < MySlider slides={slides} />
            <div className="card m-4 w-80 shadow">
                <figure>
                    <img src="https://picsum.photos/id/103/500/250" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">DaisyUI Card</h2>
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
                </div>
            </div>

        </>
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
        < RowCard cardDatas={cardData} />
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
        < RowCard cardDatas={cardData} />
    );
}

