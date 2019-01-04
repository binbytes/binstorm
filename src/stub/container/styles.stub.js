import { StyleSheet } from 'react-native'

const predefineStyle = {
  "absolute": { 
    "position": "absolute" 
  },
  "relative": { 
    "position": "relative" 
  },
  "pin-t": { 
    "top": 0 
  },
  "pin-b": { 
    "bottom": 0 
  },
  "pin-l": { 
    "left": 0 
  },
  "pin-r": { 
    "right": 0 
  },
  "pin-x": { 
    "left": 0, 
    "right": 0 
  },
  "pin-y": { 
    "top": 0, 
    "bottom": 0 
  },
  "pin": { 
    "top": 0, 
    "bottom": 0, 
    "left": 0, 
    "right": 0 
  },
  "italic": { 
    "fontStyle": "italic" 
  },
  "roman": { 
    "fontStyle": "normal" 
  },
  "uppercase": { 
    "textTransform": "uppercase" 
  },
  "lowercase": { 
    "textTransform": "lowercase" 
  },
  "capitalize": {
     "textTransform": "capitalize" 
  },
  "normal-case": { 
    "textTransform": "none" 
  },
  "underline": {
     "textDecorationLine": "underline" 
  },
  "line-through": { 
    "textDecorationLine": "line-through" 
  },
  "no-underline": { 
    "textDecorationLine": "none" 
  },
  "text-left": {
     "textAlign": "left" 
  },
  "text-center": { 
    "textAlign": "center" 
  },
  "text-right": {
     "textAlign": "right" 
  },
  "text-justify": { 
    "textAlign": "justify" 
  },
  "shadow": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 1
    },
    "shadowOpacity": 0.2,
    "shadowRadius": 1.41,
    "elevation": 2
  },
  "shadow-md": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowOpacity": 0.23,
    "shadowRadius": 2.62,
    "elevation": 4
  },
  "shadow-lg": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowOpacity": 0.27,
    "shadowRadius": 4.65,
    "elevation": 6
  },
  "shadow-none": {
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowOpacity": 0,
    "shadowRadius": 0,
    "elevation": 0
  }
}

const generatedStyle = __style__

const obj = Object.assign(generatedStyle, predefineStyle)

export const styles = StyleSheet.create(obj)

export function apply(style) {
  let result = {}
  const _styles = style.split(' ')
  _styles.forEach(_style => {
    result = Object.assign(result, styles[_style])
  })
  return result
}
