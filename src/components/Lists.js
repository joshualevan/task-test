import React from 'react'
import List from './List'

export default function Lists({ lists, setLists, setUpdateStorage, updateStorage }) {
    return (
        <div>
            {lists.map(list => <List 
            key={list.id}
            list={list}
            lists={lists}
            setLists={setLists}
            setUpdateStorage={setUpdateStorage}
            updateStorage={updateStorage}
            />)}
        </div>
    )
}
