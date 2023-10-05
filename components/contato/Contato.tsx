import Image from "next/image";

export default function Contato(){
  return(
    <section id="contato">
      <h2 className="text-center font-bold text-5xl mb-16">contato</h2>
      <div className="flex justify-center items-center gap-16">
        <div>
          <Image src="/images/contact.svg" width={500} height={500} alt="" />
        </div>
        <div>
          <h3>Me encontre por aqui</h3>
          <ul>
            <li className="flex justify-start items-center">
              <Image src="/logos/logo-whatsapp.svg" width={40} height={40} alt="" />
              <a href="">whatsApp</a>
            </li>
            <li className="flex justify-start items-center">
              <Image src="logos/logo-telegram.svg" width={40} height={40} alt="" />
              <a href="">telegram</a>
            </li>
            <li className="flex justify-start items-center">
              <Image  src="logos/logo-linkedin.svg" width={40} height={340} alt="" />
              <a href="">linkedin</a>
            </li>
            <li className="flex justify-start items-center">
              <Image src="logos/logo-github.svg" width={40} height={40} alt="" />
              <a href="">github</a>
            </li>
            <li className="flex justify-start items-center">
              <Image src="logos/logo-codepen.svg" width={40} height={40} alt="" />
              <a href="">codepen</a>
            </li>
            <li className="flex justify-start items-center">
              <Image src="logos/logo-youtube.svg" width={40} height={40} alt="" />
              <a href="">youtube</a>
            </li>
            <li className="flex justify-start items-center">
              <Image src="logos/logo-dribbble.svg" width={40} height={40} alt="" />
              <a href="">dribble</a>
            </li>
            <li className="flex justify-start items-center">
              <Image src="logos/logo-email.svg" width={40} height={40} alt="" />
              <a href="">email</a>
            </li>
            <li className="flex justify-start items-center">
              <Image src="logos/logo-document.svg" width={40} height={40} alt="" />
              <a href="">curriculo</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}