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
              <material-card
                color="orange"
                title="Teachers Employee Stats"
                text="Monthly employees of teachers"
              >
                <v-data-table
                  :headers="headers"
                  :items="items"
                  hide-actions
                >
                  <template
                    slot="headerCell"
                    slot-scope="{ header }"
                  >
                    <span
                      class="font-weight-light text-warning text--darken-3"
                      v-text="header.text"
                    />
                  </template>
                  <template
                    slot="items"
                    slot-scope="{ index, item }"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td class="text-xs-right">{{ item.salary }}</td>
                    <td class="text-xs-center">{{ item.quantityOfGroups }}</td>
                    <td class="text-xs-center">{{ item.quantityOfStudents }}</td>
                  </template>
                </v-data-table>
              </material-card>
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
      headers: [
        {
          sortable: false,
          text: 'ID',
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
          align: 'right'
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
      items: [
        {
          name: 'Dakota Rice',
          quantityOfGroups: 8,
          quantityOfStudents: 24,
          salary: '$35,738'
        },
        {
          name: 'Minerva Hooper',
          quantityOfGroups: 5,
          quantityOfStudents: 24,
          salary: '$23,738'
        }, {
          name: 'Sage Rodriguez',
          quantityOfGroups: 7,
          quantityOfStudents: 20,
          salary: '$56,142'
        }, {
          name: 'Philip Chanley',
          quantityOfGroups: 4,
          quantityOfStudents: 18,
          salary: '$38,735'
        }, {
          name: 'Doris Greene',
          quantityOfGroups: 9,
          quantityOfStudents: 28,
          salary: '$63,542'
        }
      ]
    }
  }
}
</script>

<style>

</style>
