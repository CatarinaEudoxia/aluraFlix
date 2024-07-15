import styles from './NaoEncontrado.module.css'
import notFoundImg from './page-not-found-404.png'

const NaoEncontrado = () => {
  return (
    <img className={styles.img} src={notFoundImg} alt='Imagem de página não encontrada'/>
  )
}

export default NaoEncontrado