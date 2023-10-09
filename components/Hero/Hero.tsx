import Image from "next/image";

export default function Hero(){
  return(
    <section className="flex items-center justify-center max-md:flex-col max-md:h-auto" id="hero"> 
     <div className="justify-start w-[50%]">
      <Image src="/images/programming-hero.svg" width={500} height={500} alt="" />
     </div>
     <div className="text-center justify-end">
      <h1 className="font-bold text-5xl	mt-2 text-purple01">Vinicius José</h1>
      <p className="font-light text-xl">Desenvolverdor Front end <span>{` < /> `}</span></p>
     </div>
    </section>
  )
}