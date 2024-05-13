interface TitleProps {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <h1 className="text-border mb-2 font-robo-mono-var text-4xl lg:text-5xl font-bold uppercase xl:text-8xl">
        {title}
      </h1>
      <h2 className="text-lg font-bold uppercase text-white xl:text-2xl">
        {subtitle}
      </h2>
    </>)
}
