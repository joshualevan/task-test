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
  const [updateStorage, setUpdateStorage] = useState(false)

  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    storedLists && setLists(storedLists)
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists))
  }, [lists, updateStorage])

  return (
    <>
      <Input lists={lists} setLists={setLists}/>
      <Lists lists={lists}
      setLists={setLists}
      setUpdateStorage={setUpdateStorage}
      updateStorage={updateStorage}
      />
    </>
  );
}

export default App;
