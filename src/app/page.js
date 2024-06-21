/*
  @author 廖倚詮 <B11053020@gemail.yuntech.edu.tw>
*/
'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Carousel,
  Button,
  Card,
  DarkThemeToggle
} from "flowbite-react";
import CustomCard from "./components/Card";
import AutoSizeImage from "./components/AutoSizelmage";

export default function Home() {

  const [items, setItems] = useState([]);
  const tokenUrl = '';
  const apiUrl = ''

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {/************* Navbar *************/}
      <div className="bg-white">
        <div className="bg-cyan-600">
          <div className="container mx-auto">
            <Navbar fluid className="bg-cyan-800">
              <NavbarBrand as={Link} href="/">
                <AutoSizeImage
                  src="https://www.yuntech.edu.tw/images/website_png/Group_640.png"
                  className="sm:h-9"
                  alt="Flowbite React Logo"
                />
                <span className="ml-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">雲林觀光網站</span>
              </NavbarBrand>
              <NavbarToggle />
              <NavbarCollapse >
                <NavbarLink as={Link} href="#" className="text-white">
                  <span className="px-3 py-1 hover:text-yellow-500 hover:border-b hover:border-yellow-500">景點</span>
                </NavbarLink>
                <NavbarLink href="#" className="text-white">
                  <span className="px-3 py-1 hover:text-yellow-500 hover:border-b hover:border-yellow-500">交通</span>
                </NavbarLink>
                <NavbarLink href="#" className="text-white">
                  <span className="px-3 py-1 hover:text-yellow-500 hover:border-b hover:border-yellow-500">關於我們</span>
                </NavbarLink>
              </NavbarCollapse>
              <DarkThemeToggle />
            </Navbar>
          </div>
        </div>

        {/************* Carousel *************/}
        <div className="bg-cyan-600 h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <AutoSizeImage
              src="/banner/banner-1.jpg"
              alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869"
              layout="fill"
            />
            <AutoSizeImage
              src="/banner/banner-2.jpg"
              alt="由 Outlookxp - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=117153671"
              layout="fill"
            />
            <AutoSizeImage
              src="/banner/banner-3.jpg"
              alt="由 Fcuk1203 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=17302330"
              layout="fill"
            />
            <AutoSizeImage
              src="/banner/banner-4.jpg"
              alt="由 張雅倫 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=94449542"
              layout="fill"
            />
            <AutoSizeImage
              src="/banner/banner-5.jpg"
              alt="由 Ifatson - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=112645436"
              layout="fill"
            />
          </Carousel>
        </div>

        {/************* Card *************/}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {items.map((item, index) =>
              <CustomCard item={item} key={index} />
            )}
          </div>
        </div>

        {/************* Footer *************/}
        <Footer container>
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </Footer>
      </div>
    </>
  );
}