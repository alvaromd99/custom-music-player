import FooterLink from "./FooterLink";
import LinksList from "./LinksList";
import NewsLetter from "./NewsLetter";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-3 border-y-2 border-solid border-white py-14">
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
        <div>
          <NewsLetter />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>2011 - 2024 © Monstercat, All Rights Reserved</p>
        <LinksList outline={false} column={false} dimensions={1.5} />
      </div>
    </footer >
  )
}
