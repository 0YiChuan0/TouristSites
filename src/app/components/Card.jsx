/*
  @author 廖倚詮 <B11053020@gemail.yuntech.edu.tw>
*/
import { Button } from "flowbite-react";
import AutoSizeImage from "./AutoSizelmage";

export default function CustomCard({ item }) {
    return (
        <div className="border mt-4 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full bg-gray-200 mb-5">
                <AutoSizeImage
                    src={item.Picture.PictureUrl1}
                    alt={item.Picture.PicturDescription1}
                    layout="fill"
                />
            </div>

            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-700 mb-4">
                {item.ScenicSpotName}
            </h5>

            <p className="font-normal text-gray-700 mb-4 px-4">
                {item.DescriptionDetail.length > 70 ? item.DescriptionDetail.substring(0, 70) + '...' : item.DescriptionDetail}
            </p>

            <Button className="mx-auto mb-4 mt-auto">
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Button>
        </div>
    )
}
