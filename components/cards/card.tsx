// components/Card.js
import Link from "next/link";

const Card = ({ title, description, imageUrl, href }) => {
  const linkHref = href || '#';

  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4 transform hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
      <Link href={linkHref}>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 dark:border-gray-500 dark:hover:border-gray-100">
          <img className="w-full" src={imageUrl} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base dark:text-yellow-100">{description}</p>
          </div>
        </div>
      </Link >
    </div>

  );
};

export default Card;
