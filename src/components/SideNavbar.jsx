import styles from "./SideNavbar.module.css";

import casa from "../assets/casa.png";
import tabela from "../assets/tabela.png";
import user from "../assets/usuario.png";
import diario from "../assets/diario.png";

function SideNavbar({ menuOpen }) {
    return (
        <nav className={`${styles.vertical_bar} ${menuOpen ? styles.open : ""}`}>
            <div className={styles.area_overflow}>

                <button className={`${styles.menubtn} ${styles.inicio}`}>
                    <img src={casa} width="40" height="40" alt="Início" />
                    <span>Início</span>
                </button>

                <div className={styles.area1}>
                    <button className={`${styles.menubtn} ${styles.parent_btn}`}>
                        <img src={tabela} width="40" height="40" alt="Programação" />
                        <span>Programação</span>
                    </button>

                    <button className={styles.menubtn}>Criar nova</button>

                    <button className={styles.menubtn}>Minhas Programações</button>
                </div>

                <button className={`${styles.menubtn} ${styles.parent_btn}`}>
                    <img src={user} width="40" height="40" alt="Perfis" />
                    <span>Perfis</span>
                </button>

                <div className={styles.area2}>
                    <button className={`${styles.menubtn} ${styles.parent_btn}`}>
                        <img src={diario} width="40" height="40" alt="Guias" />
                        <span>Guias</span>
                    </button>

                    <button className={styles.menubtn}>Uso de perfis</button>

                    <button className={styles.menubtn}>Criação de tabela</button>

                    <button className={styles.menubtn}>Inserções</button>
                </div>

            </div>
        </nav>
    );
}

export default SideNavbar;