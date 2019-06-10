<template>
  <v-app id="foo" >
     <main> 
       <v-container align-center fluid fill-height>
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6 mt>
               <div dark class="text-xs-center login  white--text" >Register page</div>
              <v-card  class="loginOverlay ">
                <v-card-text class="pt-4">
                  <div>
                   
                      <v-form ref="form" @submit.prevent="submitHandler">
                         <v-text-field
                          label="Enter your e-mail address"      
                          dark
                          type="text"
                          v-model.trim="email"
                          :class="{invalid: ($v.email.$dirty && $v.email.required) || ($v.email.$dirty && $v.email.email)}"
                        ></v-text-field>
                        <strong 
                           class="red--text"
                           dark
                          v-if="$v.email.$dirty && !$v.email.required"
                          >
                          Поле Email не должно быть пустым
                          </strong>
                          <strong 
                         class="red--text"
                          v-else-if="$v.email.$dirty && !$v.email.email"
                        >
                        Введите корретный Email
                        </strong>
                        <v-text-field
                          label="Enter your password"                   
                          dark
                          v-model.trim="password"
                          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                        >
                        </v-text-field>
                        <strong 
                         class="red--text"
                          v-if="$v.password.$dirty && !$v.password.required"
                        >
                          Введите пароль
                        </strong>
                        <strong 
                          class="red--text"
                          v-else-if="$v.password.$dirty && !$v.password.minLength"
                        >
                          Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
                        </strong>

                        <v-text-field
                        label="Enter your name"
                        required
                        dark
                        v-model.trim="name"
                        :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
               
                        >
                            
                        </v-text-field>
                        <strong 
                          class="red--text"
                          v-if="$v.name.$dirty && !$v.name.required"
                        >
                        Введите ваше имя
                         </strong>
                         <strong 
                          class="red--text"
                          v-else-if="$v.name.$dirty && !$v.name.minLength"
                        >
                          Имя должен быть {{$v.name.$params.minLength.min}} символов. Сейчас он {{name.length}}
                        </strong>


                            <p>
                              <label for="">
                                <input type="checkbox" v-model="agree" name="" id=""> 
                                <span
                                class="white--text"
                                >  I agree with rules</span>
                              </label>
                            </p>
                        <v-layout justify-space-between>
                            <v-btn 
                            type="submit"
                             
                             class="blue"
                             >
                             Sign up
                             </v-btn>
                             <p class=" white--text">
                               Have an account ? 
                             <router-link 
                             tag="strong"
                             to="/login"                     
                             >
                                 Login
                             </router-link>
                             </p>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
        
     </main>
   </v-app>

</template>

<script>

import {email, required, minLength} from 'vuelidate/lib/validators'

export default {

         data: () => ({
          email: '',
          password: '',
          name: '',
          agree: false

        }),
          validations:{
            email: {email,required},
            password: {required, minLength: minLength(6)},
            name: {required, minLength: minLength(3)},
            agree:{checked: v => v}
          },
          methods: {
           async submitHandler () {
              if(this.$v.$invalid){
                this.$v.$touch()
                return
              }

              const formData = {
              email: this.email,
              password: this.password,
              name: this.name,             
            }

            try{
               await this.$store.dispatch('register', formData)
               console.log(formData)
              this.$router.push('/')
            } catch(e) {  }

        
            
      }

  }
}
</script>


<style scoped>
#foo {
  background-image: 
  url("https://images.unsplash.com/photo-1497733942558-e74c87ef89db?dpr=1&auto=compress,format&fit=crop&w=1650&h=&q=80&cs=tinysrgb&crop=");
  background-size: cover;
  overflow:hidden;
}
.loginOverlay {
  background:rgba(33,150,243,0.1);
  
}
.login {
  background:rgba(33,150,243,0.6);
  padding: 40px
  
}
.mt{
  margin-top: 60px
}
.photoCredit{
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>