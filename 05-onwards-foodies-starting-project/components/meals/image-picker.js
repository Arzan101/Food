import classes from './image-picker.module.css'

export default function ImagePicker({label,name}){
    return ( <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
        <input 
        className={classes.input}
        type='file' 
        id={name}
        accept="image/png , image/jpeg"
        name={name}
        />
        <button className={classes.button} type="button">
            Pick an Image
        </button>
        </div>
    </div>
    );
}