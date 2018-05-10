const storeKey = 'nameEntriesKey'
const storeCounterKey = 'counterKey'
const storage = window.localStorage

// Overwrites the stored dataset with the given dataset
const storeDataset = function (dataset) {
  const newDatasetJson = JSON.stringify(dataset)
  storage.setItem(storeKey, newDatasetJson)
}

export class Persistence {
  // Stores the entry with an unique id
  static addEntry (entry) {
    if (this.isStorageAvailable) {
      console.log('Persisting entry')
      let existingData = this.getAllEntries()

      // Create a new id
      let currentCounter = storage.getItem(storeCounterKey)
      if (currentCounter == null) {
        currentCounter = 0 // Set initial counter
      }
      const newCounter = parseInt(currentCounter) + 1
      // Set counter for the entry and store it as the new highest counter
      storage.setItem(storeCounterKey, newCounter)
      entry.id = newCounter

      existingData.push(entry)
      storeDataset(existingData)
    } else {
      console.log('Could not persist entry, browser does not support local storage')
    }
  }

  // Returns all entries that are stored
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

  // Clears all data from the store
  static clearAllData () {
    if (this.isStorageAvailable) {
      storage.removeItem(storeKey)
    } else {
      console.log('Could not clear persisted data, browser does not support local storage')
    }
  }

  // Deletes the given entries from the store
  static deleteEntries (entries) {
    if (!this.isStorageAvailable) {
      console.log('Could not clear persisted data, browser does not support local storage')
      return []
    }

    let existingData = this.getAllEntries()

    // Clear the existing entries from the data we want to delete
    entries.forEach(entryToDelete => {
      existingData = existingData.filter(item =>
        item.id != entryToDelete.id
      )
    })

    // Store the cleared dataset
    storeDataset(existingData)
    return existingData
  }

  // Evaluates if the local storage is available on the current browser
  static isStorageAvailable () {
    return typeof (Storage) !== 'undefined'
  }
}
