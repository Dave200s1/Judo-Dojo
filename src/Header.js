import { useState } from "react";
import Hamburger from "hamburger-react";

function Header(){
    const [isOpen, setOpen] = useState(false);
    
    return(
        <header className="navi">
            <div className="navi-container">

                <img src="/imgs/temple.png" alt="Logo" className="logo" />
                

                <nav className="desktop-navi">
                    <ul className="desktop-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Über uns</a></li>
                        <li><a href="#">Wettbewerbe</a></li>
                        <li><a href="#">Trainingszeiten</a></li>
                    </ul>
                </nav>
                
                {/* Mobile Menu Button */}
                <div className="mobile-menu">
                    <Hamburger 
                        toggled={isOpen} 
                        toggle={setOpen}
                        size={24}
                        color="#f6f7f6"
                        rounded
                    />
                </div>
                

                <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
                        <li><a href="#" onClick={() => setOpen(false)}>Über uns</a></li>
                        <li><a href="#" onClick={() => setOpen(false)}>Wettbewerbe</a></li>
                        <li><a href="#" onClick={() => setOpen(false)}>Trainingszeiten</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;