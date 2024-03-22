import styled from 'styled-components';

interface CardProps {
  size: 'small' | 'medium' | 'large';
}

const Card = styled.div<CardProps>`
  background-color: lightblue;
  padding: 1px;
  margin-bottom: 10px;
  height: ${props => 
    props.size === 'large' ? '240px' :
    props.size === 'medium' ? '160px' :
    props.size === 'small' ? '16px' :
    'auto'
  };
`;
export default Card;
