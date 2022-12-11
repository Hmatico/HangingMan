import styles from './KeyBoard.module.css'

const KEYS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

export default function KeyBoard({ activeLetters, inactiveLetters, addGuessedLetter, disabled}) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))', gap:'.5rem'}}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button
                onClick={() => addGuessedLetter(key)}
                    className={`
                        ${styles.btn} 
                        ${isActive?styles.active:''}
                        ${isInactive?styles.inactive:''}`} 
                    disabled = {isActive || isInactive || disabled}
                    key={key}>{key}
                </button>
            })}
        </div>
        
    )
}