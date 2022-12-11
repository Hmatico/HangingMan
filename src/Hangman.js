const HEAD = <div style={{
    position: 'absolute',
    top: '50px',
    left: '205px',
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    border: '10px solid black',
}}/>
const BODY = <div style={{
    position: 'absolute',
    top: '115px',
    left: '235px',
    width: '10px',
    height: '80px',
    backgroundColor: 'black',
}}/>
const RIGHT_ARM = <div style={{
    position: 'absolute',
    top: '150px',
    left: '245px',
    width: '60px',
    height: '10px',
    rotate: '-40deg',
    transformOrigin: 'left bottom',
    backgroundColor: 'black',
}}/>
const LEFT_ARM = <div style={{
    position: 'absolute',
    top: '150px',
    left: '175px',
    width: '60px',
    height: '10px',
    rotate: '40deg',
    transformOrigin: 'right bottom',
    backgroundColor: 'black',
}}/>
const RIGHT_LEG = <div style={{
    position: 'absolute',
    top: '190px',
    left: '245px',
    width: '80px',
    height: '10px',
    rotate: '60deg',
    transformOrigin: 'left top',
    backgroundColor: 'black',
}}/>
const LEFT_LEG = <div style={{
    position: 'absolute',
    top: '190px',
    left: '155px',
    width: '80px',
    height: '10px',
    rotate: '-60deg',
    transformOrigin: 'right top',
    backgroundColor: 'black',
}}/>

export default function Hangman() {
    return(
        <div style={{ position: 'relative'}}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '10px',
            height: '50px',
            backgroundColor: 'black',
        }}/>
        <div style={{
            width: '150px',
            height: '10px',
            marginLeft: '95px',
            backgroundColor: 'black',
        }}/>
        <div style={{
            width: '10px',
            height: '300px',
            marginLeft: '95px',
            backgroundColor: 'black',
        }}/>
        <div style={{
            width: '200px',
            height: '10px',
            backgroundColor: 'black',
        }}/>
    </div>
    );
}