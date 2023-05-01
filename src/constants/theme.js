export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
  // spacing: 4, // var01 простой => padding: ${props => props.theme.spacing * 2}px;
  spacing: value => `${value * 4}px`,
});
