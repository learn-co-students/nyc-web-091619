// The reducer takes 2 arguments:
// 1. The previous state
// 2. The action which contains both the message and the payload. It is a POJO

const defaultState = {
  likes: 0,
  text: "",
  darkMode: false,
  thangs: []
}

function reducer(prevState = defaultState, action){
  // The reducer is the thing that controls how your state should change
  // console.log("REDUCING")

  // console.log("state", prevState)
  // console.log("action", action)

  // Whatever is returned from the reducer BECOMES the new state
  switch(action.type){
    case "ADD_LIKE":
      return {...prevState, likes: prevState.likes + 1}
    case "REMOVE_LIKE":
      return {...prevState, likes: prevState.likes - 1}
    case "TOGGLE_DARK":
      return {...prevState, darkMode: !prevState.darkMode}
    case "HANDLE_CHANGE":
      return {...prevState, text: action.payload}
    case "ADD_THANG":
      return {...prevState, thangs: [...prevState.thangs, action.payload]}
    default:
      return prevState
  }

}

export default reducer