const login_reducer = (state, action) => {
    if(action.type === 'authented') {
        return {...state, isAuthenticated: true}
    }
    if(action.type === 'updateActiveClass') {
        return {...state, active: action.payload}
    }
    if(action.type === 'openSidebar') {
        return {...state, isExpend: true}
    }
    if(action.type === 'closeSidebar') {
        return {...state, isExpend: false}
    }
    if(action.type === 'lightmode') {
        return {...state, mode: 'light'}
    }
    if(action.type === 'darkmode') {
        return {...state, mode: 'dark'}
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
  
  export default login_reducer