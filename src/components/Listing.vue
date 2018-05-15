<template>
  <div>
    <!-- Search input -->
    <b-field class="search-input">
      <b-autocomplete rounded v-model="name" :data="filterOptions" placeholder="Suchwort" icon="magnify" id="search-input-field">
        <template slot="empty">Keine Ergebnisse</template>
      </b-autocomplete>
    </b-field>
    <!-- List -->
    <b-table :data="filteredData" :checked-rows.sync="checkedRows" checkable id="persisted-address-table">
      <template slot-scope="props">
        <b-table-column field="anrede" label="Anrede">
          {{ props.row.anrede }}
        </b-table-column>
        <b-table-column field="briefanrede" label="Briefanrede">
          {{ props.row.briefanrede }}
        </b-table-column>

        <b-table-column field="titel" label="Titel">
          {{ props.row.titel }}
        </b-table-column>

        <b-table-column field="geschlecht" label="Geschlecht">
          {{ props.row.geschlecht }}
        </b-table-column>

        <b-table-column field="vorname" label="Vorname">
          {{ props.row.vorname }}
        </b-table-column>

        <b-table-column field="nachname" label="Nachname">
          {{ props.row.nachname }}
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large">
              </b-icon>
            </p>
            <p>Noch keine Kontakte eingetragen.</p>
          </div>
        </section>
      </template>
    </b-table>
    <!-- Delete button -->
    <p class="control is-pulled-right">
      <button :disabled="checkedRows.length == 0" class="button is-primary" v-text="deleteButtonText" v-on:click="deleteCheckedRows()" id="delete-entry-button">
      </button>
    </p>
  </div>
</template>

<script>
function addIfNotExisting (array, value) {
  if (array.indexOf(value) == -1) {
    array.push(value)
  }
}

function includesSubstring (string, substring) {
  return string.replace(/\s+/g, '').indexOf(substring) !== -1
}

export default {
  name: 'Listing',
  data () {
    return {
      msg: '',
      selected: '',
      name: '',
      checkedRows: []
    }
  },
  props: ['listEntries'],
  computed: {
    deleteButtonText () {
      const checkedEntries = this.$data.checkedRows
      if (checkedEntries == null || checkedEntries.length == 0) {
        // No entries checked
        return 'Einträge Löschen'
      } else if (checkedEntries.length == 1) {
        // One entry checked
        return '1 Eintrag löschen'
      } else {
        // More then one entry checked
        return checkedEntries.length + ' Einträge löschen'
      }
    },
    filterOptions () {
      // Create list of all options
      let allEntries = []
      this.$props.listEntries.slice(0).forEach(element => {
        addIfNotExisting(allEntries, element.vorname + ' ' + element.nachname)
        addIfNotExisting(allEntries, element.anrede)
        addIfNotExisting(allEntries, element.briefanrede)
        addIfNotExisting(allEntries, element.geschlecht)
      })

      // Filter optins to only include those who contain the filter word
      const filteredEntries = allEntries.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
      return filteredEntries
    },
    filteredData () {
      let filterKeyword = this.$data.name
      // Streight up return the complete list if not filter keyword is set
      if (filterKeyword === '' || filterKeyword === null) {
        return this.$props.listEntries
      }

      // Remove blank spaces
      filterKeyword = filterKeyword.replace(/\s+/g, '')

      let results = []
      this.$props.listEntries.slice(0).forEach(element => {
        // Check if any property contains the filtered word
        if (includesSubstring((element.vorname + ' ' + element.nachname), filterKeyword) ||
          includesSubstring(element.anrede, filterKeyword) ||
          includesSubstring(element.briefanrede, filterKeyword) ||
          includesSubstring(element.geschlecht, filterKeyword)) {
          results.push(element)
        }
      })
      return results
    }
  },
  methods: {
    deleteCheckedRows () {
      const checkedRows = this.$data.checkedRows
      this.$emit('delete-entries', checkedRows)
      this.$data.checkedRows = []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-input {
  max-width: 400px;
  right: 0;
  margin-left: auto;
}
</style>
