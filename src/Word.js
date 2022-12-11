export default function Word({ word, guesses, isLoser }) {
    return (
        <div style={{
            display: 'flex',
            gap: '.25em',
            fontSize: '4rem',
            textTransform: 'uppercase',
            fontFamily: 'monospace'
        }}>
        {word.split('').map((letter, index) => (
            <span style={{ borderBottom: '.1em solid black'}} key={index}>
                <span style={{ 
                    visibility: isLoser || guesses.includes(letter)? 'visible': 'hidden',
                    color: isLoser&&!guesses.includes(letter)?'red':''
                }}>{letter}</span>
        </span>
        ))
        }
        </div>
    )
}