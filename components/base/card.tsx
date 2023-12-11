// components/Card.js
import Link from "next/link";
import { items } from "../data";

export const Card = ({ cardData }: { cardData: object }) => {
  const linkHref = cardData['url'] || '#';

  return (
    <div className="w-48 h-80 p-4 transform hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out mb-8">
      <Link href={linkHref}>
        <div className="max-w-full rounded-lg overflow-hidden shadow-lg border-2 dark:border-gray-500 dark:hover:border-gray-100">
          <img className="h-40 w-full object-cover" src={cardData['image']} alt={cardData['title']} />
          <div className="px-6 py-4 h-40">
            <div className="font-bold text-xl mb-2">{cardData['title']}</div>
            <p className="text-gray-700 text-base dark:text-yellow-100">{cardData['cardDiscription']}</p>
          </div>
        </div>
      </Link >
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