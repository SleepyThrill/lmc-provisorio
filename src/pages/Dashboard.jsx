import styles from './Dashboard.module.css';
import lmc_logo from '../assets/lmcplusv2.png'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export function Dashboard() {
    const navigate = useNavigate();

    const irHome = () => {
        navigate('/Dashboard');
    };

    const [open, setOpen] = useState(false);

    return (
        <main className={styles.main}>
            <nav className={styles.vertical_bar}>

            </nav>


            <div className={styles.horizontal_bar}>
                <div className={styles.left_side}>
                    <Link className={styles.img_link} onClick={irHome}><img src={lmc_logo} alt="Logo LMC" height="128px" className={styles.lmc_logo}></img></Link>
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


        </main>
    )
}