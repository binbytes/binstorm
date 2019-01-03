'use strict'

module.exports = {
  alignItem: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    baseline: 'baseline',
    stretch: 'stretch'
  },
  alignContent: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    around: 'space-around',
    between: 'space-between',
    stretch: 'stretch'
  },
  alignSelf: {
    auto: 'auto',
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    stretch: 'stretch'
  },
  justifyContent: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    around: 'space-around',
    between: 'space-between',
    evenly: 'space-evenly'
  },
  flexDirection: {
    row: 'row',
    col: 'column',
    'row-reverse': 'row-reverse',
    'col-reverse': 'column-reverse'
  },
  flexWrap: {
    'no-wrap': 'nowrap',
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse'
  },
  flexGrow: {
    grow: 1,
    'no-grow': 0
  },
  flexShrink: {
    shrink: 1,
    'no-shrink': 0
  },
  borderStyle: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted'
  },
  modules: {
    alignItem: {
      prefix: 'items',
      propertyName: 'alignItems'
    },
    alignContent: {
      prefix: 'content',
      propertyName: 'alignContent'
    },
    alignSelf: {
      prefix: 'self',
      propertyName: 'alignSelf'
    },
    justifyContent: {
      prefix: 'justify',
      propertyName: 'justifyContent'
    },
    flexDirection: {
      prefix: 'flex',
      propertyName: 'flexDirection'
    },
    flexWrap: {
      prefix: 'flex',
      propertyName: 'flexWrap'
    },
    flexGrow: {
      prefix: 'flex',
      propertyName: 'flexGrow'
    },
    flexShrink: {
      prefix: 'flex',
      propertyName: 'flexShrink'
    },
    borderStyle: {
      prefix: 'border',
      propertyName: 'borderStyle'
    }
  }
}
