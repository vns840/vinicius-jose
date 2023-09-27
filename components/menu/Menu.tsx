export default function Menu(){
  return(
    <header>
      <nav className="main-menu flex justify-between items-center">
        <a href="#hero" >
          logo
        </a>
        <ul className="flex gap-2">
          <li>
            <a href="">serviços</a>
          </li>
          <li>
            <a href="">projetos</a>
          </li>
          <li>
            <a href="">sobre min</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}