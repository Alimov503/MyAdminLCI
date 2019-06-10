<template>
  <div>
    <h1 class="text-xs-center">Rooms list</h1>
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
                  v-on="on">New Room</v-btn>
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
                          v-model="editedItem.roomNumber"
                          label="Room number"/>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          v-model="editedItem.teachersName"
                          label="Teacher name"/>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          v-model="editedItem.capacity"
                          type="number"
                          label="Capacity"/>
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
            :items="rooms"
            :pagination.sync="pagination"
            class="elevation-1"
          >

            <template v-slot:items="props">
              <td>{{ props.index +1 }}</td>
              <td>{{ props.item.roomNumber }}</td>
              <td>{{ props.item.teachersName }}</td>
              <td>{{ props.item.capacity }}</td>
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
    selected: {},
    headers: [
      {
        text: '#',
        align: 'left',
        sortable: false,
        value: '1'
      },
      { text: 'Room number', value: 'roomNumber' },
      { text: 'Teacher name', value: 'teacherName' },
      { text: 'Capacity', value: 'capacity' },

      { text: 'Actions', value: 'name', sortable: false }
    ],
    rooms: [],
    editedIndex: -1,
    editedItem: {
      roomNumber: '',
      teachersName: ''
    },
    defaultItem: {
      roomNumber: '',
      teachersName: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Room' : 'Edit Room'
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
      this.rooms = [
        { roomNumber: '01',
          teachersName: 'Pavel Durov',
          capacity: '8'
        },
        { roomNumber: '02',
          teachersName: 'Matk John',
          capacity: '13'
        },
        { roomNumber: '03',
          teachersName: 'Stive  Works',
          capacity: '8'

        },
        
        { roomNumber: '03',
          teachersName: 'Stive  Works',
          capacity: '8'

        },
        
        { roomNumber: '03',
          teachersName: 'Stive  Works',
          capacity: '8'

        },
        { roomNumber: '04',
          teachersName: 'Bill Gates',
          capacity: '13'

        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.rooms.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.rooms.indexOf(item)
      confirm('Are you sure you want to delete this room?') && this.rooms.splice(index, 1)
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
        Object.assign(this.rooms[this.editedIndex], this.editedItem)
      } else {
        this.rooms.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
