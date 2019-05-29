<template>
  <div id="app">
    <h1 class="grey--text text-xs-center">Students list</h1>

    <v-container fill-height fluid>
      <v-layout>
        <v-flex md12>
          <div>
            <!-- list's header and list -->
            <v-data-table
              :headers="headers"
              :items="students"
              :pagination.sync="pagination"
              class="elevation-1"
             
            >
              <template v-slot:items="props">
                <!-- <router-link :to="'/student-profile'" tag="tr" class="v-hover"> -->
                  <td to="'/student-profile'" class="text-xs-center">{{ props.index +1 }}</td>
                  <td :to="'/student-profile'">{{ props.item.Id }}</td>
                  <td :to="'/student-profile'">
                    <v-avatar size="36px">
                      <img
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=461"
                        alt="Avatar"
                      >
                    </v-avatar>
                    <span class="ml-4">{{ props.item.name }}</span>
                   
                  </td>
                  <td><v-icon :class="props.item.status === 'check_circle' ? 'green--text' : 'red--text'">{{props.item.status}}</v-icon></td>
                  <td>{{ props.item.phone }}</td>
                  <td>
                    <v-icon class="mr-2 primary--text" @click="editItem(props.item)" :to="'/edit-student-profile'">mdi-pencil</v-icon>
                    <v-icon @click="deleteItem(props.item)" class="red--text">mdi-delete</v-icon>
                  </td>
                <!-- </router-link> -->
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
              <v-pagination v-model="pagination.page" :length="pages" circle/>
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
    students : [
        {
          Id: "S19-2",
          name: "Pavel Durov",
          status: 'on',
          phone: +998935034403,
          subjects: [
            {name: 'Math', group:'M1', payed: 'false'},
            {name: 'English', group: 'E1', payed: 'true'}
          ]
        },
        {
          Id: "S19-3",
          name: "Ice cream sandwich",
          status: "check_circle",
          phone: +998935034403,
          subjects: [
            {name: 'English', group: 'E1'},
            {name: 'Korean', group: 'K3'}
          ]

        },
        {
          Id: "S19-4",
          name: "Eclair",
          status: "check_circle",
          phone: +998935034403,
          subjects: [
            {name: 'English', group: 'E1'},
            {name: 'Korean', group: 'K3'}
          ]
        },
        {
          Id: "S19-5",
          name: "Cupcake",
          status: "check_circle",
          phone: +998935034403,
          subjects: [
            {name: 'English', group: 'E1'},
            {name: 'Korean', group: 'K3'}
          ]
        },
        {
          Id: "S19-6",
          name: "Cupcake",
          status: "highlight_off",
          phone: +998935034403,
           subjects: [
            {name: 'Math', group:'M1'}
          ]
        },
        {
          Id: "S19-7",
          name: "Cupcake",
          status:"highlight_off",
          phone: +998935034403,
           subjects: [
            {name: 'English', group: 'E1'}
          ]
        }
      ],
    dialog: false,
    pagination: {},
    selected: {},
    headers: [
      {
        text: "No.",
        align: "center",
        sortable: false,
        value: "1"
      },
      { text: "Students id", value: "SId" },
      { text: "Name", value: "name" },
      { text: "Status", value: "status" },
      { text: "Phone", value: "phone" },
      { text: "Actions", value: "name", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      Id: 0,
      name: "",
      status: 0,
      phone: 0
    },
    defaultItem: {
      Id: 0,
      name: "",
      status: "",
      phone: 0
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Student" : "Edit Student";
    },
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.students;
    },

    editItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.students.indexOf(item);
      confirm("Are you sure you want to delete this student?") &&
        this.students.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedItem);
      } else {
        this.students.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped>
.v-hover:hover {
  cursor: pointer;
  background-color: rgba(53, 53, 73, 0.438);
}
</style>
