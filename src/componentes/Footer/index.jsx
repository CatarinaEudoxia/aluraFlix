import styles from "./Footer.module.css"
import logo from "./../Header/logo.png"
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo da Alura Latam" />
      <p>Desenvolvido por&nbsp;
            <a href="https://github.com/CatarinaEudoxia" target="_blank">Catarina E. Ferreira </a>
            ©️2024
        </p>
        <p>ALURA LATAM | ORACLE NEXT ONE — 2024</p>
    </footer>
  )
}

export default Footer