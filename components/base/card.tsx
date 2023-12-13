// components/Card.js
import Link from "next/link";
import { items } from "../data";

export const Card = ({ cardData }: { cardData: object }) => {
  const linkHref = cardData['url'] || '#';
  const title: string = cardData['title'];
  const maxLength: number = 10;
  const truncatedTitle = title.length > maxLength ? title.substring(0, maxLength) + "..." : title;

  return (
    <div className="card m-2 w-48 shadow hover:scale-110 transition-transform duration-300 ease-in-out border-2 dark:border-gray-500 dark:hover:border-gray-100">
      <Link href={linkHref}>
        <figure>
          <img src={cardData['image']} className="h-32" />
        </figure>
        <div className="card-body">
          <h5 className="card-title">{truncatedTitle}</h5>
          <p className="text-gray-700 text-base dark:text-yellow-100">價錢：{cardData['price']}</p>
        </div>
      </Link>
    </div>
  );
};



export const RowCard = ({ cardDatas }: { cardDatas: object[] }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardDatas.map((card, index) => (
        <Card
          key={index}
          cardData={card}
        />
      ))}
    </div>
  );
};

const RowPanel = ({ cardData, isRight }: { cardData: object, isRight: boolean }) => {
  return (
    <div className="p-4 w-full">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md flex items-center justify-between">
        {/* 主題1 的內容 */}
        {isRight ? <Card cardData={cardData} /> : null}
        <div className="flex-grow h-full  p-4 w-1">
          <div>
            <h2 className="text-lg font-semibold mb-2">{cardData['title']}</h2>
            <p>{cardData['content']}</p>
          </div>
        </div>
        {isRight ? null : <Card cardData={cardData} />}
      </div>
    </div>
  )
};

export const Panels = ({ cardDatas }: { cardDatas: object[] }) => {
  return (
    <>
      {cardDatas.map((card, index) => (
        <RowPanel
          key={index}
          cardData={card}
          isRight={index % 2 === 0}
        />
      ))}</>
  );
};