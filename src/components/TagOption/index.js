import './index.css'

const TagOption = props => {
  const {tagItem, changeTagId} = props
  const {optionId, displayText} = tagItem
  const onClickTag = () => [changeTagId(optionId)]
  return (
    <li className="tag-item">
      <button className="tag-button" type="button" onClick={onClickTag}>
        {displayText}
      </button>
    </li>
  )
}

export default TagOption
