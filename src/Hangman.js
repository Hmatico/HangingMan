const BASE = <>
    <div style={{
        position: 'absolute',
        left: '250px',
        width: '10px',
        height: '50px',
        backgroundColor: 'black',
    }}/>
    <div style={{
        position: 'relative',
        top: 0,
        left: '100px',
        width: '150px',
        height: '10px',
        backgroundColor: 'black',
    }}/>
    <div style={{
        position: 'relative',
        top: 0,
        left: '100px',
        width: '10px',
        height: '300px',
        backgroundColor: 'black',
    }}/>
    <div style={{
        position: 'relative',
        bottom: 0,
        width: '400px',
        height: '10px',
        backgroundColor: 'black',
    }}/>
</>
const HEAD = <div style={{
    position: 'absolute',
    top: '55px',
    left: '220px',
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    border: '10px solid black',
}}/>
const BODY = <div style={{
    position: 'absolute',
    top: '125px',
    left: '250px',
    width: '10px',
    height: '80px',
    backgroundColor: 'black',
}}/>
const RIGHT_ARM = <div style={{
    position: 'absolute',
    top: '150px',
    left: '260px',
    width: '60px',
    height: '10px',
    rotate: '-40deg',
    transformOrigin: 'left bottom',
    backgroundColor: 'black',
}}/>
const LEFT_ARM = <div style={{
    position: 'absolute',
    top: '150px',
    left: '190px',
    width: '60px',
    height: '10px',
    rotate: '40deg',
    transformOrigin: 'right bottom',
    backgroundColor: 'black',
}}/>
const RIGHT_LEG = <div style={{
    position: 'absolute',
    top: '195px',
    left: '260px',
    width: '80px',
    height: '10px',
    rotate: '60deg',
    transformOrigin: 'left top',
    backgroundColor: 'black',
}}/>
const LEFT_LEG = <div style={{
    position: 'absolute',
    top: '195px',
    left: '170px',
    width: '80px',
    height: '10px',
    rotate: '-60deg',
    transformOrigin: 'right top',
    backgroundColor: 'black',
}}/>


function Hangman() {
    return (
        <>
            {BASE}
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
        </>
        
    );
}

export default Hangman;