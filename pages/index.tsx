import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full mt-16">
      <Image
        className="rounded-full"
        src={data.avatar}
        width={96}
        height={96}
        alt="data.name"
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
    </div>
  );
}

// function LinkCard that accepts href, title and description and returns a link card
function LinkCard({ href, title, image }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center w-1/2 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
    </a>
  );
}
