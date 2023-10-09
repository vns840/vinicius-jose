import Image from "next/image";

export default function Servicos(){
  return(
    <section className="bg-purple01 text-white" id="servicos">
      <h2 className="text-center font-bold text-5xl	mt-2">Serviços</h2>
     <div className="flex items-center justify-center max-md:flex-col max-md:p-5">
     <div className="text-left justify-start">
        <h3>serviços oferecidos</h3>
        <ul>
          <li>web site</li>
          <li>landing page</li>
          <li>email marketing</li>
          <li>blog - wordpress</li>
          <li>manutenção de site</li>
        </ul>
      </div>
      <div className="justify-end">
        <Image src="/images/notes-services.svg" width={500} height={500} alt="" />
      </div>
     </div>
    </section>
  )
}