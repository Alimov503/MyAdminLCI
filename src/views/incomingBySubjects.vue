<template>
  <div>
    <h2 class="grey--text lighten-2 text-xs-center ma-3 ">Incoming by subjects</h2>
    <v-container>
      <v-layout
        wrap
        justify-space-around>

        <v-flex
          v-for="(subject, i) in subjects"
          :key="i"
          xs10
          md12
          sm12
          lg4
          mr-2
        >
          <material-stats-card
            :color="subject.color"
            :icon= "subject.icon"
            :value= "subject.name"
            :sub-text="subject.cash"
            :to="subject.to"
            sub-icon="mdi-cash"
          />
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 12,
      subjects: [
        { name: 'English',
          icon: 'EN',
          cash: '11.000.000',
          color: 'info',
          to: '/incoming-by-groups'
        },
        { name: 'Russian',
          icon: 'RU',
          cash: '8.000.000',
          color: 'red',
          to: '/incoming-by-groups'
        },
        { name: 'Arabic',
          icon: 'AR',
          cash: '9.000.000',
          color: 'green',
          to: '/incoming-by-groups'
        },
        { name: 'French',
          icon: 'FR',
          cash: '5.000.000',
          color: 'orange',
          to: '/incoming-by-groups'
        }
      ]
    }
  }
}
</script>

<style>

</style>
