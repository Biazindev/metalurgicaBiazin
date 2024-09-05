import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../../assets/logo.png'


import { ContainerHeader, Display, DisplayHeader, Hamburguer, LinkHeader, LinkItem, NavMobile } from './styles'

const Header: React.FC = () => {
    const dispatch = useDispatch()

    const [isMenuOpen, setIsMenuOpen] = useState(true)
    return (
        <ContainerHeader>
            <img src={logo} alt="Header Background" />
            <DisplayHeader>
                    <nav>
                        <div>
                            <LinkHeader onClick={() => setIsMenuOpen(true)} to="/">Home</LinkHeader>
                        </div>
                        <ul>
                            <li>
                                <LinkHeader onClick={() => setIsMenuOpen(true)} to={'/contact'}>Contato</LinkHeader>
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
                        </ul>
                    </nav>
                </Display>
            </NavMobile>
        </ContainerHeader>
    )
}

export default Header
