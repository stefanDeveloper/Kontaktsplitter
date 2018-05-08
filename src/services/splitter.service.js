import { Constants } from './constants.service.js'

export class Splitter {
  static regex = new RegExp(',', 'g')

  static splitRawInput (input) {
    let entry = {}
    // Check Anrede of Input
    let anrede = Constants.getAnrede()
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
        'anrede': Constants.getDefaultAnrede()
      }
    }

    // Check Title of Input

    console.log(input)
    console.log(entry)
    return entry
  }
}
