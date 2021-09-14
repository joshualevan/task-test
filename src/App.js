import { useState, useEffect } from 'react'
import Lists from './components/Lists'
import Input from './components/Input'

// add ENTER keypress functionality
//When whole list complete, trigger TADA! event
//When clearing completed tasks and list array.length is 0, ask to delete whole list
//FIX BUG --- local storage not storing complete

const LOCAL_STORAGE_KEY = 'tadaApp.lists'

function App() {
  const [lists, setLists] = useState([])
  const [updateEditing, setUpdateEditing] = useState(false)
  const [updateComplete, setUpdateComplete] = useState(false)

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    storedLists && setLists(storedLists)
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists))
  }, [lists, updateEditing, updateComplete])

  return (
    <>
      <Input lists={lists} setLists={setLists}/>
      <Lists lists={lists}
      setLists={setLists}
      setUpdateEditing={setUpdateEditing}
      updateComplete={updateComplete}
      setUpdateComplete={setUpdateComplete}
      />
    </>
  );
}

export default App;
