import { exec as _exec } from 'child_process'

export default function exec(params) {
  _exec(params, error => {
    if (error !== null) {
      console.log('exec error: ' + error)
    }
  })
}
