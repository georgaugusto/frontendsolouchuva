/*eslint-disable no-nested-ternary */
import { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import Antracnose1Img from '../../assets/antracnose1.png';
import Antracnose2Img from '../../assets/antracnose2.png';
import AsyncSingleSelect from '../../components/AsyncSingleSelect';
import HeaderTitleContext from '../../contexts/headerTitle';

import { Diseases } from './CultData';

import {
  Container,
  CultHeader,
  CultBody,
  SidebarCultures,
  DiseaseListName,
  DescriptionCultures,
  NoDescription,
} from './styles';

function Cult() {
  const [selectedCult, setSelectedCult] = useState({
    value: '2',
    label: 'Soja',
  });
  const [selectedDisease, setSelectedDisease] = useState(1);
  const [diseasesCult, setDiseasesCult] = useState<any>();

  const { setHeaderTitle } = useContext(HeaderTitleContext);

  useEffect(() => {
    setHeaderTitle('Sol ou Chuva');
  }, [setHeaderTitle]);

  useEffect(() => {
    setHeaderTitle('Sol ou Chuva');
  }, [setHeaderTitle]);

  function getDiseaseList() {
    if (Number(selectedCult?.value) !== 2) {
      return <DiseaseListName>Doenças ainda não cadastradas</DiseaseListName>;
    }
    return Diseases.map(disease => {
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
    const memoizedCult = Diseases.find(
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
            value={selectedCult}
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
