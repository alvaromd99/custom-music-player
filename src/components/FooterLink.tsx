interface FooterLinkProps {
  text: string,
  url: string
}
export default function FooterLink({ text, url }: FooterLinkProps) {
  return (
    <a href={url} className="text-lg xl:text-2xl font-bold uppercase">
      <div>{text}</div>
    </a>
  )
}
