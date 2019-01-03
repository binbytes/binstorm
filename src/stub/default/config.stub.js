'use strict'

let colors = {
  'transparent': 'transparent',

  'black': '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  'grey': '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  'white': '#ffffff',

  'red-darkest': '#3b0d0c',
  'red-darker': '#621b18',
  'red-dark': '#cc1f1a',
  'red': '#e3342f',
  'red-light': '#ef5753',
  'red-lighter': '#f9acaa',
  'red-lightest': '#fcebea',

  'orange-darkest': '#462a16',
  'orange-darker': '#613b1f',
  'orange-dark': '#de751f',
  'orange': '#f6993f',
  'orange-light': '#faad63',
  'orange-lighter': '#fcd9b6',
  'orange-lightest': '#fff5eb',

  'yellow-darkest': '#453411',
  'yellow-darker': '#684f1d',
  'yellow-dark': '#f2d024',
  'yellow': '#ffed4a',
  'yellow-light': '#fff382',
  'yellow-lighter': '#fff9c2',
  'yellow-lightest': '#fcfbeb',

  'green-darkest': '#0f2f21',
  'green-darker': '#1a4731',
  'green-dark': '#1f9d55',
  'green': '#38c172',
  'green-light': '#51d88a',
  'green-lighter': '#a2f5bf',
  'green-lightest': '#e3fcec',

  'teal-darkest': '#0d3331',
  'teal-darker': '#20504f',
  'teal-dark': '#38a89d',
  'teal': '#4dc0b5',
  'teal-light': '#64d5ca',
  'teal-lighter': '#a0f0ed',
  'teal-lightest': '#e8fffe',

  'blue-darkest': '#12283a',
  'blue-darker': '#1c3d5a',
  'blue-dark': '#2779bd',
  'blue': '#3490dc',
  'blue-light': '#6cb2eb',
  'blue-lighter': '#bcdefa',
  'blue-lightest': '#eff8ff',

  'indigo-darkest': '#191e38',
  'indigo-darker': '#2f365f',
  'indigo-dark': '#5661b3',
  'indigo': '#6574cd',
  'indigo-light': '#7886d7',
  'indigo-lighter': '#b2b7ff',
  'indigo-lightest': '#e6e8ff',

  'purple-darkest': '#21183c',
  'purple-darker': '#382b5f',
  'purple-dark': '#794acf',
  'purple': '#9561e2',
  'purple-light': '#a779e9',
  'purple-lighter': '#d6bbfc',
  'purple-lightest': '#f3ebff',

  'pink-darkest': '#451225',
  'pink-darker': '#6f213f',
  'pink-dark': '#eb5286',
  'pink': '#f66d9b',
  'pink-light': '#fa7ea8',
  'pink-lighter': '#ffbbca',
  'pink-lightest': '#ffebef'
}

