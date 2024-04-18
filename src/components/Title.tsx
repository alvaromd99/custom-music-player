interface TitleProps {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <>
      <h1 className="text-border text-7xl font-bold mb-4 uppercase tracking-widest">
        {title}
      </h1>
      <h2 className="text-3xl font-bold uppercase text-white">
        {subtitle}
      </h2>
    </>)
}
