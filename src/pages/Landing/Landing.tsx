// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

import logo from '/logo.png'
import label from '/label.png'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <div className={styles.logoContainer}>
        <h1>Welcome to</h1>
        <img src={label} alt="flavorite" />
      </div>
      <img src={logo} alt="flavorite Logo" className={styles.floatingLogo} />
      <p>Share images of your favorite meals from restaurants and keep track of your culinary adventures.</p>
    </main>

  )
}

export default Landing
