import React, { useEffect, useState } from 'react'
import {Menu, X} from 'lucide-react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrool, setScrool] = useState(false)

    useEffect(()=>{
        const handleScrooled = ()=>{
            if(window.scrollY > 8)
                setScrool(true)
            else
                setScrool(false)
        }

        window.addEventListener('scroll', handleScrooled)

        return()=>{
            window.removeEventListener('scroll', handleScrooled)
        }
    }, [])
    
  return (
    <header className={`${scrool ? 'cabecalho' : ''}`}>
        <section className="container">
            <div className="logo">
                <img src={assets.Logo} alt="Logotipo Da Zenith" />
            </div>

            <div className="menu">
                <div className="glass" onClick={()=>setMenuOpen(!menuOpen)}>
                    <h2>Menu {menuOpen ? <X/>:<Menu size={32}/>}</h2>
                </div>
                <nav className={`sid ${menuOpen ? 'active':''}`}>
                    <ul>
                        <li>
                            <NavLink to={'/'} className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
                        </li>
                        <li><NavLink to={'/servicos'}className={({isActive}) => isActive ? 'active-link' : ''}>Serviços</NavLink></li>
                    </ul>
                </nav>
            </div>
        </section>
    </header>
  )
}

export default Header