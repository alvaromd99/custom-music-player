interface FooterLinkProps {
  text: string,
  url: string
}
export default function FooterLink({ text, url }: FooterLinkProps) {
  return (
    <a href={url} className="uppercase font-bold">
      <div>{text}</div>
    </a>
  )
}
