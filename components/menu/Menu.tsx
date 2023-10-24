import Image from "next/image";

export default function Menu(){
  return(
    <header>
      <nav className="main-menu flex justify-between items-center text-white px-[35px] bg-purple02 shadow-lg shadow-purple01/40">
        <a href="#hero" >
          <Image src="/favicon.svg" width={55} height={55}  alt="logo Vinicius José" />
        </a>
        <ul className="menu flex gap-3">
          <li>
            <a href="#servicos">serviços</a>
          </li>
          <li>
            <a href="#projetos">projetos</a>
          </li>
          <li>
            <a href="#sobre">sobre min</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}