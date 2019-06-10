<template>
  <div>
    <h1 class="grey--text text-xs-center">Consumption list</h1>
    <v-container
      fill-height
      fluid
      grid-list-xl>
      <v-layout>
        <v-flex>
          <v-toolbar
            flat
            color="white">
            <!-- adding new Room -->
            <v-spacer/>
            <v-dialog
              v-model="dialog"
              max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-on="on">New Consumption</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>

                      <v-flex>
                        <v-text-field
                          v-model="editedItem.consumptionName"
                          label="Consumption name"/>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          v-model="editedItem.consumptionCost"
                          label="Consumption cost"/>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          v-model="editedItem.consumptionDate"
                          type="number"
                          label="Consumption date"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="close">Cancel</v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>

          <!-- list's header and list -->
          <v-data-table
            :headers="headers"
            :items="consumption"
            :pagination.sync="pagination"
            class="elevation-1"
          >

            <template v-slot:items="props">
              <td>{{ props.index +1 }}</td>
              <td>{{ props.item.consumptionName }}</td>
              <td>{{ props.item.consumptionCost }}</td>
              <td>{{ props.item.consumptionDate }}</td>
              <td class="">
                 <v-icon 
                    class="mr-2 primary--text" 
                    :to="'/edit-student-profile'"
                    @click="editItem(props.item)"
                    >
                    mdi-pencil
                    </v-icon>

                    <v-icon  class="red--text"
                    @click="deleteItem(props.item)"
                    >
                    mdi-delete
                    </v-icon>
              </td>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="primary"
                @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>

        </v-flex>
      </v-layout>
    </v-container>

    <div class="text-xs-center pt-2">
      <v-pagination
        v-model="pagination.page"
        :length="pages"
        circle/>
    </div>

  </div>

</template>

<script>
export default {
  data: () => ({
    dialog: false,
    pagination: {},
    headers: [
      {
        text: '#',
        align: 'left',
        sortable: false,
        value: '1'
      },
      { text: 'Consumption name', value: 'consumptionName' },
      { text: 'Consumption cost', value: 'consumptionName' },
      { text: 'Consumption date', value: 'consumptionDate' },

      { text: 'Actions', value: 'name', sortable: false }
    ],
    consumption: [],
    editedIndex: -1,
    editedItem: {
      consumptionName: '',
      consumptionDate: 0
    },
    defaultItem: {
      consumptionName: '',
      consumptionDate: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Consumption' : 'Edit Consumption'
    },
    pages () {
      if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.consumption = [
        { consumptionName: 'Rent of branch',
          consumptionCost: '5.000.000',
          consumptionDate: '18.05.2019'
        },
        { consumptionName: 'bill for bank',
          consumptionCost: '200.000',
          consumptionDate: '18.05.2019'
        },
        { consumptionName: 'bill for water',
          consumptionCost: '150.000',
          consumptionDate: '09.05.2019'

        },
        { consumptionName: 'bill for water',
          consumptionCost: '150.000',
          consumptionDate: '09.05.2019'

        },
        { consumptionName: 'bill for water',
          consumptionCost: '150.000',
          consumptionDate: '09.05.2019'

        },
        { consumptionName: 'bill for water',
          consumptionCost: '150.000',
          consumptionDate: '09.05.2019'

        },
        { consumptionName: 'for internet',
          consumptionCost: '350.000',
          consumptionDate: '01.05.2019'

        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.consumption.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.consumption.indexOf(item)
      confirm('Are you sure you want to delete this consumption?') && this.consumption.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.consumption[this.editedIndex], this.editedItem)
      } else {
        this.consumption.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
