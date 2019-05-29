<template>
  <v-container fluid dark>
    <v-layout justify-center>
      <v-flex
        d-flex
        justify-start>
        <v-card
        dark
          class="pa-3 mt-3"
          max-width="900px">
          <v-layout
            wrap
            justify-space-between>
            <v-flex
              xs12
              sm5
              d-flex>
              <v-select
                :items="subjects"
                v-model="subject"
                label="Subjects"
                outline/>
            </v-flex>
            <v-flex
              xs12
              sm5
              d-flex>
              <v-select
                :items="groups"
                label="Groups"
                outline/>
            </v-flex>
            <!-- List of students -->
             
                <v-flex
              xs12
              sm5>
              <h2 class="grey--text text-xs-center">Present Students</h2>
               <transition name = "fade">

              <v-list>
                <v-list-tile
                  v-for="(student,index) in students"
                  :key="student.name"
                  avatar
                  class="success"
                  @click="absent(index)"
                >
                  <v-list-tile-content>
                    <v-list-tile-title v-text="student.name"/>
                  </v-list-tile-content>

                  <v-list-tile-avatar>
                    <img :src="student.avatar">
                  </v-list-tile-avatar>
                </v-list-tile>
                <v-divider/>
              </v-list>
              </transition>
            </v-flex>

            <v-flex
              xs12
              sm5>
              <h2 class="grey--text text-xs-center">Absent Students</h2>
              <v-list>
                <v-list-tile
                  v-for="(student,index) in absents"
                  :key="student.name"
                  avatar
                  class="warning "
                  @click="present(index)"
                >
                  <v-list-tile-content>
                    <v-list-tile-title v-text="student.name"/>
                  </v-list-tile-content>

                  <v-list-tile-avatar>
                    <img :src="student.avatar">
                  </v-list-tile-avatar>
                </v-list-tile>
              </v-list>
            </v-flex>


          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      subject: '',
      absents: [],
      students: [
        {
          name: 'Adkham Mukhammadjonov',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        },
        {
          name: 'Alisherbek Rakhimov',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        },
        {
          name: 'Sardorbek Rakhimov',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        },
        {
          name: 'Salimbek Karimboyev',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        }
      ],
      subjects: ['English', 'Mathematics', 'Physics', 'Russian'],
      grps: {
        English: ['E1', 'E2', 'E3'],
        Mathematics: ['M1', 'M2', 'M3'],
        Physics: ['P1', 'P2', 'P3'],
        Russian: ['R1', 'R2', 'R3']
      }
    }
  },
  computed: {
    groups: function () {
      return this.grps[this.subject]
    }
  },
  methods: {
    absent (index) {
      this.absents.push(this.students[index])
      this.students.splice(index, 1)
    },
    present (index) {
      this.students.push(this.absents[index])
      this.absents.splice(index, 1)
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
            transition: opacity 2s
         }
         .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0
         }
</style>
