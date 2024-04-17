interface NormalBtnProps {
	text: string
	bgColor: boolean
}

export default function NormalBtn({ text, bgColor }: NormalBtnProps) {
	return (
		<button
			className={`text-white px-12 py-3 outline outline-1 transition-all duration-300 hover:bg-white hover:text-black hover:outline-white ${
				bgColor
					? 'bg-green-400 outline-green-400'
					: 'bg-transparent outline-white'
			}`}
		>
			{text}
		</button>
	)
}
