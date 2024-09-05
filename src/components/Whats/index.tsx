import whats from '../../assets/whats.png'

import { Whats } from './style'


const WhatsAppLink = () => {
  const phoneNumber = '5544999875065'
  const message = 'Olá, gostaria de saber mais sobre...'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Whats>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img src={whats} alt="" />
      </a>
    </Whats>
  )
}

export default WhatsAppLink
