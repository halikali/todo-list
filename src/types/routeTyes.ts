type RouteType = {
  path: string
  component: any
  name: string
}

export type TodoType = {
  _id: string
  title: string
  userId: string
  completed: boolean
  createdAt: Date
  __v: 0
  completedAt: Date | null
}

export type RoutesType = RouteType[]
