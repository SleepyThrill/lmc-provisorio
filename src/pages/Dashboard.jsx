import styles from './Dashboard.module.css';
import lmc_logo from '../assets/lmcplusv2.png'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Subtitles } from 'lucide-react';

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


            <div className={styles.area_grid}>

                <div className={styles.programacao}>
                    <div className={styles.prog_header}>
                        <h1>Programação</h1>
                        <button>Criar Programação</button>
                    </div>

                    <div className={styles.prog_content}>
                        <h3>Criado por último</h3>
                        <div className={styles.prog_info}>
                            <img src=""/>
                            <div>
                                <h3 id={styles.prog_titulo}>Programação-(dia)</h3>
                                <p id={styles.prog_horario}>*horário*</p>
                                <p>Possui horários fixos</p>
                                <p>Inserções: padrão</p>
                                <p>Perfil</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.profile}>
                    <div className={styles.profile_header}>
                        <h1>Perfis</h1>
                        <button>Ver Perfis</button>
                    </div>

                    <div className={styles.profile_content}>
                        <h3>Usados Recentemente</h3>
                        <div className={styles.prof_info}>
                            <div className={styles.perfil}>
                                <div>
                                    <img src=""/>
                                    <h3 id={styles.perf_titulo}>Perfil 1</h3>
                                </div>
                                <p>Sem Descrição</p>
                                
                                <button>Usar Perfil</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}