module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    colors: {
      'white': 'white',
      'transparent': 'transparent',
      'overlay': 'rgb(22 29 40 / 80%)',
      'pink-100': 'rgb(192, 52, 117)',
      'pink-400': 'rgb(218 89 149)',
      'mirage-50': 'rgb(22 29 40)',
      'mirage-200': 'rgb(38 49 67)',
      'mirage-400': 'rgb(56 77 110)',
      'mirage-600': 'rgb(64 87 123)',
      'mirage-800': 'rgb(186 192 221)'
    },
    fontFamily: {
      sans: ['Kumbh Sans']
    },
    boxShadow: {
      glow: '0 0 40px 0px rgb(281 89 149 / 35%)'
    },
    extend: {
      backgroundImage: {
        warm: 'linear-gradient(135deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 63%, rgba(252,176,69,1) 100%)'
      }
    },
  },
  plugins: [],
}
