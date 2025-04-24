import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
  
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la búsqueda, por ejemplo, redirigir a una página de resultados
        console.log('Buscando:', searchTerm);
    }

    return (
    <header className='navbar'>
        <div className='navbar-logo'>
            <Link to="/">xGameTracker</Link>
        </div>

        <form className='navbar-search' onSubmit={handleSearch}>
            <div className='search-input-container'>
                <input
                    type="text"
                    placeholder="Buscar juegos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className='search-icon-button'>
                    <i class="fi fi-br-search"></i> {/* Icono de búsqueda (Lupa) */}
                </button>
            </div>            
        </form>

        <div className='navbar-login'>
            <Link to="/login" className='login-button'>Iniciar Sesión</Link>
        </div>
    </header>
  )
}
