const storeKey = 'nameEntries'
const storage = window.localStorage

export class Persistence {
  static addEntry (entry) {
    if (this.isStorageAvailable) {
      console.log('Persisting entry')
      let existingData = this.getAllEntries()
      existingData.push(entry)
      const newDatasetJson = JSON.stringify(existingData)
      storage.setItem(storeKey, newDatasetJson)
    } else {
      console.log('Could not persist entry, browser does not support local storage')
    }
  }

  static getAllEntries () {
    if (this.isStorageAvailable) {
      const datasetJson = storage.getItem(storeKey)

      // Check if json is empty, return empty array in that case
      if (datasetJson == null) {
        return []
      }
      const dataset = JSON.parse(datasetJson)
      return dataset
    } else {
      console.log('Could not load persisted data, browser does not support local storage')
    }
  }

  static clearAllData () {
    if (this.isStorageAvailable) {
      storage.removeItem(storeKey)
    } else {
      console.log('Could not clear persisted data, browser does not support local storage')
    }
  }

  static isStorageAvailable () {
    return typeof (Storage) !== 'undefined'
  }
}
