import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import List from '../components/List'
import UserItem from '../components/UserItem'
import { useNavigate } from 'react-router-dom'

const UsersPage: FC = () => {
	const [usersLst, setUsersLst] = useState<IUser[]>([])
	const navigate = useNavigate()
	useEffect(() => {
		fetchUsers()
	}, [])

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			)
			setUsersLst(response.data)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<List
			items={usersLst}
			renderItem={(user: IUser) => (
				<UserItem
					onClick={user => navigate(`/users/${user.id}`)}
					user={user}
					key={user.id}
				/>
			)}
		/>
	)
}

export default UsersPage
