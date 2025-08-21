import React from 'react';
import './globals.css';

interface NavbarProps {
    name: string;
}

const Navbar = ({ name }: NavbarProps) => {
    return (
        <nav style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', height: '80px' }}>
            <div style={{borderRadius: '50px', width: '90%', height: '60px', color: '#41e3de', backgroundColor: '#000', border: 'solid 3px #41e3de', padding: '0 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>
                <img src="/logo.png" alt="logo" style={{ height: '30px'}} />
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0}}>
                    <li>PORYECTOS</li>
                    <li>FORMACIÓN</li>
                    <li>SOBRE MI</li>
                    <li>CONTACTO</li>
                </ul>
                <div style={{ display: 'flex', gap: '20px'}}>
                    <img src="/linkedin.png" alt="linkedin" style={{height: '24px', filter: 'invert(100%)'}} />
                    <img src="/github.png" alt="github" style={{height: '24px', filter: 'invert(100%)'}} />
                    <button>Descargar CV</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;