import React from 'react';
import { FaBarcode, FaRegCreditCard } from "react-icons/fa";
import { IoIosPhonePortrait, IoMdHelpCircle } from "react-icons/io";
import { IoDocumentText, IoDocumentAttach } from "react-icons/io5";


const InfoCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => {
    return (
        <div className="flex flex-col w-48 h-42 p-4 gap-2 border rounded-lg hover:border-primary-orange hover:bg-gray-200 group">
            <Icon className="w-6 h-6 text-black group-hover:text-primary-orange" />
            <p className="text-base">{title}</p>
            <p className="text-xs text-slate-600">{description}</p>
        </div>
    );
};

const SectionResolve = () => {
    // Dados para os cards
    const cardData = [
        { icon: FaBarcode, title: "Boleto", description: "Emita 2 via de boletos Itaú" },
        { icon: FaRegCreditCard, title: "Desbloqueio de cartão", description: "Saiba como fazer" },
        { icon: IoIosPhonePortrait, title: "Aplicativos", description: "Baixe os apps do banco Itaú" },
        { icon: IoDocumentText, title: "Fatura digital", description: "Receba a fatura do seu cartão" },
        { icon: IoDocumentAttach, title: "Comprovantes", description: "Gere uma 2 via do comprovante" },
        { icon: IoMdHelpCircle, title: "Atendimento", description: "Conheça nossos canais de ajuda" },
    ];

    return (
        <section className="m-10">
            <h1 className="font-bold text-2xl mb-10">Resolva as questões do dia a dia</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto justify-items-center">
                {cardData.map((card, index) => (
                    <InfoCard key={index} icon={card.icon} title={card.title} description={card.description} />
                ))}
            </div>


        </section>
    );
};

export default SectionResolve;
