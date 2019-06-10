<template>
  <v-app id="foo" >
     <main> 
       <v-container align-center fluid fill-height>
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6 mt>
               <div dark class="text-xs-center login  white--text" >Login page</div>
              <v-card  class="loginOverlay ">
                <v-card-text class="pt-4">
                  <div>
                   
                      <v-form  ref="form" @submit.prevent="submitHandler">
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
                        <v-layout justify-space-between>

                            <v-btn 
                             type="submit"
                             class="blue"
                             >
                             Login
                             </v-btn>

                             <p class=" white--text">
                                Did not sign up ?   <br/>
                             <router-link 
                             to="/register"
                             
                             >
                                 Sign up
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
import messages from '@/utils/messages'

export default {
        name: 'login',
        data: () => ({
        email: '',
        password: ''
      }),
        validations:{
          email: {email,required},
          password: {required, minLength: minLength(6)}
        },

        methods: {
         async submitHandler () {
            if(this.$v.$invalid){
              this.$v.$touch()
              return
            }
            const formData = {
            email: this.email,
            password: this.password
          }

          try{
              await  this.$store.dispatch('login', formData)
              console.log(formData)
              this.$router.push('/')
          } catch (e){
            
          }
          
    }
          
        },
        mounted(){
          if(messages[this.$route.query.message]) {
            this.$message(messages[this.$route.query.message])
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