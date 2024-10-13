'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/assets/logo.svg'
import { ItemMenu } from './ItemMenu'
import { Search } from './Search'

import IconUser from '@/assets/icon-user.svg'
import HamburgerIcon from '@/assets/hamburger.png' // Supondo que você tenha o ícone de hamburger.

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a abertura do menu

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }

    return (
        <header className="flex items-center w-full h-20 bg-primary-orange">
            <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                {/* Logo e itens de menu */}
                <div className="flex items-center gap-14">
                    <Image
                        src={Logo}
                        alt='Logo'
                        className="w-auto h-10"
                    />
                    <ul className={`flex items-center gap-14 md:gap-8 lg:gap-14 ${menuOpen ? 'flex-col absolute top-20 left-0 w-full bg-primary-orange p-4' : 'hidden'} md:flex md:flex-row md:items-center md:gap-14`}>
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
                    </ul>
                </div>

                {/* Menu Hamburguer */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <Image
                            src={HamburgerIcon}
                            alt="Menu"
                            className="h-6 w-6"
                        />
                    </button>
                </div>

                {/* Área de pesquisa e botão de acesso à conta */}
                <div className="flex items-center gap-4 ml-auto">
                    <Search />
                    <button className="flex items-center justify-center gap-4 bg-primary-blue h-20 px-10">
                        <Image
                            src={IconUser} alt='Icon user'
                            className="h-5 w-5"
                        />
                        <span className="text-white font-bold">Acessar Conta</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
