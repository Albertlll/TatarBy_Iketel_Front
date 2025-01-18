function ProgressBar(props) {
    return ( 
        <progress max="6" value={props.value}/>
     );
}

export default ProgressBar;