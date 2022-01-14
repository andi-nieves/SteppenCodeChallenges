const Button = ({ onClick, icon }) => <a href="/#" onClick={e => {
  e.preventDefault()
  onClick()
}} className="mr-1">
  <i className={icon}></i>
</a>

export const ItemList = ({ data, editing, onEdit = () => { }, onDelete = () => { } }) => {
  return <ul className={editing ? 'editing' : ''}>
    {data.map((value, index) => <li key={index} className="is-flex">
      <div className="actions">
        <Button onClick={onEdit.bind(this, { index, value })} icon="fa fa-pencil has-text-info" />
        <Button onClick={onDelete.bind(this, { index, value })} icon="fa fa-remove has-text-danger" />
      </div>
      <p>{value} {editing?.index === index ? ' (editing)' : ''}</p>
    </li>)}
  </ul>
}
