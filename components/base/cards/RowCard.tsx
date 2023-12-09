// components/rowCard.tsx

import Card from "./card";

export const RowCard = ({ cardData }: { cardData: object[] }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card['title']}
                    description={card['cardDiscription']}
                    imageUrl={card['image']}
                    href={card['url']}
                />
            ))}
        </div>
    );
};