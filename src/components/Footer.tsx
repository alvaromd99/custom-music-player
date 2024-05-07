import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="grid-rows-3 border-y-2 border-solid border-white py-14">
      <div>
        <FooterLink text="About monstercat" url="" />
        <FooterLink text="Contact us" url="" />
        <FooterLink text="Carrers" url="" />
        <FooterLink text="News" url="" />
        <FooterLink text="Press" url="" />
      </div>
      <div>
        <FooterLink text="Terms of service" url="" />
        <FooterLink text="Privacy policy" url="" />
      </div>
      <div></div>
    </footer>
  )
}
