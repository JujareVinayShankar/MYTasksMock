import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagOption from '../TagOption'
import TaskOption from '../TaskOption'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class FormContainer extends Component {
  state = {
    taskName: '',
    taskList: [],
    tagName: tagsList[0].optionId,
    activeTagId: 'INITIAL',
  }

  changeTaskName = event => {
    this.setState({taskName: event.target.value})
  }

  changeTag = event => {
    this.setState({tagName: event.target.value})
  }

  changeTagId = optionId => {
    this.setState({activeTagId: optionId})
  }

  submitButton = event => {
    event.preventDefault()
    const {taskName, tagName, activeTagId} = this.state
    console.log()
    const newTaskList = {
      id: uuidv4(),
      taskName,
      tagName,
      optionsId: activeTagId,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTaskList],
      taskName: '',
    }))
  }

  render() {
    const {taskList, taskName, tagName, activeTagId} = this.state
    const finalList =
      activeTagId === 'INITIAL'
        ? taskList
        : taskList.filter(each => each.id === activeTagId)
    console.log(finalList)
    console.log(taskList)
    return (
      <div className="app-container">
        <div className="form-container">
          <form className="form" onSubmit={this.submitButton}>
            <h1 className="form-heading">Create a task!</h1>
            <div className="input-container">
              <label className="label" htmlFor="task">
                Task
              </label>
              <input
                className="user-input"
                type="text"
                placeholder="Enter the task here"
                id="task"
                onChange={this.changeTaskName}
                value={taskName}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="tags">
                Tags
              </label>
              <select
                id="tags"
                className="user-input"
                onChange={this.changeTag}
                value={tagName}
              >
                {tagsList.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="submit-button">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-and-tasks-container">
          <div className="tags-container">
            <h1 className="tags-heading">Tags</h1>
            <ul>
              {tagsList.map(each => (
                <TagOption
                  key={each.optionId}
                  tagItem={each}
                  activeTagId={activeTagId === each.id}
                  changeTagId={this.changeTagId}
                />
              ))}
            </ul>
          </div>
          <div className="tasks-container">
            <h1 className="task-heading">Tasks</h1>
            <ul className="task-list-container">
              {finalList.map(each => (
                <TaskOption key={each.id} taskOption={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FormContainer
