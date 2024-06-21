/*
  @author 廖倚詮 <B11053020@gemail.yuntech.edu.tw>
*/
import Image from "next/image";
import { useState, useEffect } from "react";

const AutoSizeImage = ({ src, alt, layout }) => {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
            setSize({ width: img.width, height: img.height });
        };
    }, [src]);

    if (layout === "fill") {
        return (
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
            />
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={size.width}
            height={size.height}
            layout="intrinsic"
            objectFit="cover"
        />
    );
};

export default AutoSizeImage;
