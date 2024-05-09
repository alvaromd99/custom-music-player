interface TitleProps {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <h1 className="text-border mb-2 font-robo-mono-var text-4xl font-bold uppercase">
        {title}
      </h1>
      <h2 className="text-lg font-bold uppercase text-white">
        {subtitle}
      </h2>
    </>)
}
