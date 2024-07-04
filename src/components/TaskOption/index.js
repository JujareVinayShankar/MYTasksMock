const TaskOption = props => {
  const {taskOption} = props
  const {taskName, tagName} = taskOption
  return (
    <li className="task-item">
      <h1 className="task-name">{taskName}</h1>
      <h1 className="tag-name">{tagName}</h1>
    </li>
  )
}

export default TaskOption
