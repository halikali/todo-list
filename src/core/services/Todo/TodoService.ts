import api from 'core/Api'

class TodoService {
  static async GetTodos(userId: string) {
    const response = (await api.post('/todo/get-todos/', { userId })).data
    return response
  }

  static async AddTodo(title: string, userId: string) {
    const response = (await api.post('/todo/create-todo/', { title, userId, completed: false })).data
    return response
  }

  static async ToggleTodoStatus(id: string, completed: boolean) {
    const response = (await api.post('/todo/update-todo/', { id, completed })).data
    return response
  }
}

export default TodoService
