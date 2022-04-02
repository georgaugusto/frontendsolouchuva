import { DetailedInformation } from './styles';

function OpenWeather() {
  return (
    <DetailedInformation>
      <h3>Informações Detalhadas</h3>
      <div>
        <strong>Sobre:</strong>
        <div>
          <span>
            O OpenWeather é uma equipe de especialistas em TI e cientistas de
            dados que pratica ciência de dados meteorológicos profundos desde
            2014. Para cada ponto do globo, o OpenWeather fornece dados
            meteorológicos históricos, atuais e previstos por meio de APIs de
            velocidade da luz. Sede em Londres, Reino Unido.
          </span>
        </div>
      </div>

      <div>
        <strong>Localização:</strong>
        <span>Assis - SP</span>
      </div>

      <div>
        <strong>
          API de terceiros, para saber mais sobre, acesse
          <a href="https://openweathermap.org/api">: OpenWeather</a>
        </strong>
      </div>
    </DetailedInformation>
  );
}

export default OpenWeather;
