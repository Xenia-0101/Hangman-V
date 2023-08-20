import Styles from "./CategoryBtn.module.css"

export default function CategoryBtn(props) {
    const {btnFunction, btnLabel, currentCategory } = props

  return (
    <>
        <button 
        onClick={(event) => btnFunction(event.target.name)} 
        className={`${Styles.btn} ${btnLabel === currentCategory && Styles.selected}`} 
        name={btnLabel}>{btnLabel}
        </button>
    </>
  )
}
