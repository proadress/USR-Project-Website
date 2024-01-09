// components/Card.js
import Link from "next/link";
import { Item, items } from "../data";
import React from "react";
import classNames from "classnames";

export const Card: React.FC<{ cardData: Item }> = ({ cardData }) => {
  const linkHref = cardData.url || "#";
  const title: string = cardData.card;
  const maxLength: number = 8;
  const truncatedTitle =
    title.length > maxLength ? title.substring(0, maxLength) : title;

  return (
    <div className="card m-2 w-44 overflow-hidden h-64 shadow hover:scale-110 transition-transform duration-300 ease-in-out border-2 dark:border-gray-500 dark:hover:border-gray-100">
      <Link href={linkHref}>
        <figure>
          <img src={cardData.image} className="h-32" />
        </figure>
        <div className="flex card-body justify-around">
          <div style={{ flex: 2 }}>
            <p className="card-title line-clamp-2">{cardData.card}</p>
          </div>
          <div className="card-actions justify-start items-end" style={{ flex: 1 }}>
            <div className="price">${cardData.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const RowCard: React.FC<{
  cardDatas: Item[];
  title: string;
  num: int;
}> = ({ cardDatas, title, num }) => {
  return (
    <div
      className={`rounded-3xl ${classNames({
        "odd-background": num % 2 !== 0,
        "even-background": num % 2 === 0,
      })}`}
    >
      <div className="space-y-8">
        <div className="h-1"></div>
        <div
          className="text-5xl text-center"
          style={{ fontWeight: "bold", color: "#545051" }}
        >
          {title}
        </div>
        <div className="flex items-center justify-evenly">
          <div className="w-32 border-b-4 border-slate-500"></div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {cardDatas.map((card, index) => (
            <Card key={index} cardData={card} />
          ))}
        </div>
        <div className="h-1"></div>
      </div>
    </div>
  );
};

export const RowPanel: React.FC<{ cardData: Item; isRight: boolean }> = ({
  cardData,
  isRight,
}) => {
  return (
    <div className="p-4 w-full">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md flex items-center justify-between">
        {/* 主題1 的內容 */}
        {isRight ? <Card cardData={cardData} /> : null}
        <div className="flex-grow h-full  p-4 w-1">
          <div>
            <h2 className="text-lg font-semibold mb-2">{cardData.title}</h2>
            <p>{cardData.introduction}</p>
          </div>
        </div>
        {isRight ? null : <Card cardData={cardData} />}
      </div>
    </div>
  );
};
