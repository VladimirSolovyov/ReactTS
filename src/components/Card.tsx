import React, { FC, useState } from 'react'

export enum CardVarian {
	outline = 'outline',
	primary = 'primary',
}

interface CardProps extends React.PropsWithChildren {
	width: string
	height: string
	variant: CardVarian
	onClick: (num: number) => void
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
	const [state, setState] = useState(0)

	return (
		<div
			style={{
				width,
				height,
				border: variant === CardVarian.outline ? '1px solid gray' : 'none',
				background: variant === CardVarian.primary ? 'lightgray' : '',
			}}
			onClick={() => onClick(state)}
		>
			{children}
		</div>
	)
}

export default Card
