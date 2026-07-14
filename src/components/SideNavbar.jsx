import styles from "./SideNavbar.module.css";

import casa from "../assets/casa.png";
import tabela from "../assets/tabela.png";
import user from "../assets/usuario.png";
import diario from "../assets/diario.png";
import config from "../assets/config.png"
import { useNavigate, Link } from 'react-router-dom';


export function SideNavbar({ menuOpen }) {
    const navigate = useNavigate();

    const irPerfil = () => {
        navigate('/Perfil')
    }
    
    return (
        <nav className={`${styles.vertical_bar} ${menuOpen ? styles.open : ""}`}>
            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <img src={casa} width="40px"/>
                </button>
                <span>Início</span>
            </div>

            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <img src={tabela} width="40px"/>
                </button>
                <span>Programação</span>
            </div>

            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <img src={user} width="40px"/>
                </button>
                <span>Perfis</span>
            </div>

            <div className={styles.areaButton}>
                <button className={styles.button}>
                    <img src={diario} width="40px"/>
                </button>
                <span>Guias</span>
            </div>

            <form method="post" onSubmit={irPerfil} className={`${styles.areaButton} ${styles.config}`}>
                <button type="submit" className={styles.button}>
                    <img src={config} width="40px"/>
                </button>
                <span>Configurações</span>
            </form>

        </nav>
    );
}

