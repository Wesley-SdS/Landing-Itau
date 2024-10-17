import { TfiMoney } from "react-icons/tfi";
import { ServiceCard } from "@/components/ServiceCardProps";

import Cliente1 from '@/assets/cliente1.png'; 
import Cliente2 from '@/assets/cliente2.png';
import Cliente3 from '@/assets/fgts.jpg';
import Cliente4 from '@/assets/itau.png';
import Azul from '@/assets/azul.png';
import Pao from '@/assets/pao.png';
import Latam from '@/assets/latam.jpg';
import Cartoes from '@/assets/cartoes.png';
import Negociacao from '@/assets/negociacao.png';
import Image from "next/image";

export function SectionServices() {
    return (
        <section className="mb-10">
            <div className="max-w-7xl mx-auto mt-4 items-center justify-between">
                <h1 className="text-xl font-semibold mb-6">Contrate nossos produtos on-line</h1>
                <p className="text-gray-600 mb-10">Confira as soluções que o banco Itaú oferece para você</p>
            </div>
            <div className="border rounded-lg max-w-7xl mx-auto mt-4  flex items-center justify-between">
                <div className="flex-1">
                    <div className="p-6">
                        <div className="flex items-center text-orange-500 mb-2">
                            <TfiMoney className="mr-2 text-2xl" />
                            <p className="font-semibold">Renegociação</p>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Renegociação. Conte com o Itaú</h2>
                        <p className="text-gray-700 mb-4">
                            Simule do seu jeito e negocie contas em atraso com a melhor condição. É simples, rápido e seguro.
                        </p>
                        <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50">
                            Confira aqui
                        </button>
                    </div>

                </div>
                <div className="ml-4">
                    <Image
                        src={Negociacao}
                        alt="Renegociação"
                        width={300}
                        height={400}
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6"> 
                <ServiceCard
                    icon={TfiMoney}
                    title="Empréstimo"
                    subtitle="Consignado INSS"
                    description="Disponível até para quem não tem conta Itaú."
                    buttonText="Confira aqui"
                    imageSrc={Cliente1}  // Atualize as imagens de acordo
                    altText="Consignado INSS"

                />

                <ServiceCard
                    icon={TfiMoney}
                    title="Cartões"
                    subtitle="O cartão de crédito ideal"
                    description="Selecione o benefício do cartão de crédito ideal pra você."
                    buttonText="Peça o seu"
                    imageSrc={Cliente2}  // Atualize a imagem
                    altText="Cartão de Crédito"
                />

                <ServiceCard
                    icon={TfiMoney}
                    title="Antecipação FGTS"
                    subtitle="Não deixe o seu dinheiro parado"
                    description="Antecipe o seu FGTS em até 7 parcelas e o dinheiro cai em até 24 horas."
                    buttonText="Simule agora"
                    imageSrc={Cliente3}  // Atualize a imagem
                    altText="Antecipação FGTS"
                />

                <ServiceCard
                    icon={TfiMoney}
                    title="Renegociação"
                    subtitle="Renegociação. Conte com o Itaú"
                    description="Simule do seu jeito e negocie contas em atraso com a melhor condição. É simples, rápido e seguro."
                    buttonText="Confira"
                    imageSrc={Cliente4}  
                    altText="Renegociação"
                />

            </div>

            <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border rounded-lg p-6 flex flex-col justify-between items-center gap-2">
                    <Image
                        src={Azul}
                        width={100}
                        height={100}
                        alt="cartão azul"
                        className="flex justify-center"
                    />
                    <p className="text-lg font-bold mb-2">Cartão Azul Infinite</p>
                    <p className="text-gray-700 mb-4">Acompanhante grátis em 2 viagens e upgrade de cabine</p>
                    <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50">Peça seu cartão</button>
                </div>
                <div className="border rounded-lg p-6 flex flex-col justify-between items-center gap-2">
                    <Image
                        src={Pao}
                        width={100}
                        height={100}
                        alt="cartão azul"
                        className="flex justify-center"
                    />
                    <p className="text-lg font-bold mb-2">Cartão Azul Infinite</p>
                    <p className="text-gray-700 mb-4">Acompanhante grátis em 2 viagens e upgrade de cabine</p>
                    <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50">Peça seu cartão</button>
                </div>
                <div className="border rounded-lg p-6 flex flex-col justify-between items-center gap-2">
                    <Image
                        src={Latam}
                        width={100}
                        height={100}
                        alt="cartão azul"
                        className="flex justify-center"
                    />
                    <p className="text-lg font-bold mb-2">Cartão Azul Infinite</p>
                    <p className="text-gray-700 mb-4">Acompanhante grátis em 2 viagens e upgrade de cabine</p>
                    <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50">Peça seu cartão</button>
                </div>
                <div className="border rounded-lg p-6 flex flex-col justify-between items-center gap-2">
                    <Image
                        src={Cartoes}
                        width={100}
                        height={100}
                        alt="cartão azul"
                        className="flex justify-center"
                    />
                    <p className="text-lg font-bold mb-2">Cartão Azul Infinite</p>
                    <p className="text-gray-700 mb-4">Acompanhante grátis em 2 viagens e upgrade de cabine</p>
                    <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50">Peça seu cartão</button>
                </div>
            </div>

        </section>
    );
}
