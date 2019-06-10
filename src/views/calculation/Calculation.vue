<template>
<div>
  <h1 class="grey--text text-xs-center">Consumption list</h1>
  
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
                  <td class="text-xs-center">{{ props.item.months }}</td>
                  <td>{{ props.item.totalPayment }}</td>
                  <td>{{ props.item.teachersFee }}</td>
                  <td> {{props.item.consumption}} </td>
                  <td> {{props.item.netIncome}} </td>
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
          totalPayment: "17.000.000",
          teachersFee: '7.000.000',
          consumption: '4.000.000',
          netIncome: '6.000.000',
          months: 'DECEMBER'
        },
        {
          totalPayment: "17.000.000",
          teachersFee: '7.000.000',
          consumption: '4.000.000',
          netIncome: '6.000.000',
           months: 'YANVAR'
        },
       {
          totalPayment: "17.000.000",
          teachersFee: '7.000.000',
          consumption: '4.000.000',
          netIncome: '6.000.000',
           months: 'FEBRAL'
        },
        {
          totalPayment: "17.000.000",
          teachersFee: '7.000.000',
          consumption: '4.000.000',
          netIncome: '6.000.000',
           months: 'MART'
        },
        {
          totalPayment: "17.000.000",
          teachersFee: '7.000.000',
          consumption: '4.000.000',
          netIncome: '6.000.000',
           months: 'APRIL'
        },
        {
          totalPayment: "17.000.000",
          teachersFee: '7.000.000',
          consumption: '4.000.000',
          netIncome: '6.000.000',
           months: 'MAY'
        },
      ],
    pagination: {},
    selected: {},
   
    headers: [
      {
        text: "Months",
        align: "center",
        sortable: false,
        value: "1"
      },
     
      { text: "Total payment", value: "totalPayment" },
      { text: "Teachers fee", value: "teachersFee" },
      { text: "Consumption", value: "consumption" },
      { text: "Net income", value: "netIncome", }
    ],
  }),
  computed: {
    
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
  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.students;
    },
  }
};
</script>


<style>

</style>
