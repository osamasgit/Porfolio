import React from 'react';
import './globals.css';

interface NavbarProps {
    name: string;
}

const Navbar = ({ name }: NavbarProps) => {
    return (
        <nav style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', height: '80px' }}>
            <div style={{borderRadius: '50px', width: '90%', height: '60px', backgroundColor: '#41e3de', padding: '0 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>
                <img src="/logo.png" alt="logo" style={{ height: '30px', filter: 'invert(100%)'}} />
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0}}>
                    <li>PORYECTOS</li>
                    <li>FORMACIÓN</li>
                    <li>SOBRE MI</li>
                    <li>CONTACTO</li>
                </ul>
                <div style={{ display: 'flex', gap: '20px'}}>
                    <img src="/linkedin.png" alt="linkedin" style={{height: '24px'}} />
                    <img src="/github.png" alt="github" style={{height: '24px'}} />
                    <button style={{display: 'flex', border: 'solid 1px #000', padding: '0 10px', borderRadius: '15px', background: '#e8a6a8'}}><img src="/assets/download_icon.svg" alt="descargar cv" />CV</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;