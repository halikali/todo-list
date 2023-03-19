import { t } from 'i18next'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Button from 'components/UI/atoms/Button/Button'
import { BrandLogo } from 'assets'
import EmptyPage from 'components/UI/molecules/EmptyPage/EmptyPage'
import FormInput from 'components/UI/molecules/FormInput/FormInput'
import ListElement from 'components/UI/molecules/ListElement/ListElement'
import ListHeader from 'components/UI/organisms/LiatHeader/ListHeader'
import TodoService from 'core/services/Todo/TodoService'
import { TodoType } from 'types/routeTyes'

function Home() {
  const [todos, setTodos] = useState<TodoType[]>([])

  const deleteTodo = (id: number | string) => {
    setTodos(todos.filter((item: TodoType) => item._id !== id))
  }

  const addTodo = async (value: string) => {
    if (value.trim() === '') return false
    const response = TodoService.AddTodo(value, '6414fd9a7478345baa109fc2')
    const { createdTodo } = await response

    setTodos([...todos, createdTodo])

    return true
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((item: TodoType) => {
        if (item._id === id) {
          TodoService.ToggleTodoStatus(id, !item.completed)
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  const getTodos = async (userId: string) => {
    const { findedTodos } = await TodoService.GetTodos(userId)
    setTodos(findedTodos)
  }

  useEffect(() => {
    getTodos('6414fd9a7478345baa109fc2')
  }, [])

  return (
    <div className="home-page">
      <div className="container">
        <Link to="/login" className="logout-btn">
          <Button size="medium" label={t('auth.logout')} />
        </Link>
        <img src={BrandLogo} alt="brand logo" className="brand-logo" />
        <div className="form-input-wrapper">
          <FormInput addFunc={addTodo} />
        </div>
        <ListHeader
          completedCount={todos.filter((item: TodoType) => item.completed).length}
          totalCount={todos.length}
        />
        {todos.length === 0 && <EmptyPage />}
        {todos.length > 0 && (
          <ul className="todo-list">
            {todos.map((todo: TodoType) => (
              <li key={todo._id}>
                <ListElement
                  checked={todo.completed}
                  text={todo.title}
                  deleteFunc={deleteTodo}
                  id={todo._id}
                  changeFunc={toggleTodo}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
