import { Constants } from './constants.service.js'

export class Splitter {
  static splitRawInput (input) {
    let entry = {}
    let defaultSalutation = false
    input = input.toLowerCase()
    // Check Anrede of Input
    // Check if the salutation map contains one of the input substrings
    if (Array.from(Constants.getSalutations().keys()).some(v => { return this.containsWord(input, v.toLowerCase()) })) {
      for (const [key, value] of Constants.getSalutations().entries()) {
        if (this.containsWord(input, key.toLowerCase()) && Object.keys(entry).length === 0 && entry.constructor === Object) {
          entry = {
            'anrede': value.anrede,
            'geschlecht': value.geschlecht,
            'briefanrede': value.brief
          }
          input = input.replace(key.toLowerCase(), '')
        }
      }
    }
    // If no salutation could be found, a default salutation will be set.
    if (Object.keys(entry).length === 0 && entry.constructor === Object) {
      entry = {
        'briefanrede': Constants.getDefaultSalutation(),
        'anrede': '',
        'geschlecht': ''
      }
      defaultSalutation = true
    }

    let inputArray = input.split(' ')
    inputArray = inputArray.filter(n => { return n != '' })

    // Check Title of Input
    // Checks if a part of the input is in one of the keys
    let title = ''
    // Iterate through all substrings to check if their either a title or subtitle.
    // Subtitles are recongnize with a dot.
    // After that they'll be removed from the array.
    for (let i = 0; i < inputArray.length; i++) {
      if (Array.from(Constants.getTitles().keys()).some(v => { return inputArray[i].indexOf(v.toLowerCase()) >= 0 })) {
        title += Constants.getTitles().get(this.capitalizeFirstLetter(inputArray[i])).kurzBz + ' '
        this.removeObjectFromArray(inputArray, inputArray[i])
        // If an title is removed from the array, we have to set i - 1 to get the next value
        i -= 1
      } else if (inputArray[i].indexOf('.') !== -1) {
        title += inputArray[i] + ' '
        this.removeObjectFromArray(inputArray, inputArray[i])
        // If an title is removed from the array, we have to set i - 1 to get the next value
        i -= 1
      }
    }
    // Set the title for all parts, where it's expected.
    // We have to sanitize all strings to avoid unexpected spaces at the start and end of the substring.
    entry['titel'] = this.trim(title)
    if (!defaultSalutation) {
      let briefanrede = entry['briefanrede'] + ' ' + title
      entry['briefanrede'] = this.trim(briefanrede)
    }
    let anrede = entry['anrede'] + ' ' + title
    entry['anrede'] = this.trim(anrede)

    // Check First and Last name
    // Checks if one substring contains a comma char to switch first and last name.
    if (inputArray.some(v => v.indexOf(',') !== -1)) {
      entry['vorname'] = this.capitalizeFirstLetter(this.trim(inputArray[inputArray.length - 1]))
      this.removeObjectFromArray(inputArray, inputArray[inputArray.length - 1])

      // Get last name separated by comma
      let nachname = ''
      for (let i = 0; i < inputArray.length; i++) {
        let buf = inputArray[i].replace(',', '')
        nachname += buf + ' '
      }
      entry['nachname'] = this.trim(nachname)

    // If the inputArray is bigger than 1, than it have first and last name
    } else if (inputArray.length > 1) {
      entry['vorname'] = this.capitalizeFirstLetter(this.trim(inputArray[0]))
      this.removeObjectFromArray(inputArray, inputArray[0])

      // Set all last names with first upper letter, expect prefixes like van, de, zu, von, van de
      for (var i = 0; i < inputArray.length; i++) {
        if (!Constants.prefix.some(v => { return this.containsWord(inputArray[i], v.toLowerCase()) })) {
          inputArray[i] = this.capitalizeFirstLetter(inputArray[i])
        }
      }

      entry['nachname'] = this.trim(inputArray.join(' '))

    // Only one string in array it's always the last name.
    } else if (inputArray.length == 1) {
      entry['nachname'] = this.capitalizeFirstLetter(this.trim(inputArray[0]))
    }
    return entry
  }

  static removeObjectFromArray (array, object) {
    let index = array.indexOf(object)
    if (index > -1) {
      array.splice(index, 1)
    }
    return array
  }

  // This function trims the start and end of a string.
  static trim (str) {
    str = str.replace(/^\s+/, '')
    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1)
        break
      }
    }
    return str
  }

  // This function checks if a string contains a substring, separated by spaces.
  static containsWord (haystack, needle) {
    return (' ' + haystack + ' ').indexOf(' ' + needle + ' ') !== -1
  }

  // This function sets the first letter of a string to uppercase
  static capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
