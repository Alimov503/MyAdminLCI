<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <h1 >Teachers Fee</h1>
          <v-layout
            justify-center
          >
            <v-flex

              md12
              xl6
            >
              <!-- list's header and list -->
          <v-data-table
            :headers="headers"
            :items="teachers"
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

                <td>{{ props.item.name }}</td>
                <td>{{ props.item.salary }}</td>
                <td>{{ props.item.numberOfStudent }}</td>
                <td text-align="center">{{ props.item.quantityOfGroups }}</td>
                <td text-align="center">{{ props.item.quantityOfStudents }}</td>
                
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
        :length="pages"
        circle/>
    </div>
            </v-flex>
          </v-layout>
        </v-flex>
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
       pagination: {},
      selected: {},
      headers: [
        {
          sortable: false,
          text: 'NO',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
        
        },
        {
          sortable: false,
          text: 'Quantity of groups',
          value: 'quantityOfGroups',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Quantity of Students',
          value: 'quantityOfStudents',
          align: 'right'
        }
      ],
      teachers: [
        {
          name: 'Pavel Durov',
          quantityOfGroups: 8,
          quantityOfStudents: 24,
          salary: '2.000.000'
        },
        {
          name: 'Stive Jobs',
          quantityOfGroups: 5,
          quantityOfStudents: 24,
          salary: '2.200.000'
        },
         {
          name: 'Sage Rodriguez',
          quantityOfGroups: 7,
          quantityOfStudents: 20,
          salary: '2.000.000'
        }, 
        {
          name: 'Philip Chanley',
          quantityOfGroups: 4,
          quantityOfStudents: 18,
          salary: '2.500.000'
        },
         {
          name: 'Doris Greene',
          quantityOfGroups: 9,
          quantityOfStudents: 28,
          salary: '2.000.000'
        }
      ]
    }
  },

  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },

}
</script>

<style>

</style>