module.exports = {
  'colors': colors,
  'backgroundColors': colors,
  'borderColors': global.Object.assign({ 'default': colors['grey-light'] }, colors),
  'textSizes': {
    'xs': 12,
    'sm': 14,
    'base': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48
  },
  'fontWeights': {
    'hairline': '100',
    'thin': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900'
  },
  'leading': {
    'none': 16,
    'tight': 20,
    'normal': 24,
    'loose': 32
  },
  'tracking': {
    'tight': -0.8,
    'normal': 0,
    'wide': 0.8
  },
  'backgroundSizes': {
    'center': 'center',
    'contain': 'contain',
    'cover': 'cover',
    'repeat': 'repeat',
    'stretch': 'stretch'
  },
  'borderWidths': {
    'default': 1,
    '0': 0,
    '2': 2,
    '4': 4,
    '8': 8
  },
  'borderRadius': {
    'none': 0,
    'sm': 2,
    'default': 4,
    'lg': 8,
    'full': 300
  },
  'width': {
    'px': 1,
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '5': 20,
    '6': 24,
    '8': 32,
    '10': 40,
    '12': 48,
    '16': 64,
    '24': 96,
    '32': 128,
    '48': 192,
    '64': 256,
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%'
  },
  'height': {
    'px': 1,
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '5': 20,
    '6': 24,
    '8': 32,
    '10': 40,
    '12': 48,
    '16': 64,
    '24': 96,
    '32': 128,
    '48': 192,
    '64': 256,
    'full': '100%'
  },
  'minWidth': {
    '0': 0,
    'full': '100%'
  },
  'minHeight': {
    '0': 0,
    'full': '100%'
  },
  'maxWidth': {
    'xs': 320,
    'sm': 480,
    'md': 640,
    'lg': 800,
    'xl': 960,
    '2xl': 1120,
    '3xl': 1280,
    '4xl': 1440,
    '5xl': 1600,
    'full': '100%'
  },
  'maxHeight': {
    'full': '100%'
  },
  'padding': {
    'px': 1,
    '0': 0,
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '5': 20,
    '6': 24,
    '8': 32,
    '10': 40
  },
  'margin': {
    'px': 1,
    '0': 0,
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '5': 20,
    '6': 24,
    '8': 32,
    '10': 40
  },
  'zIndex': {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50
  },
  'opacity': {
    '0': 0,
    '25': 0.25,
    '50': 0.5,
    '75': 0.75,
    '100': 1
  },
  'flex': {
    '1': 1,
    '1/2': 0.5,
    '1/4': 0.25
  },
  'modules': {
    'colors': {
      'prefix': 'text',
      'propertyName': 'color'
    },
    'backgroundColors': {
      'prefix': 'bg',
      'propertyName': 'backgroundColor'
    },
    'borderColors': {
      'prefix': 'border',
      'propertyName': 'borderColor'
    },
    'textSizes': {
      'prefix': 'text',
      'propertyName': 'fontSize'
    },
    'fontWeights': {
      'prefix': 'font',
      'propertyName': 'fontWeight'
    },
    'leading': {
      'prefix': 'leading',
      'propertyName': 'lineHeight'
    },
    'tracking': {
      'prefix': 'tracking',
      'propertyName': 'letterSpacing'
    },
    'backgroundSizes': {
      'prefix': 'bg',
      'propertyName': 'resizeMode'
    },
    'borderWidths': {
      'prefix': 'border',
      'propertyName': 'borderWidth',
      'sides': {
        '-l': 'left',
        '-r': 'right',
        '-t': 'top',
        '-b': 'bottom',
        '-x': ['left', 'right'],
        '-y': ['top', 'bottom']
      }
    },
    'borderRadius': {
      'prefix': 'rounded',
      'propertyName': 'borderRadius',
      'sides': {
        '-t': ['top-left', 'top-right'],
        '-l': ['top-left', 'bottom-left'],
        '-r': ['top-right', 'bottom-right'],
        '-b': ['bottom-right', 'bottom-left'],
        '-tl': 'top-left',
        '-tr': 'top-right',
        '-bl': 'bottom-left',
        '-br': 'bottom-right'
      }
    },
    'width': {
      'prefix': 'w',
      'propertyName': 'width'
    },
    'height': {
      'prefix': 'h',
      'propertyName': 'height'
    },
    'minWidth': {
      'prefix': 'min-w',
      'propertyName': 'minWidth'
    },
    'minHeight': {
      'prefix': 'min-h',
      'propertyName': 'minHeight'
    },
    'maxWidth': {
      'prefix': 'max-w',
      'propertyName': 'maxWidth'
    },
    'maxHeight': {
      'prefix': 'max-h',
      'propertyName': 'maxHeight'
    },
    'padding': {
      'prefix': 'p',
      'propertyName': 'padding',
      'sides': {
        'l': 'left',
        'r': 'right',
        't': 'top',
        'b': 'bottom',
        'x': ['left', 'right'],
        'y': ['top', 'bottom']
      }
    },
    'margin': {
      'prefix': 'm',
      'propertyName': 'margin',
      'sides': {
        'l': 'left',
        'r': 'right',
        't': 'top',
        'b': 'bottom',
        'x': ['left', 'right'],
        'y': ['top', 'bottom']
      }
    },
    'zIndex': {
      'prefix': 'z',
      'propertyName': 'zIndex'
    },
    'opacity': {
      'prefix': 'opacity',
      'propertyName': 'opacity'
    },
    'flex': {
      'prefix': 'flex',
      'propertyName': 'flex'
    }
  }
}
