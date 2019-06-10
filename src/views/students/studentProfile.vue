<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >

      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">

            <h4 class="card-title font-weight-light">Shomurod Ibrohimov name</h4>

            <v-btn
              :to="'/edit-student-profile'"
              color="warning"
              round
              class="font-weight-light"
            > Edit profile </v-btn>
          </v-card-text>
        </material-card>
      </v-flex>

      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="Student Profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md12

                >
                  <table>
                    <tbody

                    >
                      <tr>
                        <th style="width: 50%">Full name</th>
                        <td >{{ profileData.fullName }}</td>
                      </tr>
                      <tr>
                        <th>Phone number</th>
                        <td>{{ profileData.phoneNumber }}</td>
                      </tr>
                      <tr>
                        <th>Emergency call number </th>
                        <td>{{ profileData.Emergeny }}</td>
                      </tr>
                      <tr>
                        <th>Adress</th>
                        <td>{{ profileData.Adress }}</td>
                      </tr>
                    </tbody>
                  </table>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'
export default {

  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  data () {
    return {
      profileData: {
        fullName: 'pattoh',
        phoneNumber: '+99893050212',
        Emergeny: '+99893050212',
        Adress: 'Toshkent shahar Yashnobod tumani Iltifot street'
      },
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }
  },

  methods: {
    moment: function () {
      return moment()
    }
  }

}
</script>

<style scoped>
table {
     justify-content: center;
    display: table-row-group;
    vertical-align: middle;
    border-color: black;
    border-collapse: collapse
}

tr{
    display: table-row;
    vertical-align: inherit;
    border-color: black;
}
td,th{
    border: 3px solid #e4e7ea;
    padding: 15px 8px;
    vertical-align: top;
    line-height: 1.428571
}
</style>
