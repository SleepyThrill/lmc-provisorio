import styles from "./ContaNavbar.module.css";
import usuario from '../assets/usuario.png'
import cadeado from '../assets/cadeado.png'
import paleta from '../assets/paleta.png'
import pessoa from '../assets/pessoa.png'
import autenticacao from '../assets/autenticacao.png'


export function ContaNavbar(){
    return(
        <div className={styles.ContaNavbar}>

            <div className={styles.areaTitulo}>
                <span>Conta</span>
            </div>

            <button className={styles.button}> <img src={usuario} width='30px' height='30px'/> Perfil</button>
            <button className={styles.button}> <img src={cadeado} width='30px' height='30px'/>Acesso</button>
            <button className={styles.button}> <img src={paleta} width='30px' height='30px'/>Aparência</button>
            <button className={styles.button}> <img src={pessoa} width='30px' height='30px'/>Acessibilidade</button>
            <button className={styles.button}> <img src={autenticacao} width='30px' height='30px'/>Autenticação</button>
        </div>
    )
}

export default ContaNavbar;