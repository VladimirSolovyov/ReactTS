import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

interface UserParams {
	id: string
}

const UserItemPage: FC = () => {
	const [userLst, setUserLst] = useState<IUser | null>(null)
	const params = useParams<any>() //UserParams - почему-то не проходит
	const history = useNavigate()

	useEffect(() => {
		fetchUser()
	}, [])

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>(
				'https://jsonplaceholder.typicode.com/users/' + params.id
			)
			setUserLst(response.data)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<div>
			<button
				onClick={() => {
					history('/users')
				}}
			>
				Back
			</button>
			<h1>Страница пользователя {userLst?.name}</h1>
			<div>{userLst?.email}</div>
			<div>
				{userLst?.address.city} {userLst?.address.street}{' '}
				{userLst?.address.zipcode}
			</div>
		</div>
	)
}

export default UserItemPage
