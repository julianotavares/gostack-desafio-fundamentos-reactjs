import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface LinkProps {
  to: string;
  locationofthepage: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;
  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export const MenuSelected = styled(Link)<LinkProps>`
  opacity: ${props => (props.locationofthepage === props.to ? '1' : '0.6')};
  border-bottom: ${props =>
    props.locationofthepage === props.to ? '2px solid #FF872C' : '0px'};
  padding-bottom: 10px;
  transition: opacity 0.2s;
  &:hover {
    border-bottom: 2px solid #ff872c;
    opacity: 1;
  }
`;
