import { IconType } from 'react-icons';
import { FiChevronDown, FiChevronUp, FiMinus } from 'react-icons/fi';

import {
  Container,
  Header,
  Content,
  HeaderContent,
  BodyContent,
  FootContent,
} from './styles';

interface IWeatherStationData {
  avg: number | string;
  max?: number | string;
  dtMax?: number | string;
  min?: number | string;
  dtMin?: number | string;
  name: string;
  unity: string;
  icon: IconType;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Box({
  avg,
  max,
  dtMax,
  min,
  dtMin,
  name,
  unity,
  icon: Icon,
  onClick,
}: IWeatherStationData) {
  return (
    <Container onClick={onClick}>
      <Header>
        <span>{name}</span>
        {Icon && <Icon />}
      </Header>
      <Content>
        {max !== undefined && (
          <div>
            <HeaderContent>
              <div>
                <span>Max</span>
                <FiChevronUp />
              </div>
            </HeaderContent>
            <BodyContent>
              <span>
                {max}
                {typeof max === 'string' ? '' : unity}
              </span>
            </BodyContent>
            <FootContent>
              <p>{dtMax}</p>
            </FootContent>
          </div>
        )}
        {avg !== undefined && (
          <div>
            {(max || min) && (
              <HeaderContent>
                <div>
                  <span>Média</span>
                  <FiMinus />
                </div>
              </HeaderContent>
            )}
            <BodyContent>
              <span>
                {avg}
                {typeof avg === 'string' ? '' : unity}
              </span>
            </BodyContent>
          </div>
        )}
        {min !== undefined && (
          <div>
            <HeaderContent>
              <div>
                <span>Min</span>
                <FiChevronDown />
              </div>
            </HeaderContent>
            <BodyContent>
              <span>
                {min}
                {typeof min === 'string' ? '' : unity}
              </span>
            </BodyContent>
            <FootContent>
              <p>{dtMin}</p>
            </FootContent>
          </div>
        )}
      </Content>
    </Container>
  );
}

export default Box;
