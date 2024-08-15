import { IoCarOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineBeachAccess } from "react-icons/md";

export const Buttons = () => {
  const data = [
    {
      id: 1,
      title: "car rentals",
      icon: <IoCarOutline className="size-9" />,
      imgSrc:
        "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-80750857/80750857.jpg",
    },
    {
      id: 1,
      title: "hotels",
      icon: <FaRegBuilding className="size-9" />,
      imgSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=700&h=-1&s=1",
    },
    {
      id: 1,
      title: "travel packages",
      icon: <MdOutlineBeachAccess className="size-9" />,
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-personal-accessories-in-royalty-free-image-1004908258-1554756573.jpg",
    },
  ];
  return (
    <div className="w-full space-y-5">
      {data.map((item) => (
        <div
          style={{ backgroundImage: `url(${item.imgSrc})` }}
          className="w-full aspect-square bg-center overflow-hidden cursor-pointer group relative bg-cover bg-no-repeat rounded-lg"
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-150"></div>
          <h1 className="text-white absolute bottom-10 text-lg left-5 flex flex-col">
            {item.icon}
            <span className="uppercase font-bold mt-1">{item.title}</span>
          </h1>
        </div>
      ))}
    </div>
  );
};
