<template>
  <div>
    <b-table :data="entries2">
      <template slot-scope="props">
        <b-table-column field="anrede" label="Anrede">
          {{ props.row.anrede }}
        </b-table-column>

        <b-table-column field="briefanrede" label="Briefanrede">
          {{ props.row.briefanrede }}
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
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Listing',
  data () {
    return {
      msg: ''
    }
  },
  props: ['entries2']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
