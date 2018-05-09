import {Splitter} from '../../../src/services/splitter.service'
import { Address } from '../../../src/entities/Address'

describe('splitter.service.js', () => {
  it('splits unformatted address Frau Sandra Berger', () => {
    var testObject = {
      'anrede': 'Frau',
      'briefanrede': 'Sehr geehrte Frau',
      'titel': '',
      'geschlecht': 'weiblich',
      'vorname': 'Sandra',
      'nachname': 'Berger'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Frau Sandra Berger')).to.deep.equal(testObject)
  })
  it('splits unformatted address Frau Sandra Berger', () => {
    var testObject = new Address('Frau', 'Sehr geehrte Frau', '', 'weiblich', 'Sandra', 'Berger')
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Frau Sandra Berger')).to.deep.equal(testObject)
  })
  it('splits unformatted address Herr Dr. Sandro Gutmensch', () => {
    var testObject = {
      'anrede': 'Herrn Dr.',
      'briefanrede': 'Sehr geehrter Herr Dr.',
      'titel': 'Dr.',
      'geschlecht': 'männlich',
      'vorname': 'Sandro',
      'nachname': 'Gutmensch'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Herr Dr. Sandro Gutmensch')).to.deep.equal(testObject)
  })
  it('splits unformatted address Professor Heinreich Freiherr vom Wald', () => {
    var testObject = {
      'anrede': 'Prof.',
      'briefanrede': 'Guten Tag Prof.',
      'titel': 'Prof.',
      'geschlecht': '',
      'vorname': 'Heinreich Freiherr',
      'nachname': 'vom Wald'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Professor Heinreich Freiherr vom Wald')).to.deep.equal(testObject)
  })
  it('splits unformatted address Mrs. Doreen Faber', () => {
    var testObject = {
      'anrede': 'Mrs',
      'briefanrede': 'Dear Mrs',
      'titel': '',
      'geschlecht': 'weiblich',
      'vorname': 'Doreen',
      'nachname': 'Faber'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Mrs. Doreen Faber')).to.deep.equal(testObject)
  })
  it('splits unformatted address Mme. Charlotte Noir', () => {
    var testObject = {
      'anrede': 'Mme',
      'briefanrede': 'Madame',
      'titel': '',
      'geschlecht': 'weiblich',
      'vorname': 'Charlotte',
      'nachname': 'Noir'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Mme. Charlotte Noir')).to.deep.equal(testObject)
  })
  it('splits unformatted address Estobar y Gonzales', () => {
    var testObject = {
      'anrede': '',
      'briefanrede': 'Guten Tag',
      'titel': '',
      'geschlecht': '',
      'vorname': 'Estobar',
      'nachname': 'y Gonzales'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Estobar y Gonzales')).to.deep.equal(testObject)
  })
  it('splits unformatted address Frau Prof. Dr. rer. nat. Maria von Leuthäuser-Schnarrenberger', () => {
    var testObject = {
      'anrede': 'Frau Prof. Dr. rer. nat.',
      'briefanrede': 'Sehr geehrte Frau Prof. Dr. rer. nat.',
      'titel': 'Prof. Dr. rer. nat.',
      'geschlecht': 'weiblich',
      'vorname': 'Maria',
      'nachname': 'von Leuthäuser-Schnarrenberger'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Frau Prof. Dr. rer. nat. Maria von Leuthäuser-Schnarrenberger')).to.deep.equal(testObject)
  })
  it('splits unformatted address Herr Dipl. Ing. Max von Müller', () => {
    var testObject = {
      'anrede': 'Herrn Dipl. Ing.',
      'briefanrede': 'Sehr geehrter Herr Dipl. Ing.',
      'titel': 'Dipl. Ing.',
      'geschlecht': 'männlich',
      'vorname': 'Max',
      'nachname': 'von Müller'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Herr Dipl. Ing. Max von Müller')).to.deep.equal(testObject)
  })
  it('splits unformatted address Dr. Russwurm, Winfried', () => {
    var testObject = {
      'anrede': 'Dr.',
      'briefanrede': 'Guten Tag Dr.',
      'titel': 'Dr.',
      'geschlecht': '',
      'vorname': 'Winfried',
      'nachname': 'Russwurm'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Dr. Russwurm, Winfried')).to.deep.equal(testObject)
  })
  it('splits unformatted address Herr Dr.-Ing. Dr. rer. nat. Dr. h.c. mult. Paul Steffens', () => {
    var testObject = {
      'anrede': 'Herrn Dr.-Ing. Dr. rer. nat. Dr. h.c. mult.',
      'briefanrede': 'Sehr geehrter Herr Dr.-Ing. Dr. rer. nat. Dr. h.c. mult.',
      'geschlecht': 'männlich',
      'vorname': 'Paul',
      'nachname': 'Steffens'
    }
    // Assert that unformat address gets formatted
    expect(Splitter.splitRawInput('Herr Dr.-Ing. Dr. rer. nat. Dr. h.c. mult. Paul Steffens')).to.deep.equal(testObject)
  })
})
