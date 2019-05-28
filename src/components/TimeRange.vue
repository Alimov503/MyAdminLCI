<template>
  <v-container>
    <v-layout>
      <!-- <v-flex
                shrink
                style="width: 60px"
            ><v-text-field
                     v-model="range[0]"
                    class="mt-0"
                    hide-details
                    single-line
                    type="number"
                ></v-text-field>
            </v-flex> -->
      <v-flex>
        <v-range-slider
          v-model="range"
          :max="100"
          :min="5"
          :step="1"
          thumb-label="always"
        />
      </v-flex>
      <!-- <v-flex
             shrink
             style="width: 60px"
            >
                <v-text-field
                    v-model="range[1]"
                    class="mt-0"
                    hide-details
                    single-line
                    type="number"
                >
                </v-text-field>
            </v-flex> -->

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      a: 5,
      b: 100,
      b_prev: 100
    }
  },
  computed: {
    range: {
      get: function () {
        return [5, 100]
      },
      set: function (value) {
        console.log('b_prev', this.b_prev)
        console.log('value', value)

        if (value[1] - this.b_prev < 0) {
          if (value[1] - value[0] < 6) {
            value[0] = value[1] - 5
          }
          this.b_prev = value[1]
        } else if (value[1] - value[0] < 6) {
          if (value[1] >= 100 && value[1] - value[0] < 6) {
            value[0] = value[1] - 5
          } else {
            value[1] = value[0] + 5
            this.b_prev = value[1]
          }
        } else {
          this.b_prev = value[1]
        }
      }
    }
  }
}
</script>

<style>

</style>
