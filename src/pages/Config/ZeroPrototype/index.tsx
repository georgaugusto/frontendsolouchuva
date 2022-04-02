import { DetailedInformation } from './styles';

function ZeroPrototype() {
  return (
    <DetailedInformation>
      <h3>Informações Detalhadas</h3>
      <div>
        <strong>Microcontrolador:</strong>
        <div>
          <span>
            ESP8266 NodeMcu ESP-12 <span>(Amica)</span>
          </span>
        </div>
      </div>
      <div>
        <strong>Sensores: </strong>
        <div>
          <span>
            Sensor DHT22 <span>(Temperatura e umidade do ar)</span>
          </span>

          <span>
            Sensor BMP280 <span>(Temperatura, pressão e altitude)</span>
          </span>

          <span>
            Sensor UVM-30A <span>(Luz ultravioleta)</span>
          </span>

          <span>
            Sensor BH1750 <span>(Luminosidade)</span>
          </span>
          <span>Sensor de Umidade do Solo Capacitivo</span>
          <span>
            Sensor Hall US1881/U18
            <span> (Para montar o Pluviometro e o Anemômetro)</span>
          </span>
          <span>
            Sensor de dector de chuva
            <span> (Para montar o sensor de molhamento foliar)</span>
          </span>
        </div>
      </div>

      <div>
        <strong>Modulos:</strong>
        <div>
          <span>
            Pluviometro de bascula digital{' '}
            <span>
              (Sensor Hall US1881/U18 - Foi construido seguindo os passos do
              pessoal da <a href="https://pluvion.com.br">Pluvi.On</a> neste{' '}
              <a href="https://www.instructables.com/PluviOn-Pluvi%C3%B4metro-De-Baixo-Custo">
                link
              </a>
              )
            </span>
          </span>
          <span>
            Indicador de direção do vento <span>(Futuramente)</span>
          </span>
          <span>
            Anemometro{' '}
            <span>(Sensor Hall US1881/U18 - Foi adquirido pronto)</span>
          </span>
          <span> Painel solar</span>
          <span>Bateria 3.7v 1200mah</span>
          <span>
            Lipo-Po Rider v1.3{' '}
            <span>
              (Módulo gerenciador de carga de baterias lítio que permite o
              gerenciamento de energia produzida por meio de painéis solares)
            </span>
          </span>
        </div>
      </div>

      <div>
        <strong>Localização:</strong>
        <span>São José das Laranjeiras - SP</span>
      </div>

      <div>
        <strong>
          Para saber mais sobre o projeto, acesse
          <a href="https://github.com/georgaugusto/solouchuva-hardware">
            : GitHub
          </a>
        </strong>
      </div>
    </DetailedInformation>
  );
}

export default ZeroPrototype;
