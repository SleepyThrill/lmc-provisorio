import styles from "./TopNavbar.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lmc_logo from "../assets/lmcplusv2.png";
import casa from '../assets/casa.png';

function TopNavbar({
    open,
    setOpen,
    menuOpen,
    setMenuOpen
}) {
    const navigate = useNavigate();

    const irHome = () => {
        navigate("/Dashboard");
    };

    return (
        <div className={styles.horizontal_bar}>
            <div className={styles.left_side}>

                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.active : styles.inactive}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <Link className={styles.img_link} onClick={irHome}><img src={lmc_logo} alt="Logo LMC" height="50px" width="100px" className={styles.lmc_logo}></img></Link>

            </div>

            {/* Sistema de abas */}
            <div className={styles.tabs}>
                <Link title="Início" onClick={irHome} className={`${styles.tab} ${styles.inicio}`}>
                    <img src={casa} width="30px"/>
                    <span>Início</span>
                    <button className={styles.closeTab}>✕</button>
                </Link>
                <button className={styles.openTab}>+</button>
            </div>

            
        </div>
    ); 
}

export default TopNavbar;