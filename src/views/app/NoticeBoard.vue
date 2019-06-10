<template>
 <div>

<v-layout row wrap>
  <v-flex xs4>
    <v-card class="red" height="400px">
      Fixed Height Card
    </v-card>
  </v-flex>
  <v-flex xs4 class="purple">
    <v-card class="green">
        First Card
    </v-card>
    <v-card class="green">
        Second Card
    </v-card>
  </v-flex>

<v-flex>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-textarea
          name="input-7-1"
          label="Default style"
          value="The "
          hint="Hint text"
          v-model.lazy="textArea"
        ></v-textarea>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="save()"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


    <v-card>
      {{textArea}}
    </v-card>

</v-flex>
</v-layout>

 </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      dialog: false,
      textArea: ['']
    }
  },
  methods:{
    save() {
      this.dialog = false
    }
  }

}
</script>

<style>

</style>
