import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container flexSB'>
          <div className='legal'>
            <p>
              2024 © Admin Dashboard <span>Todos os direitos reservados</span>
            </p>
          </div>
          <div className='links flexSB'>
            <li>Sobre Nós</li>
            <li>Ajuda</li>
            <li>Contato</li>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
