import { Constants } from './constants.service.js'

export class Splitter {
  static regex = new RegExp(',', 'g')

  static splitRawInput (input) {
    let entry = {}
    // Check Anrede of Input
    let anrede = Constants.getSalutations()
    for (const [key, value] of anrede.entries()) {
      if (input.toLowerCase().indexOf(key.toLowerCase()) >= 0) {
        entry = {
          'anrede': value.anrede,
          'geschlecht': value.geschlecht,
          'briefanrede': value.brief
        }
        input = input.replace(key, '')
      }
    }
    if (Object.keys(entry).length === 0 && entry.constructor === Object) {
      entry = {
        'anrede': Constants.getDefaultSalutation()
      }
    }

    let inputArray = input.split(' ')
    inputArray = inputArray.filter(n => { return n != '' })
    // Check Title of Input
    if (Constants.getTitles().some(v => { return input.indexOf(v) >= 0 })) {
      let title = ''
      for (let i = 0; i < inputArray.length; i++) {
        if (Constants.getTitles().some(v => { return inputArray[i].toLowerCase().indexOf(v.toLowerCase()) >= 0 }) || inputArray[i].toLowerCase().indexOf('.') !== -1) {
          title += inputArray[i] + ' '
          let index = inputArray.indexOf(inputArray[i])
          if (index > -1) {
            inputArray.splice(index, 1)
            i -= 1
          }
        }
      }
      entry['titel'] = title
    }

    // Check First and Last name
    if (inputArray.some(v => v.indexOf(',') !== -1)) {
      entry['vorname'] = inputArray[inputArray.length - 1]
      let index = inputArray.indexOf(inputArray[inputArray.length - 1])
      if (index > -1) {
        inputArray.splice(index, 1)
      }
      let nachname = ''
      for (let i = 0; i < inputArray.length; i++) {
        let buf = inputArray[i].replace(',', '')
        nachname += buf + ' '
      }
      entry['nachname'] = nachname
    } else {
      entry['vorname'] = inputArray[0]
      let index = inputArray.indexOf(inputArray[0])
      if (index > -1) {
        inputArray.splice(index, 1)
      }
      entry['nachname'] = inputArray.join(' ')
    }
    return entry
  }
}
