<template>
    <div id="app">
        <h1 class="grey--text text-xs-center">Students list</h1>

        <v-container
        fill-height
        fluid
        grid-list-xl>
        <v-layout>
          <v-flex md12>
            
    <div>
          <!-- list's header and list -->
      <v-data-table
        :headers="headers"
        :items="students"
        class="elevation-1"
        :pagination.sync="pagination"
      >

        <template v-slot:items="props" >
        <router-link tag="tr" :to="'/student-profile'">
          <td>{{props.index +1}}</td>
          <td >{{ props.item.Id }}</td>
          <td >{{ props.item.name }}</td>
          <td >{{ props.item.status }}</td>
          <td >{{ props.item.phone }}</td>
          <td class="justify-center layout px-0">
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
          </router-link>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
      <div  class="text-xs-center pt-2">
       <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
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
      { text: 'Students id', value: 'SId' },
      { text: 'Name', value: 'name' },
      { text: 'Status', value: 'status' },
      { text: 'Phone', value: 'phone' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
      students: [],
        editedIndex: -1,
        editedItem: {
          Id: 0,
          name: '',
          status: 0,
          phone : 0
        },
        defaultItem: {
          Id: 0,
          name: '',     
          status: '',
          phone : 0
        }

    }),
    computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Student' : 'Edit Student'
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
      this.students = [
        {        
          Id: "E1",
           name: 'Pavel Durov',
           status: 6.0,
          phone: +998935034403,         
        },
        {
          Id: "E2",
          name: 'Ice cream sandwich',
          status: 9.0,
          phone: +998935034403,         
        },
        {
          Id: "E3",
          name: 'Eclair',         
          status: 16.0,
          phone: +998935034403,    
        },
        {
          Id: "E4",
          name: 'Cupcake',        
          status: 3.7,
          phone: +998935034403,
         
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.students.indexOf(item)
      confirm('Are you sure you want to delete this student?') && this.students.splice(index, 1)
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
        Object.assign(this.students[this.editedIndex], this.editedItem)
      } else {
        this.students.push(this.editedItem)
      }
      this.close()
    }

  }

}
</script>

<style>

</style>
