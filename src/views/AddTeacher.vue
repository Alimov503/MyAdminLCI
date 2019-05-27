<template>
  <v-container fluid grid-list-xl>
    <h2  class="text-xs-center">REGISTERING NEW TEACHER</h2>
    <v-layout justify-center  wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-container py-0>
              <v-layout wrap justify-center align-end pa-3>
                <!-- Full name  -->
                <v-flex xs12 md9>
                  <v-text-field class="green-input"
                   label="Full Name" v-model="FullName"
                   prepend-icon="mdi-account" />
                </v-flex>

                <!-- Phone nuber      -->
                <v-flex xs12 md4>
                  <v-text-field label="Phone number"
                   v-model="Phone" class="purple-input" 
                   prepend-icon="mdi-cellphone"  />
                </v-flex>

                <!-- Email -->
                <v-flex xs12 md5>
                  <v-text-field label="Email Address"
                   v-model="Email" class="purple-input"
                     prepend-icon="mdi-at"/>
                </v-flex>

                <!-- Emergency call number -->
                <v-flex xs12 md4>
                  <v-text-field
                    label="Emergency call number"
                    v-model="Emergency"
                    class="purple-input"
                    prepend-icon="mdi-phone-in-talk"
                  />
                </v-flex>

                <!-- Birthday Calendar -->

                <v-flex xs12 sm6 md5>
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Picker without buttons"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                  </v-menu>
                </v-flex>

                <!-- Pick Subject -->
                <v-flex md9>
                
                  <h2 class="text-xs-center" >Choose Subject</h2>

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

                <!-- Adresss -->
                <v-flex xs12 md9>
                  <v-text-field label="Adress"
                   v-model="Adress" class="purple-input"
                    prepend-icon="mdi-map-marker"/>
                </v-flex>

                <!-- image uploadd -->
                
                <v-flex md9>
                  <img :src="imageUrl"
                   class="pl-4" height="150" v-if="imageUrl">
                  <v-text-field
                    label="Select Image"
                    @click="pickFile"
                    v-model="imageName"
                    prepend-icon="mdi-account-box-outline"
                  ></v-text-field>

                      <!-- File upload -->
                  <input
                    type="file"
                    style="display: none"
                    ref="image"
                    accept="image/*"
                    @change="onFilePicked"
                  >
                   <v-text-field
                    label="Select File"
                    @click="pickDocFile"
                    v-model="docName"
                    prepend-icon="mdi-file-document"
                  ></v-text-field>
                  <input
                    type="file"
                    style="display: none"
                    ref="doc"
                    accept="application/*"
                    @change="onDocPicked"
                  >
                </v-flex>


                  <!-- teachers fee -->
                <v-flex xs12 md9>
                  <v-text-field class="purple-input"
                   label="Fee"
                   prepend-icon="mdi-cash" 
                   />
                </v-flex>

                <v-flex md9>
                  <TimeRange />
                </v-flex>


                  <!-- About -->
                <v-flex xs9 md9>
                  <v-textarea class="purple-input"
                   label="About Teacher"
                   prepend-icon="mdi-file-document-box-multiple-outline"/>
                </v-flex>
              <v-flex md4 class="text-xs-center">
                <v-btn d-flex justify-end class="
                 font-weight-light" color="success" @click="save">
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

import TimeRange from '@/components/TimeRange'

export default {
  components: {
    TimeRange
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      imageName: "",
      docName: "",
      docFile: "",
      imageUrl: "",
      imageFile: "",

      subjects: ["English", "Russian", "Math", "Korean", "Arabic", "Physics"],
      checkboxes: [],
      FullName: "",
      Phone: "",
      Email: "",
      Emergency: "",
      birthday: "",
      Adress: "",
      Payment: "",
      
    };
  },
  methods: {

    save() {
      console.log(this.docFile);
      console.log(this.imageFile);
    },
    pickFile() {
      this.$refs.image.click();
    },
    pickDocFile() {
      this.$refs.doc.click();
    },
    onDocPicked(e){
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.docName = files[0].name;
        if (this.docName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.docFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.docName = "";
        this.docFile = "";
      }
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    }
  }
};
</script>

<style>

</style>

