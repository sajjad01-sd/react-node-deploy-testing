const lead_server_reducer = (state, action) => {
    if(action.type === 'getLeadsProductSuccess') {
        return {...state, leads: action.payload}
    }
    if(action.type === 'getLeadsFilterDataSuccess') {
        return {...state, leads: action.payload}
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default lead_server_reducer;