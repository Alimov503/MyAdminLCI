<template>
  <div>
    <h1 class="text-xs-center">Exams list</h1>
    <v-container
      fill-height
      fluid
      grid-list-xl>
      <v-layout>
        <v-flex>
          <v-container
            fill-height
            fluid
            grid-list-xl>
            <v-layout>
              <v-flex>
                <v-toolbar
                  flat
                  color="white">
                  <!-- adding new Exam -->

                  <v-spacer/>
                  <v-dialog
                    v-model="dialog"
                    max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-on="on">New Exam</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }} </span>
                      </v-card-title>

                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>

                            <v-flex>
                              <v-text-field
                                v-model="editedItem.examName"
                                label="Exam name"/>
                            </v-flex>
                            <v-flex>
                              <v-text-field
                                v-model="editedItem.groupName"
                                label="Groups name"/>
                            </v-flex>
                            <v-flex>
                              <v-text-field
                                v-model="editedItem.examData"
                                type="number"
                                label="Exam data"/>
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
                  :items="exams"
                  :pagination.sync="pagination"
                  class="elevation-1"
                  
                >
                  <template v-slot:items="props">
                    <td>{{ props.index +1 }}</td>
                    <td>{{ props.item.examName }}</td>
                    <td>{{ props.item.groupName }}</td>
                    <td>{{ props.item.examData }}</td>
                    <td class="">
                      <v-icon 
                      class="mr-2 primary--text" 
                      :to="'/edit-student-profile'"
                      @click="editItem(props.item)"
                      >mdi-pencil</v-icon>

                      <v-icon  class="red--text"
                      @click="deleteItem(props.item)"
                      >mdi-delete</v-icon>

                    </td>
                  </template>
                  <template v-slot:no-data>
                    <v-btn
                      color="primary"
                      @click="initialize">Reset</v-btn>
                  </template>
                </v-data-table>
                <div class="text-xs-center pt-2">
              <v-pagination v-model="pagination.page" :length="pages" circle/>
            </div>
              </v-flex>
            </v-layout>
          </v-container>
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
    selected: {},
    headers: [
      {
        text: '#',
        align: 'left',
        sortable: false,
        value: '1'
      },
      { text: 'Exams Name', value: 'examName' },
      { text: 'Groups name', value: 'groupName' },
      { text: 'Exam data', value: 'examData' },

      { text: 'Actions', value: 'name', sortable: false }
    ],
    exams: [],
    editedIndex: -1,
    editedItem: {
      examName: '',
      groupName: '',
      examData: ''
    },
    defaultItem: {
      examName: '',
      groupName: '',
      examData: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Exam' : 'Edit Exam'
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
      this.exams = [
        { examName: '01',
          groupName: 'Pavel Durov',
          examData: '8'
        },
        { examName: '02',
          groupName: 'Matk John',
          examData: '13'
        },
        { examName: '03',
          groupName: 'Stive  Works',
          examData: '8'

        },
        { examName: '03',
          groupName: 'Stive  Works',
          examData: '8'

        },
        { examName: '03',
          groupName: 'Stive  Works',
          examData: '8'

        },
        { examName: '03',
          groupName: 'Stive  Works',
          examData: '8'

        },
        { examName: '04',
          groupName: 'Bill Gates',
          examData: '13'

        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.exams.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.exams.indexOf(item)
      confirm('Are you sure you want to delete this exams?') && this.exams.splice(index, 1)
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
        Object.assign(this.exams[this.editedIndex], this.editedItem)
      } else {
        this.exams.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
