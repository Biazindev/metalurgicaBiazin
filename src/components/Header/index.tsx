import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../../assets/logo.png'


import { ContainerHeader, Display, DisplayHeader, Hamburguer, LinkHeader, LinkItem, NavMobile, Logo } from './styles'

const Header: React.FC = () => {
    const dispatch = useDispatch()

    const [isMenuOpen, setIsMenuOpen] = useState(true)
    return (
        <ContainerHeader>
            <Logo>
                <img src={logo} alt="Header Background" />
                <p>Metalúrgica Biazin</p>
            </Logo>
            <DisplayHeader>
                    <nav>
                        <div>
                            <LinkHeader onClick={() => setIsMenuOpen(true)} to="/">Home</LinkHeader>
                        </div>
                        <ul>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to={'/contact'}>Contato</LinkHeader>
                            </li>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to={'/jobs'}>Trabalhe Conosco</LinkHeader>
                            </li>
                        </ul>
                    </nav>
                </DisplayHeader>
            <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
            </Hamburguer>
            <NavMobile>
                <Display $isOpen={!isMenuOpen}>
                    <nav>
                        <ul>
                            <LinkItem>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to="/">Home</LinkHeader>
                            </LinkItem>
                            <LinkItem>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to={'/contact'}>Contato</LinkHeader>
                            </LinkItem>
                            <LinkItem>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to={'/jobs'}>Trabalhe Conosco</LinkHeader>
                            </LinkItem>
                        </ul>
                    </nav>
                </Display>
            </NavMobile>
        </ContainerHeader>
    )
}

export default Header
