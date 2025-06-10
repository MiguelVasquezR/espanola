"use client";

import Image from "next/image";

import Manchado from "@/image/manchado.jpg";
import Matute from "@/image/matute.jpg";
import Generacion from "@/image/generacion27.jpg";
import Letras from "@/image/letras.png";
import { useRouter } from "next/navigation";
import SafeHydrate from "../save";

const Index = () => {
  const router = useRouter();

  return (
    <SafeHydrate>
      <div className="bg-[#18529D] text-white lg:text-black flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:w-[80%] lg:bg-white lg:my-10 lg:rounded-md lg:text-[#18529D]">
          <div className="w-full h-screen  flex justify-center items-center flex-col">
            <Image src={Letras.src} width={200} height={200} alt="" />
            <br />
            <p className="text-[28px] text-center px-2 font-bold">
              Litaratura Española Moderna y Contemporanea
            </p>
            <br />
            <p className="">Dra. Nidia Magdalena Vincent Ortega</p>
            <br />
            <p className="">Facultad de Letras Españolas</p>
            <br className="lg:hidden" />
          </div>

          <div className="flex flex-col justify-center items-center lg:w-[75%]">
            <p className="text-[28px] font-bold py-5">Objectivo</p>
            <p className="p-5 text-justify text-sm/8 text-[15px]">
              Este semestre, el grupo de Literatura Española realizó actividades
              de difusión cultural con el objetivo de dar a conocer, más allá
              del ámbito académico, la importancia de escritores notables de la
              literatura española. Dos de ellos fueron seleccionados por
              conmemorarse el centenario de su nacimiento, y en el caso de la
              Generación del 27, por su relevancia histórica y la cercanía del
              centenario de su origen.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center py-5 lg:w-[80%]">
            <p className="text-[28px] font-bold py-5">Autores</p>

            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:w-full">
              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  className="rounded-md object-fill w-[200px] h-[250px]"
                  src={Manchado.src}
                  alt=""
                  width={200}
                  height={200}
                />

                <p className="font-bold">Antonio Manchado</p>
                <p>1875 - 1939</p>
              </div>
              <br />

              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  className="rounded-md object-fill w-[200px] h-[250px]"
                  src={Matute.src}
                  alt=""
                  width={200}
                  height={200}
                />

                <p className="font-bold">Ana María Matute</p>
                <p>1926 - 2014</p>
              </div>
              <br />

              <div className="flex flex-col justify-center items-center gap-3">
                <Image
                  className="rounded-md object-fill w-[200px] h-[250px]"
                  src={Generacion.src}
                  alt=""
                  width={200}
                  height={200}
                />
                <p className="font-bold">Generación del 27</p>
                <p>1927</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 lg:w-[80%] ">
            <p className="text-[28px] text-center font-bold py-5">
              Actividades de Difusión Cultural
            </p>

            <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 lg:justify-items-center">
              <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md text-black">
                <p className="font-bold text-[15px]">Equipo 1</p>
                <br />
                <Image
                  src={
                    "https://res.cloudinary.com/di3ldc36w/image/upload/v1749587925/PHOTO-2025-05-06-12-28-11_y5ri1k.jpg"
                  }
                  width={200}
                  height={200}
                  alt=""
                  objectFit="fill"
                />
                <br />
                <div
                  className="border-[#18529D] text-[#18529D] rounded-md bg-transparent border-[1px] border-solid px-3 py-3"
                  onClick={() => {
                    router.push("/team?team=1");
                  }}
                >
                  Ver más
                </div>
              </div>

              <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md text-black">
                <p className="font-bold text-[15px]">Equipo 2</p>
                <br />
                <Image
                  src={
                    "https://res.cloudinary.com/di3ldc36w/image/upload/v1749586234/PHOTO-2025-06-08-17-51-31_vsxv3k.jpg"
                  }
                  width={200}
                  height={200}
                  alt=""
                  objectFit="fill"
                />
                <br />
                <div
                  className="border-[#18529D] text-[#18529D] rounded-md bg-transparent border-[1px] border-solid px-3 py-3"
                  onClick={() => {
                    router.push("/team?team=2");
                  }}
                >
                  Ver más
                </div>
              </div>

              <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md text-black">
                <p className="font-bold text-[15px]">Equipo 3</p>
                <br />
                <Image
                  src={
                    "https://res.cloudinary.com/di3ldc36w/image/upload/v1749586659/PHOTO-2025-06-10-13-53-11_s52rpv.jpg"
                  }
                  width={200}
                  height={200}
                  alt=""
                  objectFit="fill"
                />
                <br />
                <div
                  className="border-[#18529D] text-[#18529D] rounded-md bg-transparent border-[1px] border-solid px-3 py-3"
                  onClick={() => {
                    router.push("/team?team=3");
                  }}
                >
                  Ver más
                </div>
              </div>

              <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md text-black">
                <p className="font-bold text-[15px]">Equipo 4</p>
                <br />
                <Image
                  src={
                    "https://res.cloudinary.com/di3ldc36w/image/upload/v1749586548/matute_im257o.jpg"
                  }
                  width={200}
                  height={200}
                  alt=""
                  objectFit="fill"
                />
                <br />
                <div
                  className="border-[#18529D] text-[#18529D] rounded-md bg-transparent border-[1px] border-solid px-3 py-3"
                  onClick={() => {
                    router.push("/team?team=4");
                  }}
                >
                  Ver más
                </div>
              </div>

              <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md text-black">
                <p className="font-bold text-[15px]">Equipo 5</p>
                <br />
                <Image
                  src={
                    "https://res.cloudinary.com/di3ldc36w/image/upload/v1749593850/Captura_de_pantalla_2025-06-10_a_la_s_4.17.17_p.m._kwj4jr.png"
                  }
                  width={200}
                  height={200}
                  alt=""
                  objectFit="fill"
                />
                <br />
                <div
                  className="border-[#18529D] text-[#18529D] rounded-md bg-transparent border-[1px] border-solid px-3 py-3"
                  onClick={() => {
                    router.push("/team?team=5");
                  }}
                >
                  Ver más
                </div>
              </div>

              <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md text-black">
                <p className="font-bold text-[15px]">Equipo 6</p>
                <br />
                <Image
                  src={
                    "https://res.cloudinary.com/di3ldc36w/image/upload/v1749593516/PHOTO-2025-06-10-16-11-12_mhs3pn.jpg"
                  }
                  width={200}
                  height={200}
                  alt=""
                  objectFit="fill"
                />
                <br />
                <div
                  className="border-[#18529D] text-[#18529D] rounded-md bg-transparent border-[1px] border-solid px-3 py-3"
                  onClick={() => {
                    router.push("/team?team=6");
                  }}
                >
                  Ver más
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </SafeHydrate>
  );
};

export default Index;
