import classes from './Backdrop.module.css'
function Backdrop(props){
    return <div className={classes.backdrop} onClick={props.onBackdrop} />;    
}
export default Backdrop;