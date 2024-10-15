import { Container } from "./Container";
import Image from "next/image";
import ImgAppleStore from '@/assets/btn-apple-store.svg';
import ImgGooglePlay from '@/assets/btn-google-play.svg';
import Arrow from '@/assets/arrow-explorer.svg';
import WomanImage from '@/assets/woman.png';

export function SectionHero() {
    return (
        <section className="w-full h-auto bg-img-bg-hero bg-no-repeat bg-center bg-cover py-12 md:py-0">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between mt-10 ">
                    {/* Texto e botões */}
                    <div className="flex-1 max-w-full md:max-w-[500px] text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                            Tenha seu banco na palma da mão
                        </h1>
                        <p className="text-white text-lg md:text-xl max-w-full md:max-w-[408px] mb-8">
                            Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4 mb-12 md:mb-24">
                            <button>
                                <Image src={ImgAppleStore} alt="Apple Store" />
                            </button>
                            <button>
                                <Image src={ImgGooglePlay} alt="Google Play" />
                            </button>
                        </div>
                        <button className="flex items-center gap-3 justify-center md:justify-start">
                            <Image src={Arrow} alt="Arrow down" />
                            <span className="text-white text-sm font-bold">Continue explorando</span>
                        </button>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <Image
                            src={WomanImage}
                            alt="Woman Image"
                            className="hidden md:block w-full max-w-[485px] lg:max-w-[540px] mr-0 md:mr-[-41px]"
                        />
                    </div>




                </div>
            </Container>
        </section>
    );
}
