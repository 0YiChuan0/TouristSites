/*
  @author 廖倚詮 <B11053020@gemail.yuntech.edu.tw>
*/
import Image from "next/image"

export default function CustomCard({ item }) {
    return (
        <div className="border">
            <Image src={item.Picture.PictureUrl1} alt={item.Picture.PicturDescription1} />
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}