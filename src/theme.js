import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee'
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222'
});



export const navbackgroundColor = theme('mode', {
  light: '#241e3c',
  dark: '#242029'
})


export const containerbackgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#1d1c19'
})

export const navtextColor = theme('mode', {
  light: '#928f98',
  dark: '#7d7672'
})

export const containertextColor = theme('mode', {
  light: '#353a40',
  dark: '#b1a997'
})

export const switchValue = theme('mode', {
  light: false,
  dark: true
})