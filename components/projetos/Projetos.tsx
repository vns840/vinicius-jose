import Image from "next/image";

export default function Projetos(){
  return(
    <section className="max-md:h-auto" id="projetos"> 
      <h2 className="text-center font-bold text-5xl	mt-2 mb-10 text-purple01 capitalize">Projetos</h2>
      <div className="flex justify-center text-center  items-center gap-4 flex-wrap max-md:my-10">
        <div className="bg-purple02 p-3 rounded-md flex flex-col justify-center items-center text-white gap-3">
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-md" src="/images/acelerapedidos.com.br.png" width={300} height={300} alt="site acelera pedidos" />
          </a>
          <p>Site: Acelera Pedidos</p>
          <span>desenvolvido usando a plataforma Wordpress</span>
          {/* <span className="">
            <Image src="/logos/logo-internet.svg" width={40} height={40} alt="" />
          </span> */}
        </div>
        
      </div>
    </section>
  )
}