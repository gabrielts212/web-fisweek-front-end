import ImgFis from '../../assets/images/programming/painel-fis.png'
import { Avatar } from '../avatar/Avatar'

import './PanelFis.css'

export function PanelFis() {
  return (
    <div className="panelFis">
      <section className="Dates">
        <div className="Date">1º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <section className="Speakers">
        <p>Os desafios de implementar políticas públicas de saúde durante uma pandemia</p>
        <div className="groupPanel">
          <img className="imgFis" src={ImgFis} />
          
          <div className="panelRectangle">
            <div className="avatarGroup">
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kw7-4EnjzA97Ddbf6jfViZ3FZc7nsSKdMw&usqp=CAU"/>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kw7-4EnjzA97Ddbf6jfViZ3FZc7nsSKdMw&usqp=CAU"/>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kw7-4EnjzA97Ddbf6jfViZ3FZc7nsSKdMw&usqp=CAU"/>
              <Avatar src="https://github.com/gustavoguanabara.png"/>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kw7-4EnjzA97Ddbf6jfViZ3FZc7nsSKdMw&usqp=CAU"/>
            </div>

            <div className="speakerGroup">
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Adalberto Campos Fernandes</div>
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
              <div className="speakerName">Nome Sobrenome</div>
            </div>

            <div className="Moderator">Moderador</div>
          </div>
        </div>
      </section>
    </div>
  )
}


