import Image from "next/image";

export default function Servicos(){
  return(
    <section className="" id="servicos">
      <h2 className="text-center">Serviços</h2>
     <div className="flex items-center justify-center">
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