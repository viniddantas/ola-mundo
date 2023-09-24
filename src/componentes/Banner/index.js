import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhafoto from 'assets/minha_foto.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! 
                    Eu sou Antônio Evaldo, instrutor de Front-end da Alura. 
                    Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Circulo Colorido"
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhafoto}
                    aria-hidden={true}
                    alt="Foto do Ântonio Evaldo"
                />
            </div>
        </div>
    )
}

export default Banner