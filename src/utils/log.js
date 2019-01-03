import { DEBUG } from '../constants'

export default function log(msg) {
  if (DEBUG) {
    console.log(msg)
  }
}
