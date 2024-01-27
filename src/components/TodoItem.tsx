import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps extends React.PropsWithChildren {
	todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div>
			{todo.id}. {todo.title} <input checked={todo.completed} type='checkbox' />
		</div>
	)
}

export default TodoItem
