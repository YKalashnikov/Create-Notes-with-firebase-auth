import React, {useState, useContext} from 'react';
import { AlertContext }  from '../context/alert/alertContext'
import { FirebaseContext } from '../context/alert/firebase/firebaseContext';

const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const handlerSubmit = (e) =>{
            e.preventDefault()
            if(value.trim()){
                firebase.addNote(value.trim()).then(()=>{
                    alert.show('The note was created', 'success')
                }).catch(()=>{
                    alert.show('Something went wrong', 'danger')
                })
                setValue('')
            }else{
                alert.show('Enter the name of the note')
    }
}
    return (
        <form onSubmit={handlerSubmit}>
        <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type in ..."
          value={value}
          onChange = {e=>setValue(e.target.value)}
        />
      </div>
    </form>
    );
};

export default Form;