import React, {Fragment, useContext, useEffect} from 'react';
import Form from '../components/Form';
import Notes from '../components/Notes';
import { FirebaseContext } from '../context/alert/firebase/firebaseContext';
import { Loader } from '../components/Loader';

const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

   useEffect(()=>{
     fetchNotes()
     // eslint-disable-next-line
   },[])
   
    return (
        <Fragment>
          <Form/>
          <hr/>
          {loading ? 
          <Loader /> 
          : <Notes notes={notes} removeNote={removeNote}/>
        }
        </Fragment>
    )
}

export default Home;