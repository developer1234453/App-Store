// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails,  setActiveTable, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickedTvItem = () => {
    setActiveTable(tabId)
  }
  const activeTabClassNmae = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li classNmae="tab-item">
      <button
        type="button"
        classNmae={activeTabClassNmae}
        onClick={onClickedTvItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
