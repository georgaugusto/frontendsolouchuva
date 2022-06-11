/*eslint-disable no-new */
import { Loader } from '@googlemaps/js-api-loader';
import { useCallback, useContext, useEffect, useState } from 'react';
import AsyncSingleSelect from '../../components/AsyncSingleSelect';
import HeaderTitleContext from '../../contexts/headerTitle';

import ZeroPrototype from './ZeroPrototype';

import { Container, DetailedInformationHeader } from './styles';
import OpenWeather from './OpenWeather';

function Config() {
  const [isOnline, setisOnline] = useState<boolean>(false);

  const { setHeaderTitle } = useContext(HeaderTitleContext);

  const [selectedStation, setSelectedStation] = useState({
    value: '0',
    label: `Protótipo 0 - Larangeiras ${isOnline ? '' : '(Offline)'}`,
  });

  const optionsData = [
    {
      value: '0',
      label: `Protótipo 0 - Larangeiras ${isOnline ? '' : '(Offline)'}`,
    },
    { value: '1', label: 'Open Weather Map Api' },
  ];

  useEffect(() => {
    setHeaderTitle('Configuração');
  }, [setHeaderTitle]);

  const loader = new Loader({
    apiKey: 'AIzaSyDvPBmiq6B2HzI4HmJR9kUwXereruQYcIs',
    version: 'weekly',
    libraries: ['places'],
  });

  const mapOptions = {
    center: {
      lat: -22.67222,
      lng: -50.8642718,
    },
    zoom: 15,
    mapTypeId: 'hybrid',
  };

  const mapOptions1 = {
    center: {
      lat: -22.63807,
      lng: -50.407451,
    },
    zoom: 15,
    mapTypeId: 'hybrid',
  };

  const initMap = useCallback((): void => {
    loader
      .load()
      .then(google => {
        new google.maps.Map(
          document.getElementById('map') as HTMLElement,
          Number(selectedStation.value) === 0 ? mapOptions : mapOptions1,
        );
      })
      .catch(e => {
        console.log(e);
      });
  }, [loader, mapOptions]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <Container>
      <div>
        <DetailedInformationHeader>
          <h2>Estações Meteorológicas</h2>

          <div>
            <AsyncSingleSelect
              optionsData={optionsData}
              onChange={setSelectedStation}
              value={selectedStation}
            />
          </div>
        </DetailedInformationHeader>

        {Number(selectedStation.value) === 0 ? (
          <ZeroPrototype />
        ) : (
          <OpenWeather />
        )}
      </div>

      <div id="map" />
    </Container>
  );
}

export default Config;
