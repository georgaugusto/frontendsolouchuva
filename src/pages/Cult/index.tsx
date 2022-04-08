/*eslint-disable no-nested-ternary */
import { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import Antracnose1Img from '../../assets/antracnose1.png';
import Antracnose2Img from '../../assets/antracnose2.png';
import AsyncSingleSelect from '../../components/AsyncSingleSelect';
import { SearchInput } from '../../components/SearchInput';
import HeaderTitleContext from '../../contexts/headerTitle';

import {
  Container,
  CultHeader,
  CultBody,
  SidebarCultures,
  DiseaseListName,
  DescriptionCultures,
  NoDescription,
  NoHave,
} from './styles';

function Cult() {
  const [selectedCult, setSelectedCult] = useState({
    value: '',
    label: '',
  });
  const [selectedDisease, setSelectedDisease] = useState(0);
  const [diseasesCult, setDiseasesCult] = useState<any>();

  const { setHeaderTitle } = useContext(HeaderTitleContext);

  const diseases = [
    {
      id: 1,
      cult: 2,
      name: 'Antracnose',
      fullName: 'Antracnose (Colletotrichum truncatum)',
      symptoms:
        'Pode causar morte de plântulas e manchas negras nas nervuras das folhas, hastes e vagens. Pode haver queda total das vagens ou deterioração das sementes quando há atraso na colheita. As vagens infectadas nos estádios R3-R4 adquirem coloração castanho-escura a negra e ficam retorcidas; nas vagens em granação, as lesões iniciam-se por estrias de anasarca e evoluem para manchas negras. As partes infectadas geralmente apresentam várias pontuações negras que são as frutificações do fungo (acérvulos).',
      developmentConditions:
        'A antracnose é uma doença que afeta a fase inicial de formação das vagens e ocorre com maior frequência na região dos Cerrados, por causa da elevada precipitação e das altas temperaturas. Em anos chuvosos, pode causar perda total da produção, mas, com maior frequência, causa redução do número de vagens, induzindo a planta à retenção foliar e à haste verde. Uso de sementes infectadas e deficiências nutricionais, principalmente de potássio, também contribuem para maior ocorrência da doença. Sementes oriundas de lavouras que sofreram atraso de colheita, por causa de chuvas, podem apresentar índices mais elevados de infecção.',
      control:
        'Recomenda-se o uso de semente sadia, tratamento de semente, rotação de culturas, espaçamento entre fileiras e estande que permitam bom arejamento da lavoura e manejo adequado do solo, principalmente com relação à adubação potássica.',
      img: ['../../assets/antracnose1.png', '../../assets/antracnose2.png'],
    },
    { id: 2, cult: 2, name: 'Cancro da haste' },
    {
      id: 3,
      cult: 2,
      name: 'Crestamento foliar de Cercospora e mancha púrpura',
    },
    { id: 4, cult: 2, name: 'Ferrugem' },
    { id: 5, cult: 2, name: 'Mancha alvo e podridão radicular de Corynespora' },
    { id: 6, cult: 2, name: 'Mancha foliar de Ascochyta' },
    { id: 7, cult: 2, name: 'Mancha foliar de Myrothecium' },
    { id: 8, cult: 2, name: 'Mancha olho-de-rã' },
    { id: 9, cult: 2, name: 'Mancha parda' },
    { id: 10, cult: 2, name: 'Mela ou requeima' },
    { id: 11, cult: 2, name: 'Míldio' },
    { id: 12, cult: 2, name: 'Tombamento e morte em reboleira de Rhizoctonia' },
    { id: 13, cult: 2, name: 'Tombamento e murcha de Sclerotium' },
    { id: 14, cult: 2, name: 'Oídio' },
    { id: 15, cult: 2, name: 'Mofo branco' },
    { id: 16, cult: 2, name: 'Podridão de carvão da raiz' },
    { id: 17, cult: 2, name: 'Podridão parda da haste' },
    { id: 18, cult: 2, name: 'Podridão radicular de Rosellinia' },
    { id: 19, cult: 2, name: 'Seca da haste e da vagem' },
    { id: 20, cult: 2, name: 'Podridão radicular de Phytophthora' },
    { id: 21, cult: 2, name: 'Podridão vermelha da raiz' },
    { id: 22, cult: 2, name: 'Crestamento bacteriano' },
    { id: 23, cult: 2, name: 'Fogo selvagem' },
    { id: 24, cult: 2, name: 'Pústula bacteriana' },
    { id: 25, cult: 2, name: 'Mancha bacteriana marrom' },
    { id: 26, cult: 2, name: 'Mosaico cálico' },
    { id: 27, cult: 2, name: 'Mosqueado do feijão' },
    { id: 28, cult: 2, name: 'Mosaico comum da soja' },
    { id: 29, cult: 2, name: 'Necrose da haste' },
    { id: 30, cult: 2, name: 'Queima do broto' },
    { id: 31, cult: 2, name: 'Nematoide de cisto' },
    { id: 32, cult: 2, name: 'Nematoides de galhas' },
    { id: 33, cult: 2, name: 'Nematoide das lesões' },
    { id: 34, cult: 2, name: 'Nematoide reniforme' },
    { id: 35, cult: 3, name: 'Sugar Cane' },
    { id: 36, cult: 1, name: 'Corn' },
  ];

  useEffect(() => {
    setHeaderTitle('Sol ou Chuva');
  }, [setHeaderTitle]);

  function getDiseaseList() {
    return diseases.map(disease => {
      if (Number(selectedCult?.value) === disease.cult) {
        return (
          <DiseaseListName
            key={disease.id}
            onClick={() => setSelectedDisease(disease.id)}
            aria-hidden="true"
          >
            {disease.name}
          </DiseaseListName>
        );
      }
      return <Fragment key={disease.id}> </Fragment>;
    });
  }

  const findDiseasesCult = useCallback(() => {
    const memoizedCult = diseases.find(
      disease => selectedDisease === disease.id,
    );
    setDiseasesCult(memoizedCult);
  }, [selectedDisease]);

  useEffect(() => {
    findDiseasesCult();
  }, [findDiseasesCult]);

  const CutureData = [
    { value: '1', label: 'Milho' },
    { value: '2', label: 'Soja' },
    { value: '3', label: 'Cana-de-açúcar' },
  ];

  return (
    <Container>
      <CultHeader>
        <strong>Manual de identificação de doenças</strong>
        <p>
          O primeiro passo para se realizar um adequado programa de controle de
          doenças em plantas é a correta identificação das mesmas.
        </p>
      </CultHeader>

      <CultBody>
        <SidebarCultures>
          <AsyncSingleSelect
            optionsData={CutureData}
            onChange={setSelectedCult}
          />

          <hr />

          <div>{getDiseaseList()}</div>
        </SidebarCultures>

        <DescriptionCultures>
          {/*<SearchInput
            name="searchInput"
            type="text"
            placeholder="Pesquise por aqui"
            autoComplete="off"
            //error={errors.barcode || errors.vaccineName}
            icon={HiOutlineSearch}
            onClickIcon={() => ({})}
            //onKeyPress={handleKeyboardEventSearch}
            //{...register('barcode')}
          /> */}
          <div />

          {diseasesCult?.fullName ? (
            <>
              <h3>{diseasesCult?.fullName}</h3>
              <p>
                <span>Sintomas: </span>
                {diseasesCult?.symptoms}
              </p>
              <p>
                <span>Condições de desenvolvimento: </span>
                {diseasesCult?.developmentConditions}
              </p>
              <p>
                <span>Controle: </span>
                {diseasesCult?.control}
              </p>

              <div>
                {diseasesCult?.id === 1 ? (
                  <img src={Antracnose1Img} alt="" />
                ) : (
                  <> </>
                )}
                {diseasesCult?.id === 1 ? (
                  <img src={Antracnose2Img} alt="" />
                ) : (
                  <> </>
                )}
              </div>
            </>
          ) : (
            <NoDescription>Descrição ainda não cadastrada</NoDescription>
          )}
        </DescriptionCultures>
      </CultBody>
    </Container>
  );
}

export default Cult;
