export class Constants {
  static titles = ['Prof.', 'Professor', 'Dr.', 'Doktor', 'Dipl.', 'Diplom']
  static salutations = new Map([
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
  static defaultSalutation = 'Sehr geehrte Damen und Herren'

  static getTitles () {
    return this.titles
  }

  static getSalutations () {
    return this.salutations
  }

  static getDefaultSalutation () {
    return this.defaultSalutation
  }
}
