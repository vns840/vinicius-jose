export default function Menu(){
  return(
    <header>
      <nav className="main-menu flex justify-between items-center text-white px-[35px] bg-purple02 shadow-lg shadow-purple01/40">
        <a href="#hero" >
          logo
        </a>
        <ul className="flex gap-2">
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