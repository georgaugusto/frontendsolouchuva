import React from 'react';
import { Link } from 'react-router-dom';

import { DiseaseData } from './styles';

interface AlertBoxProps {
  title: string;
  description: string;
  link: string;
  color: 'low' | 'danger' | 'warning';
}

function AlertBox({ color, title, description, link }: AlertBoxProps) {
  return (
    <DiseaseData type={color}>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
        {link && (
          <span>
            <Link to={link}>Ver Mais</Link>
          </span>
        )}
      </div>
    </DiseaseData>
  );
}

export default AlertBox;
