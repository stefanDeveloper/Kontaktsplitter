export class Constants {
  static titles = new Map([
    ['Prof.', {
      'title': 'Professor',
      'kurzBz': 'Prof.'}
    ], ['Professor', {
      'title': 'Professor',
      'kurzBz': 'Prof.'}
    ], ['Dr.', {
      'title': 'Doktor',
      'kurzBz': 'Dr.'}
    ], ['Doktor', {
      'title': 'Doktor',
      'kurzBz': 'Dr.'}
    ], ['Dipl.', {
      'title': 'Diplom',
      'kurzBz': 'Dipl.'}
    ], ['Diplom', {
      'title': 'Diplom',
      'kurzBz': 'Dipl.'}
    ], ['Dr.-Ing.', {
      'title': 'Doktor Ingenieur',
      'kurzBz': 'Dr.-Ing.'}
    ]])
  static salutations = new Map([
    ['Mr.', {
      'geschlecht': 'männlich',
      'anrede': 'Mr',
      'brief': 'Dear Mr' }
    ], ['Mr', {
      'geschlecht': 'männlich',
      'anrede': 'Mr',
      'brief': 'Dear Mr' }
    ], ['Ms.', {
      'geschlecht': 'weiblich',
      'anrede': 'Ms',
      'brief': 'Dear Ms' }
    ], ['Mrs.', {
      'geschlecht': 'weiblich',
      'anrede': 'Mrs',
      'brief': 'Dear Mrs' }
    ], ['Ms', {
      'geschlecht': 'weiblich',
      'anrede': 'Ms',
      'brief': 'Dear Ms' }
    ], ['Mrs', {
      'geschlecht': 'weiblich',
      'anrede': 'Mrs',
      'brief': 'Dear Mrs' }
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
    ], ['Se\u00f1ora.', {
      'geschlecht': 'weiblich',
      'anrede': 'Se\u00f1ora.',
      'brief': 'Estimada Se\u00f1ora' }
    ], ['Se\u00f1or.', {
      'geschlecht': 'männlich',
      'anrede': 'Se\u00f1or.',
      'brief': 'Estimado Se\u00f1or' }
    ]])
  static defaultSalutation = 'Sehr geehrte Damen und Herren'
  static prefix = ['zu', 'von', 'de', 'van', 'vom']
  static adelstitel = ['Kaiser', 'Kaiserin', 'Zar', 'Zarin', 'König', 'Köngin', 'Erzherzog', 'Erzherzogin', 'Großherzog', 'Großherzogin', 'Kurfürst', 'Kurfürstin', 'Herzog', 'Herzogin', 'Landgraf', 'Landgräfin', 'Markgraf', 'Markgräfin', 'Fürst', 'Fürstin', 'Graf', 'Gräfin', 'Freiherr', 'Freifrau', 'Baron', 'Baronin']

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
