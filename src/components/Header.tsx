'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { ItemMenu } from './ItemMenu';
import { Search } from './Search';

import { Container } from './Container';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }

    return (
        <header className="flex items-center w-full h-20 bg-primary-orange">
            <Container>
                <div className="flex items-center gap-6 md:gap-8">
                    <Image
                        src="/assets/logo.svg" 
                        alt='Logo'
                        width={40} 
                        height={40} 
                    />
                    <ul className={`flex items-center gap-14 md:gap-8 lg:gap-14 ${menuOpen ? 'flex-col absolute top-20 left-0 w-full bg-primary-orange p-4 md:p-0' : 'hidden'} md:flex md:flex-row md:items-center md:gap-14`}>
                        <li>
                            <ItemMenu name='Para você' />
                        </li>
                        <li>
                            <ItemMenu name='Para empresas' />
                        </li>
                        <li>
                            <ItemMenu name='Serviços' />
                        </li>
                        <li>
                            <ItemMenu name='Ajuda' />
                        </li>

                        <li className="md:hidden w-full">
                            <Search />
                        </li>
                    </ul>
                </div>

                <div className="md:hidden ml-auto flex items-center">
                    <button onClick={toggleMenu}>
                        <Image
                            src="/assets/hamburger.png" 
                            alt="Menu"
                            width={24} 
                            height={24} 
                        />
                    </button>
                </div>
            </Container>

            <div className="ml-auto flex items-center gap-4">
                <button className="flex items-center justify-center gap-4 bg-primary-blue h-20 px-10">
                    <Image
                        src="/assets/icon-user.svg" 
                        alt='Icon user'
                        width={20} 
                        height={20} 
                    />
                    <span className="text-white font-bold">Acessar Conta</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
