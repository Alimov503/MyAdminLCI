<template>
  <v-container
    fluid
    grid-list-xl>
    <h2 class="text-xs-center" >REGISTERING NEW GROUP</h2>
    <v-layout
      justify-center
      wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container py-0>
              <v-layout
                wrap
                justify-center
                align-end
                pa-3>
                <!-- Group name  -->
                <v-flex
                  xs12
                  md9>
                  <v-text-field
                    v-model="GroupName"
                    class="green-input"
                    label="Group name"
                    prepend-icon="mdi-account-multiple-outline" />
                </v-flex>

                <!-- teachers name -->
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    v-model="teachersName"
                    label="Teachers name"
                    class="purple-input"
                    prepend-icon="mdi-account" />
                </v-flex>

                <!-- Group type -->
                <v-flex
                  xs12
                  md5>
                  <v-text-field
                    v-model="groupType"
                    label="Group type"
                    class="purple-input"
                    prepend-icon="mdi-account-multiple-outline"/>
                </v-flex>

                <!-- Pick Subject -->
                <v-flex md9>

                  <h2 class="text-xs-center" >Choose Subject</h2>

                  <v-layout
                    wrap
                    justify-center>
                    <v-flex
                      v-for="subject in subjects"
                      :key="subject"
                      md2>
                      <v-checkbox
                        :label="subject"
                        :value="subject"
                        v-model="checkboxes"
                        color="primary"
                        hide-details
                        d-flex
                        md6
                      />
                    </v-flex>
                  </v-layout>
                </v-flex>

                <!-- About group -->

                <v-flex
                  xs9
                  md9>
                  <v-textarea
                    class="purple-input"
                    prepend-icon="mdi-file-document-box-multiple-outline"
                    label="About group"/>
                </v-flex>
                <v-flex
                  md4
                  class="text-xs-center">
                  <v-btn
                    d-flex
                    justify-end
                    class=" font-weight-light"
                    color="success"
                    @click="save">
                    <v-icon left>mdi-content-save</v-icon>
                    <span>Save</span>

                  </v-btn>
                </v-flex>

              </v-layout>

            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,

      subjects: ['English', 'Russian', 'Math', 'Korean', 'Arabic', 'Physics'],
      checkboxes: [],
      GroupName: '',
      teachersName: '',
      groupType: ''
    }
  },
  methods: {
    save () {

    }
  }
}
</script>

<style>

</style>
