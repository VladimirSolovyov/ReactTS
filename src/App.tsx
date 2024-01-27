import React from 'react'
import {
	BrowserRouter,
	Route, // <-- Whoopsies!
	Routes,
} from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import TodosPage from './pages/TodosPage'
import TestPage from './pages/TestPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './pages/UserItemPage'

function App() {
	return (
		<BrowserRouter>
			<div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
				<NavLink
					style={{ marginRight: 10, textDecoration: 'none' }}
					to='/users'
				>
					Пользователи
				</NavLink>
				<NavLink
					style={{ marginRight: 10, textDecoration: 'none' }}
					to='/todos'
				>
					Список дел
				</NavLink>
				<NavLink style={{ marginRight: 10, textDecoration: 'none' }} to='/test'>
					Эксперименты
				</NavLink>
			</div>
			<Routes>
				<Route path='/users' element={<UsersPage />} />
				<Route path='/todos' element={<TodosPage />} />
				<Route path='/test' element={<TestPage />} />
				<Route path='/users/:id' element={<UserItemPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

//https://www.youtube.com/watch?v=92qcfeWxtnY&ab_channel=UlbiTV 13:25
