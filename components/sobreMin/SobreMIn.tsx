import Image from "next/image";

export default function SobreMIn(){
  return(
    <section id="sobre">
      <h2 className="text-center font-bold text-5xl	mt-2 mb-11">Sobre Min</h2>
      <div className="flex justify-center items-center gap-8">
        <div>
          <h3 className="font-light text-2xl mb-2">É um prazer ter voce aqui !!</h3>
          <p className="w-96 leading-8">Apaixonado por tecnologia desde sempre, desde de 2019 venho desempenhando a função de analista de suporte. Atualmente venho fazendo a transição para área de desenvolvimento Front-end atualmente estudando  e trabalhando muito HTML,  CSS,  Javascript e Reactjs.</p>
        </div>
        <div>
          <Image src="/images/about-sobre.svg" width={350} height={350} alt="" />
        </div>
      </div>
    </section>
  )
}