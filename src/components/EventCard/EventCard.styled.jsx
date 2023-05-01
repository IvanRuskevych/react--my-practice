import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: ${props => props.theme.spacing(2)};
  border-radius: 4px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing * 2}px;
  color: ${props => props.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: ${props => props.theme.colors.secondaryText};
  }
`;

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: ${props => props.theme.spacing}px
    ${props => props.theme.spacing * 2}px;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};

  background-color: ${setBgColor};
`;

// var01
// background-color: ${props => {
//     switch (props.eventType) {
//       case 'free':
//         return 'var(--color-green)';
//       case 'paid':
//         return 'var(--color-blue)';
//       case 'vip':
//         return 'var(--color-red)';
//       default:
//         return '#fff';
//     }
//   }};

// var02--function
// function setBgColor(props) {
//   switch (props.eventType) {
//     case 'free':
//       return 'var(--color-green)';
//     case 'paid':
//       return 'var(--color-blue)';
//     case 'vip':
//       return 'var(--color-red)';
//     default:
//       return '#fff';
//   }
// }

// var03 function + props.theme
function setBgColor({ eventType, theme }) {
  switch (eventType) {
    case 'free':
      return theme.colors.green;
    case 'paid':
      return theme.colors.blue;
    case 'vip':
      return theme.colors.red;
    default:
      return theme.colors.white;
  }
}
