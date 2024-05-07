interface FooterLinkProps {
  text: string,
  url: string
}
export default function FooterLink({ text, url }: FooterLinkProps) {
  return (
    <a href={url}>
      <div>{text}</div>
    </a>
  )
}
