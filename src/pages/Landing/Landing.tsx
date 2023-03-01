// stylesheets
import styles from './Landing.module.css'

import logo from '/logo.svg'
import label from '/label.svg'

const Landing = (): JSX.Element => {

  return (
    <main className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={styles.welcome}>Welcome to</h1>
        <img src={label} alt="flavorite" className={styles.label} />
      </div>
      <img src={logo} alt="flavorite Logo" className={styles.floatingLogo} />
      <h3 className={styles.message}>Share images of your favorite meals and keep track of your culinary adventures.</h3>
    </main>
  )
}

export default Landing
