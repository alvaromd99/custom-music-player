interface TitleProps {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <h1 className="text-border mb-4 font-robo-mono-var text-8xl font-bold uppercase tracking-widest">
        {title}
      </h1>
      <h2 className="text-3xl font-bold uppercase text-white">
        {subtitle}
      </h2>
    </>)
}
