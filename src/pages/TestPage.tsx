import React, { FC } from 'react'
import EventsExample from '../components/EventsExample'
import Card, { CardVarian } from '../components/Card'

const TestPage: FC = () => {
	return (
		<div>
			<EventsExample />
			<Card
				width={'200px'}
				height={'200px'}
				variant={CardVarian.outline}
				onClick={num => console.log(num)}
			>
				<button>Моя кнопка</button>
			</Card>
		</div>
	)
}

export default TestPage
