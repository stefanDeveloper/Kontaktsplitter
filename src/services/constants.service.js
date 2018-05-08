export class Constants {
  static titel = ['Prof.', 'Professor', 'Dr.', 'Doktor', 'Dipl.', 'Diplom']
  static anrede = new Map([
    ['Mr.', {
      'geschlecht': 'männlich',
      'anrede': 'Mr.',
      'brief': 'Dear Mr.' }
    ], ['Ms.', {
      'geschlecht': 'weiblich',
      'anrede': 'Ms.',
      'brief': 'Dear Ms.' }
    ], ['Mrs.', {
      'geschlecht': 'weiblich',
      'anrede': 'Mrs.',
      'brief': 'Dear Mrs.' }
    ], ['Frau', {
      'geschlecht': 'weiblich',
      'anrede': 'Frau',
      'brief': 'Sehr geehrte Frau' }
    ], ['Fr.', {
      'geschlecht': 'weiblich',
      'anrede': 'Frau',
      'brief': 'Sehr geehrte Frau' }
    ], ['Herr', {
      'geschlecht': 'männlich',
      'anrede': 'Herrn',
      'brief': 'Sehr geehrter Herr' }
    ], ['Hr.', {
      'geschlecht': 'männlich',
      'anrede': 'Herrn',
      'brief': 'Sehr geehrter Herr' }
    ], ['Herrn', {
      'geschlecht': 'männlich',
      'anrede': 'Herrn',
      'brief': 'Sehr geehrter Herr' }
    ], ['Signora', {
      'geschlecht': 'weiblich',
      'anrede': 'Signora',
      'brief': 'Gentile Signora' }
    ], ['Sig.', {
      'geschlecht': 'männlich',
      'anrede': 'Sig.',
      'brief': 'Egregio Signor' }
    ], ['M.', {
      'geschlecht': 'männlich',
      'anrede': 'M',
      'brief': 'Monsieur' }
    ], ['Mme.', {
      'geschlecht': 'weiblich',
      'anrede': 'Mme.',
      'brief': 'Madame' }
    ]])
  static defaultAnrede = 'Sehr geehrte Damen und Herren'

  static getTitel () {
    return this.titel
  }

  static getAnrede () {
    return this.anrede
  }

  static getDefaultAnrede () {
    return this.defaultAnrede
  }
}
