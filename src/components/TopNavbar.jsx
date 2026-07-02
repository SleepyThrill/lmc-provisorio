import styles from "./TopNavbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import lmc_logo from "../assets/lmcplusv2.png";

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

                <Link className={styles.img_link} onClick={irHome}><img src={lmc_logo} alt="Logo LMC" height="70px" width="140px" className={styles.lmc_logo}></img></Link>
                <span className={styles.page_atual}>Dashboard</span>
            </div>

            <div className={styles.right_side}>
                <button className={styles.configuracoes_popovergear} onClick={() => setOpen(!open)}></button>
            </div>

            {open && (
                <div className={styles.configuracoes_botao_container}>
                    <div className={styles.configuracoes_botao}>Perfil</div>
                    <div className={styles.configuracoes_botao}>Acesso</div>
                    <div className={styles.configuracoes_botao}>Aparência</div>
                    <div className={styles.configuracoes_botao}>Acessibilidade</div>
                    <div className={styles.configuracoes_botao}>Autenticação</div>
                </div>
            )}
        </div>
    ); 
}

export default TopNavbar;