import { AnyAction } from 'redux'
// import { TTollsSite } from 'types'
import { mockToll } from '_mockApis/toll/mockToll'

const tollsReducer = (
    state: Array<any> | undefined = mockToll,
    action: AnyAction
) => {
    switch (action.type) {
        case 'LIST_TOLLS':
            return action.payload
        case 'ADD_TOLLS':
            return [...state, action.payload]
        case 'UPDATE_TOLLS': {
            console.log('reducer',action.payload)
            const deleteToll = state.filter(
                (toll) => toll?.id !== action.payload.id
            )
            const findToll = state.find(
                (toll) => toll?.id === action.payload.id
            )
            return [{...findToll, location: action.payload.location}, ...deleteToll]
        }
        default:
            return state
    }
}

export default tollsReducer
