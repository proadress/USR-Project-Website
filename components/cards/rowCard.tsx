// components/rowCard.tsx

import Card from "./card";

const RowCard = () => {
    const cardData = [
        { title: "plan1-1" },
        { title: "plan1-2" },
        { title: "plan1-3" },
        { title: "plan1-4" },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.title}
                    imageUrl={"守護岩3D.jpg"}
                    href={"/plan1/"+card.title}
                />
            ))}
        </div>
    );
};

export default RowCard;
