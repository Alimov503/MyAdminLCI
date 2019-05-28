<template>
  <div>
    <h1 class="grey--text lighten-3 text-xs-center">Groups incoming</h1>

    <v-container
      fill-height
      fluid
      grid-list-xl>
      <v-layout>
        <v-flex>
          <v-toolbar
            flat
            color="white">
            <h3 >Teacher : 'Bill Gates'</h3>
            <v-spacer/>
            <h3>Total payments 2.000.000 </h3>
            <!-- adding new group -->
            <v-spacer/>
            <v-dialog
              v-model="dialog"
              max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn
                  :to="'/addgroup'"
                  color="primary"
                  dark
                  class="mb-2">New group</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-text-field
                          v-model="editedItem.groupName"
                          label="Group name"/>
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-text-field
                          v-model="editedItem.teachersName"
                          label="Teacher's name"/>
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-text-field
                          v-model="editedItem.quantity"
                          label="Quantity of students"/>
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
            :items="groups"
            :pagination.sync="pagination"
            class="elevation-1"
          >

            <template v-slot:items="props">
              <td>{{ props.index +1 }}</td>
              <td>{{ props.item.groupName }}</td>
              <td >{{ props.item.teachersName }}</td>
              <td >{{ props.item.quantity }}</td>
              <td class="">
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(props.item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
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
    dialog: false,
    pagination: {},
    headers: [
      {
        text: '#',
        align: 'left',
        sortable: false,
        value: '1'
      },
      { text: 'Students Id', value: 'groupName' },
      { text: 'Students name', value: 'teachersName' },
      { text: 'payments of students', value: 'quantity' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    groups: [],
    editedIndex: -1,
    editedItem: {
      groupName: '',
      teachersName: '',
      quantity: 0
    },
    defaultItem: {
      groupName: '',
      teachersName: '',
      quantity: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Group' : 'Edit Group'
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
      this.groups = [
        { groupName: 'E001',
          teachersName: 'Pavel Durov',
          quantity: 500.000
        },
        { groupName: 'E002',
          teachersName: 'Ice cream sandwich',
          quantity: 500.000
        },
        { groupName: 'E003',
          teachersName: 'Eclair',
          quantity: 500.000
        },
        { groupName: 'E004',
          teachersName: 'Cupcake',
          quantity: 500.000

        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.groups.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.groups.indexOf(item)
      confirm('Are you sure you want to delete this group?') && this.groups.splice(index, 1)
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
        Object.assign(this.teachers[this.editedIndex], this.editedItem)
      } else {
        this.groups.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
