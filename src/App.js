import noteReducer from './reducers/noteReducer'
import { createNote, toggleImportanceOf } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'

const generateId = () =>
  Math.floor(Math.random() * 1000000)

  const App = () => {

    return (
      <div>
        <NewNote />
        <Notes  />
      </div>
    )
  }
  
export default App