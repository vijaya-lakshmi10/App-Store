// Write your code here

import './index.css'

const TabItem = props => {
    const {tabDetails,isActiveTabId,updateActiveAppId}=props
    const {tabId,displayText}=tabDetails
    const onClickTabItem=()=>{
        updateActiveAppId(tabId)
    }
    const activeTabItem=isActiveTabId ? 'active-tab' :'non-active-tab'
    return(
        <li className="tabs-list">
        <button type="button" onClick={onClickTabItem} className={activeTabItem}>
        {displayText}
        </button>
        </li>
    )

}
export default TabItem
