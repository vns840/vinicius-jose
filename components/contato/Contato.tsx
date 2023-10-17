import Image from "next/image";

export default function Contato(){
  return(
    <section className="max-md:h-auto" id="contato">
      <h2 className="text-center font-bold text-5xl mb-18 text-purple01 capitalize">contato</h2>
      <div className="flex justify-center items-center gap-16 max-md:flex-col max-md:p-5">
        <div>
          <Image src="/images/contact.svg" width={500} height={500} alt="" />
        </div>
        <div className=" max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <h3 className="text-purple01 text-2xl mb-2 font-medium">Me encontre por aqui</h3>
          <ul className="capitalize text-purple01">
            <li className="flex justify-start items-center mb-2">
              <Image src="/logos/icons-whatsapp.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="https://api.whatsapp.com/send?phone=5511977861210">whatsApp</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image src="logos/logo-telegram.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="https://t.me/Viny_vale">telegram</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image  src="logos/logo-linkedin.svg" width={40} height={340} alt="" />
              <a className="ml-3" target="_blank" href="https://www.linkedin.com/in/vinicius-jos%C3%A9/">linkedin</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image src="logos/logo-github.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="https://github.com/vns840">github</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image src="logos/logo-codepen.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="https://codepen.io/vns840">codepen</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image src="logos/logo-youtube.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="https://www.youtube.com/channel/UCJ59NyxXLePM8aKKdTKQmWA">youtube</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image src="logos/logo-dribbble.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="https://dribbble.com/ViniJose">dribble</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image src="logos/logo-email.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="">email</a>
            </li>
            <li className="flex justify-start items-center mb-2">
              <Image src="logos/logo-document.svg" width={40} height={40} alt="" />
              <a className="ml-3" target="_blank" href="https://drive.google.com/file/d/1fLboakwhMLFl8CGQfWpNtKyAXVqCzSNZ/view?usp=sharing">curriculo</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}