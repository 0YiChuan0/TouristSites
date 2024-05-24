/*
  @author Fuyuan Cheng <B11053020@gemail.yuntech.edu.tw>
*/
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

export default function Home() {

  const item = [
    {
      cover: "/banner/banner-1.jpg",
      name: "北港朝天宮",
      description: "北港朝天宮（台文：Pak Káng Tiâu Thian Keng），俗稱北港媽（台文：Pak Káng Má），當地人稱媽祖宮、媽祖廟（台文：Má Chó͘ keng），舊稱為天后宮。是一座位在臺灣雲林縣北港鎮光民里的媽祖廟，主祀天上聖母媽祖。",
    },
    {
      cover: "/banner/banner-2.jpg",
      name: "虎尾郡役所",
      description: "虎尾郡役所，是位於臺灣雲林縣虎尾鎮公安里、1931年落成的帝冠樣式日本官署建物，二戰後曾作為區署、雲林警分局使用，今列雲林縣歷史建築，以「雲林布袋戲館」之名展覽布袋戲文物與表演，也是雲林國際偶戲節的活動場地。",
    },
    {
      cover: "/banner/banner-3.jpg",
      name: "西螺大橋",
      description: "西螺大橋是台灣公路橋梁，前身在日治時期稱濁水溪大橋，位於彰化縣與雲林縣之間，橫跨濁水溪下游，以華倫式桁架橋設計，連接北端之溪州鄉、南端之西螺鎮二地的交通。1952年完工時，西螺大橋是僅次於美國舊金山金門大橋的世界第二大橋，也是當時全台灣最長的橋梁，被譽為「遠東第一大橋」。",
    },
  ];

  return (
    <>
      {/************* Navbar *************/}
      <div className="bg-cyan-400">
        <div className="container mx-auto">
          <Navbar fluid className="bg-cyan-800">
            <NavbarBrand as={Link} href="/">
              <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
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
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/banner/banner-1.jpg" alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869" />
          <img src="/banner/banner-2.jpg" alt="由 Outlookxp - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=117153671" />
          <img src="/banner/banner-3.jpg" alt="由 Fcuk1203 - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=17302330" />
          <img src="/banner/banner-4.jpg" alt="由 張雅倫 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=94449542" />
          <img src="/banner/banner-5.jpg" alt="由 Ifatson - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=112645436" />
        </Carousel>
      </div>

      {/************* Card *************/}
      <div className="bg-white">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          {item.map(item =>
            <Card
              className="max-w-sm"
              imgAlt={item.name}
              imgSrc={item.cover}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <Button>
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
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
    </>
  );
}