import Hero from "@/components/Hero/Hero";
import Contato from "@/components/contato/Contato";
import Footer from "@/components/footer/Footer";
import Menu from "@/components/menu/Menu";
import Projetos from "@/components/projetos/Projetos";
import Servicos from "@/components/servicos/Servicos";
import SobreMIn from "@/components/sobreMin/SobreMIn";

export default function Home() {
  return (
   <>
   <Menu />
    <Hero />
    <Servicos />
    <Projetos />
    <SobreMIn />
    <Contato />
    <Footer />
   </>
  )
}
