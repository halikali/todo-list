import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { getCookie, removeCookie } from 'typescript-cookie'
import { useTranslation } from 'react-i18next'

import Button from 'components/UI/atoms/Button/Button'
import { BrandLogo } from 'assets'
import EmptyPage from 'components/UI/molecules/EmptyPage/EmptyPage'
import FormInput from 'components/UI/molecules/FormInput/FormInput'
import ListElement from 'components/UI/molecules/ListElement/ListElement'
import ListHeader from 'components/UI/organisms/LiatHeader/ListHeader'
import TodoService from 'core/services/Todo/TodoService'
import { TodoType } from 'types/routeTyes'

function Home() {
  const { t, i18n } = useTranslation()
  const [todos, setTodos] = useState<TodoType[]>([])
  const userId: any = useRef('')

  const deleteTodo = (id: number | string) => {
    setTodos(todos.filter((item: TodoType) => item._id !== id))
  }

  const addTodo = async (value: string) => {
    if (value.trim() === '') return false
    const response = TodoService.AddTodo(value, userId.current)
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

  const getTodos = async () => {
    const { findedTodos } = await TodoService.GetTodos(userId.current)
    setTodos(findedTodos)
  }

  const changeLang = (lang: 'tr' | 'en') => {
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    userId.current = getCookie('uid')
    getTodos()
  }, [])

  return (
    <div className="home-page">
      <div className="container">
        <div className="button-wrapper">
          <Link to="/login" className="logout-btn">
            <Button
              size="medium"
              label={t('auth.logout')}
              onClick={() => {
                removeCookie('uid')
                removeCookie('token')
              }}
            />
          </Link>
          <div className="lang-changer">
            <Button size="small" label="TR" onClick={() => changeLang('tr')} />
            <Button size="small" label="EN" onClick={() => changeLang('en')} />
          </div>
        </div>
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
