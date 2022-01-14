import React from "react"
import { ItemList } from "./ItemList.jsx"

import "bulma/css/bulma.min.css"

import Modal from './Modal'

function App() {
  const [list, setList] = React.useState([]);
  const [text, setText] = React.useState("")
  const [selected, setSelected] = React.useState(null)
  const [deleteSelected, setDeleteSelected] = React.useState(null)

  const submit = () => {
    if (selected) {
      list[selected.index] = text
      setList(list)
      setSelected(null)
    } else {
      list.push(text)
    }
    setText("")
  }

  const onKeyUp = e => {
    if (e.keyCode !== 13) return
    submit()
  }

  const onChange = e => setText(e.target.value)

  const onEdit = selected => {
    setText(selected.value)
    setSelected(selected)
  }

  const onDelete = selected => setDeleteSelected(selected)

  const deleteItem = () => {
    const newArr = list.filter((v, i) => deleteSelected.index !== i)
    setList(newArr)
    onDismiss()
  }

  const onDismiss = () => setDeleteSelected(null)

  return (
    <div className="container">
      <h1 className="is-size-2">
        Item List with Add, Edit and Remove
      </h1>
      {list.length === 0 && <p>To start please type text below.</p>}
      <ItemList
        onEdit={onEdit}
        onDelete={onDelete}
        data={list}
        editing={selected}
      />
      <div className="field has-addons" style={{ maxWidth: 500 }}>
        <div className="control is-expanded">
          <input value={text} onChange={onChange} onKeyUp={onKeyUp} type="text" className="input is-info" placeholder="Compose a text" />
        </div>
        <p className="control">
          <button onClick={submit} className="button is-info">Save</button>
        </p>
      </div>

      <Modal
        show={deleteSelected}
        title={deleteSelected?.value}
        message="Are you sure you want to delete this item?"
        onConfirm={deleteItem}
        onDismiss={onDismiss}
      />
    </div>
  )
}

export default App
