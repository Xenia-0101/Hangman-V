import { useTheme } from './ThemeContext'
import Styles from './ThemeContextComponent.module.css'

export default function ThemeContextComponent() {
    const {theme, updateTheme} = useTheme()


  return (
    <>
    <button className={Styles.btn} onClick={() => updateTheme()}>{theme}</button>
    </>
  )
}
