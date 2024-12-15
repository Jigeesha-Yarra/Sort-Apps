import "./index.css"

const TabItem = props => {
    const {tabDetails, isActive, clickTabItem} = props
    const {tabId, displayText} = tabDetails

    const tabClassName = isActive ? 'active-tab-btn' : ''

    const onClickTabItem = () => {
        clickTabItem(tabId)
    }

    return(
        <li className="tab-item-container">
            <button 
                type="button"
                className = {`tab-btn ${tabClassName}`} 
                onClick={onClickTabItem}> 
                {displayText} 
            </button>
        </li>
    )
}

export default TabItem

