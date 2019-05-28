<template>
  <div >
    <h1 class="grey--text text-xs-center lighten-3">Incoming by groups</h1>

    <v-container >
      <v-layout>
        <v-flex>

          <!-- list's header and list -->
          <v-data-table
            :headers="headers"
            :items="exams"
            :pagination.sync="pagination"
            class="elevation-1"
          >

            <template
              v-slot:items="props"

            >
              <router-link
                :to="'/groups-incoming'"
                tag="tr">
                <td>{{ props.index +1 }}</td>

                <td>{{ props.item.groupName }}</td>
                <td>{{ props.item.incoming }}</td>
                <td>{{ props.item.numberOfStudent }}</td>
              </router-link>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="primary"
                @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination
              v-model="pagination.page"
              :length="pages"/>
          </div>

        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
export default {
  data: () => ({
    pagination: {},
    headers: [
      {
        text: '#',
        align: 'left',
        sortable: false,
        value: '1'
      },
      { text: 'Groups name', value: 'groupName' },
      { text: 'Incoming', value: 'incoming' },
      { text: 'Quantity of students', value: 'numberOfStudent', sortable: false }
    ],
    exams: []
  }),

  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.exams = [
        { groupName: 'E001',
          incoming: '2.500.000',
          numberOfStudent: '5'
        },
        { groupName: 'E002',
          incoming: '3.000.000',
          numberOfStudent: '9'
        },
        { groupName: 'E003',
          incoming: '2.800.000',
          numberOfStudent: '7'
        },
        { groupName: 'E004',
          incoming: '3.200.000',
          numberOfStudent: '10'

        },
        { groupName: 'E005',
          incoming: '2.900.000',
          numberOfStudent: '8'

        }
      ]
    }
  }
}
</script>

<style>

</style>
