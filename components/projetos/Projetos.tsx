import Image from "next/image";

export default function Projetos(){
  return(
    <section id="projetos"> 
      <h2 className="text-center font-bold text-5xl	mt-2 mb-10">Projetos</h2>
      <div className="flex justify-center  items-center flex-wrap">
        <div className="w-[300px]">
          <Image src="/images/notes-services.svg" width={250} height={250} alt="" />
          <h3>Site 01</h3>
          <span>icon</span>
          <span>icon</span>
          <span>icon</span>
        </div>
        <div className="w-[300px]">
          <Image src="/images/notes-services.svg" width={250} height={250} alt="" />
          <h3>Site 01</h3>
          <span>icon</span>
          <span>icon</span>
          <span>icon</span>
        </div>
        <div className="w-[300px]">
          <Image src="/images/notes-services.svg" width={250} height={250} alt="" />
          <h3>Site 01</h3>
          <span>icon</span>
          <span>icon</span>
          <span>icon</span>
        </div>
      </div>
    </section>
  )
}