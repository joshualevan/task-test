import React, { useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export default function Input({ lists, setLists }) {
    const listNameRef = useRef()

    useEffect(() => {
        listNameRef.current.focus()
    }, [])

    const handleAddList = () => {
        listNameRef.current.value !== '' &&
        setLists([
          ...lists, {
            id: uuid(),
            listName: listNameRef.current.value,
            complete: false,
            tasks: []
          }
        ])
        listNameRef.current.value = null
      }
    
      const handleClear = () => {
        setLists(lists.filter(list => !list.complete && list))
      }

    return (
        <div className="list-input">
            <input type="text" ref={listNameRef} onKeyPress={e => e.key === 'Enter' && handleAddList()} />
            <button onClick={handleAddList}><i class="fas fa-plus"></i></button>
            <button onClick={handleClear} className="clear-button"><i class="fas fa-cut"></i></button>
        </div>
    )
}
