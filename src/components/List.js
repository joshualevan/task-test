import React, { useState, useRef, useEffect } from 'react'
import { completions } from '../data'

export default function List({ list, lists, setLists, setUpdateStorage, updateStorage }) {

    const [editing, setEditing] = useState(false)
    const [complete, setComplete] = useState(false)

    const editNameRef = useRef()

    useEffect(()=> {
        editing && editNameRef.current.focus()
    }, [editing])

    useEffect(()=> {
        const random = Math.floor(Math.random()*completions.length)
        const listComplete = lists.filter(list => list.complete === false)
        listComplete.length === 0 && alert(completions[random])
    }, [complete])

    const handleComplete = () => {
        setComplete(!complete)
        setUpdateStorage(!updateStorage)
        list.complete = !list.complete
    }

    const handleDeleteList = id => {
        setLists(lists.filter(list => list.id !== id))
      }

    const handleEditMode = () => {
        setEditing(true)
        setUpdateStorage(true)
    }

    const handleConfirmEdit = id => {
        if(editNameRef.current.value !== ''){
            list.listName = editNameRef.current.value
            editNameRef.current.value = null
            setEditing(false)
            setUpdateStorage(false)
        }
    }

    const handleIgnoreEdit = () => {
        editNameRef.current.value = null
        setEditing(false)
        updateStorage(false)
    }
    
    return (
        <>
        {
            !editing && 
            <div className="list-item">
                <button className={list.complete ? 'complete list' : 'incomplete list'} onClick={handleComplete}>{list.listName}</button>
                <div>
                    <button className="edit" onClick={handleEditMode}><i class="fas fa-edit"></i></button>
                    <button className="delete" onClick={()=> handleDeleteList(list.id)}><i class="fas fa-times"></i></button>
                </div>
            </div>
        }
        {
            editing &&
            <div className="list-item">
                <input className="edit-input" type="text" ref={editNameRef} placeholder={list.listName} onKeyPress={e => e.key === 'Enter' && handleConfirmEdit()}/>
                <div>
                    <button onClick={handleConfirmEdit} className="confirm-edit"><i class="fas fa-check"></i></button>
                    <button onClick={handleIgnoreEdit} className="delete"><i class="fas fa-undo-alt"></i></button>
                </div>
            </div>
        }
        </>
    )
}
