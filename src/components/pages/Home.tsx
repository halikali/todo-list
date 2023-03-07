import { BrandLogo } from 'assets'
import EmptyPage from 'components/UI/molecules/EmptyPage/EmptyPage'
import FormInput from 'components/UI/molecules/FormInput/FormInput'
import ListElement from 'components/UI/molecules/ListElement/ListElement'
import ListHeader from 'components/UI/organisms/LiatHeader/ListHeader'
import { useState } from 'react'

function Home() {
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      title: 'Learn React',
      completed: true,
    },
    {
      id: 2,
      title: 'Learn Redux',
      completed: true,
    },
    {
      id: 3,
      title: 'Learn TypeScript',
      completed: false,
    },
  ])

  const deleteTodo = (id: number) => {
    setDummyData(dummyData.filter((item) => item.id !== id))
  }

  const addTodo = (value: string) => {
    if (value.trim() === '') return false

    setDummyData([
      ...dummyData,
      {
        id: dummyData.length + 1,
        title: value,
        completed: false,
      },
    ])

    return true
  }

  return (
    <div className="home-page">
      <div className="container">
        <img src={BrandLogo} alt="brand logo" className="brand-logo" />
        <div className="form-input-wrapper">
          <FormInput addFunc={addTodo} />
        </div>
        <ListHeader completedCount={dummyData.filter((item) => item.completed).length} totalCount={dummyData.length} />
        {dummyData.length === 0 && <EmptyPage />}
        {dummyData.length > 0 && (
          <ul className="todo-list">
            {dummyData.map((todo) => (
              <li key={todo.id}>
                <ListElement checked={todo.completed} text={todo.title} deleteFunc={deleteTodo} id={todo.id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
