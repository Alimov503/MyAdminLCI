<template>
  <v-container fluid grid-list-xl>
    <h2  class="text-xs-center" >REGISTERING NEW GROUP</h2>
    <v-layout justify-center  wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container py-0>
              <v-layout wrap justify-center align-end pa-3>
                <!-- Group name  -->
                <v-flex xs12 md9>
                  <v-text-field class="green-input"
                   label="Group name" v-model="GroupName" prepend-icon="mdi-account-multiple-outline" />
                </v-flex>

                <!-- teachers name -->
                <v-flex xs12 md4>
                  <v-text-field label="Teachers name" v-model="teachersName" 
                  class="purple-input" prepend-icon="mdi-account"  />
                </v-flex>

                <!-- Group type -->
                <v-flex xs12 md5>
                  <v-text-field label="Group type" v-model="groupType"
                   class="purple-input"  prepend-icon="mdi-account-multiple-outline"/>
                </v-flex>
               
                <!-- Pick Subject -->
                <v-flex md9>
                
                  <h2  class="text-xs-center" >Choose Subject</h2>

                  <v-layout wrap justify-center>
                    <v-flex md2 v-for="subject in subjects" :key="subject">
                      <v-checkbox
                        :label="subject"
                        color="primary"
                        :value="subject"
                        v-model="checkboxes"
                        hide-details
                        d-flex
                        md6
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-flex>

                  <!-- About group -->

                <v-flex xs9 md9>
                  <v-textarea class="purple-input" 
                  prepend-icon="mdi-file-document-box-multiple-outline" 
                  label="About group"/>
                </v-flex>
              <v-flex md4 class="text-xs-center">
                <v-btn d-flex justify-end class=" font-weight-light" color="success" @click="save">
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
  
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      

      subjects: ["English", "Russian", "Math", "Korean", "Arabic", "Physics"],
      checkboxes: [],
      GroupName: "",
      teachersName: "",
      groupType : ""
    };
  },
  methods: {
    save() {
      
    }
  }
};
</script>

<style>

</style>

