"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/swiper-bundle.css";

import TeamOne from "@/data/teamOne.json";
import TeamTwo from "@/data/teamTwo.json";
import TeamThree from "@/data/teamThree.json";
import TeamFour from "@/data/teamFour.json";
import TeamFive from "@/data/teamFive.json";
import TeamSix from "@/data/teamSix.json";
import TeamSeven from "@/data/teamSeven.json";
import { useEffect, useState } from "react";

import {
  FaYoutube,
  FaSpotify,
  FaSoundcloud,
  FaInstagram,
} from "react-icons/fa";

interface ITeam {
  name: string;
  description: string;
  team: string[];
  links: string[];
  images: string[];
  autor: {
    name: string;
    image: string;
  };
}

const Index = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [information, setInformation] = useState<ITeam | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const team = params.get("team") || "1";

    switch (team) {
      case "1":
        setInformation(TeamOne);
        setIsLoading(false);
        break;
      case "2":
        setInformation(TeamTwo);
        setIsLoading(false);
        break;
      case "3":
        setInformation(TeamThree);
        setIsLoading(false);
        break;
      case "4":
        setInformation(TeamFour);
        setIsLoading(false);
        break;
      case "5":
        setInformation(TeamFive);
        setIsLoading(false);
        break;
      case "6":
        setInformation(TeamSix);
        setIsLoading(false);
        break;
      case "7":
        setInformation(TeamSeven);
        setIsLoading(false);
        break;
      default:
        router.replace("/inicio");
        break;
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#18529D] w-screen flex flex-col items-center p-5">
      <div className="flex flex-row justify-start items-center w-full">
        <IoMdArrowRoundBack
          size={32}
          color="white"
          onClick={() => {
            router.replace("/inicio");
          }}
        />
      </div>

      <div className="bg-white w-[90%] lg:w-[80%]  rounded-md ">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center w-full">
          <div className="lg:w-1/2">
            <p className="font-bold text-[20px] text-center py-2 text-[#18529D]">
              {information?.name || ""}
            </p>

            <div className="flex justify-center items-center">
              <Image
                className="rounded-md object-fill w-[200px] h-[250px]"
                src={
                  information?.autor.image ||
                  "https://res.cloudinary.com/di3ldc36w/image/upload/v1749586548/letras_rror9q.png"
                }
                alt=""
                width={200}
                height={200}
              />
            </div>

            <p className="text-center text-[16px] py-3 text-[#18529D]">
              {information?.autor.name || ""}
            </p>
          </div>

          <div className="lg:w-1/2">
            <p className="font-bold text-[28px]  text-center text-[#18529D]">
              Descripción
            </p>
            <p className="text-justify text-sm/6 px-5 text-[15px] text-[#18529D]">
              {information?.description}
              <br />
            </p>
            <div className="pl-10">
              <p className="font-bold underline text-[#18529D]">Integrantes</p>
              {information?.team.map((name) => {
                return (
                  <div className="text-[#18529D]" key={name}>
                    {name.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-evenly lg:items-center w-full">
          {information?.images && information?.images.length > 0 && (
            <div>
              <br />
              <p className="font-bold text-[28px]  text-center text-[#18529D]">
                Imagenes
              </p>
              <div className="p-2 rounded-md">
                <Swiper
                  slidesPerView={1}
                  /* navigation={true} */
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                  }}
                  className="lg:w-[320px] lg:h-[500px]"
                  modules={[Navigation, Autoplay]}
                >
                  {information?.images?.map((img, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={img}
                        alt={`Imagen ${index + 1}`}
                        width={320}
                        height={500}
                        className="rounded-md object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <br />
            </div>
          )}

          {information?.links && information.links.length > 0 && (
            <div>
              <div>
                <p className="font-bold text-[28px] text-center text-[#18529D]">
                  Materíal Extra
                </p>
              </div>

              <div>
                {information?.links.map((link: string, index: number) => {
                  if (link.includes("youtube")) {
                    return (
                      <div key={index}>
                        <div className="flex flex-row justify-center items-center gap-4">
                          <FaYoutube color="red" size={32} />
                          <a
                            className="text-[15px] underline py-3 text-[#18529D]"
                            href={link}
                          >
                            Video de Youtube
                          </a>
                        </div>
                        <iframe
                          className="hidden w-[500px] h-[300px] rounded-md lg:block"
                          src={link}
                        />
                      </div>
                    );
                  } else if (link.includes("spotify")) {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-center items-center gap-4"
                      >
                        <FaSpotify color="green" size={32} />
                        <a
                          className=" text-[15px] underline py-3 text-[#18529D]"
                          href={link}
                        >
                          Escuchar en Spotify
                        </a>
                      </div>
                    );
                  } else if (link.includes("soundcloud")) {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-center items-center gap-4 "
                      >
                        <FaSoundcloud color="green" size={32} />
                        <a
                          className=" text-[15px] underline py-3 text-[#18529D]"
                          href={link}
                        >
                          Escuchar en Soundcloud
                        </a>
                      </div>
                    );
                  } else if (link.includes("instagram")) {
                    return (
                      <div
                        key={index}
                        className="flex flex-row justify-center items-center gap-4 "
                      >
                        <FaInstagram color="pink" size={32} />
                        <a
                          className=" text-[15px] underline py-3 text-[#18529D]"
                          href={link}
                        >
                          Ver pefil en Instagram
                        </a>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
