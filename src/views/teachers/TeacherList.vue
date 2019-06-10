<template>
  <div>
    <h1 class="text-xs-center">Teachers list</h1>
    <v-container
      fill-height
      fluid
      grid-list-xl>
      <v-layout>
        <v-flex>
          <div>
            <!-- list's header and list -->
            <v-data-table
              :headers="headers"
              :items="teachers"
              :pagination.sync="pagination"
              class="elevation-1"
             
            >
              <template v-slot:items="props">
                <!-- <router-link :to="'/student-profile'" tag="tr" class="v-hover"> -->
                  <td class="text-xs-center">{{ props.index +1 }}</td>
                  <td>{{ props.item.Id }}</td>
                  <td>
                    <v-avatar size="36px">
                      <img
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=461"
                        alt="Avatar"
                      >
                    </v-avatar>
                    <span class="ml-4">{{ props.item.name }}</span>                  
                  </td>
                  <td>{{props.item.groups}}</td>
                  <td>{{ props.item.phone }}</td>
                   <td>
                    <v-btn small :to="'/student-profile'" dark> <span>view profile</span></v-btn>
                  </td>               
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
    pagination: {},
    headers: [
      {
        text: '#',
        align: 'left',
        sortable: false,
        value: '1'
      },
      { text: 'Teachers id', value: 'Id' },
      { text: 'Name', value: 'name' },
      { text: 'Groups', value: 'groups' },
      { text: 'Phone', value: 'phone' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    teachers: [],
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
      this.teachers = [
        {
          Id: 'E1',
          name: 'Pavel Durov',
          groups: 7,
          phone: +998935034403
        },
        {
          Id: 'E2',
          name: 'Ice cream sandwich',
          groups: 6,
          phone: +998935034403
        },
        {
          Id: 'E3',
          name: 'Eclair',
          groups: 4,
          phone: +998935034403
        },
        {
          Id: 'E4',
          name: 'Cupcake',
          groups: 9,
          phone: +998935034403

        }
      ]
    },
    }, 
  }
</script>

<style>

</style>
