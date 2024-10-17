import * as React from "react";
import Image from "next/image";
import Itau from "@/assets/itau2.webp"
export function SectionHero() {
  return (
    <section className="w-full h-auto bg-orange-100 py-12 md:py-24">
      <div className="container mx-auto px-4">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
    
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Conheça o Itaú e suas soluções financeiras
            </h1>
            <p className="text-lg text-gray-600">
              O Itaú oferece produtos e serviços financeiros inovadores para você e sua empresa.
            </p>
            <p className="text-sm text-gray-500">
              Com soluções digitais e atendimento de qualidade, o Itaú está ao seu lado para transformar sua vida financeira.
            </p>
            <div className="mt-6">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                Saiba Mais
              </button>
            </div>
          </div>

    
          <div className="flex-1 w-full max-w-md">
            <Image
              src={Itau}
              alt="Itaú - Soluções financeiras"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
