<template>
<div>
    <h2 class="grey--text lighten-2 text-xs-center ma-3 ">Incoming by subjects</h2>
    <v-container>
        <v-layout wrap  justify-space-around>
            
            <v-flex
                xs10
                md12
                sm12
                lg4
                mr-2
                v-for="(subject, i) in subjects"
                :key="i"
            >
            <material-stats-card
            :color="subject.color"
            :icon= "subject.icon"
            :value= "subject.name"
            sub-icon="mdi-cash"
            :sub-text="subject.cash"  
            :to="subject.to"         
            />
            </v-flex>
         
        </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    data(){
        return {
            num: 12,
            subjects : [
                {name: "English",
                icon:"Eng",
                cash: '11.000.000',
                color: 'info',
                to: '/incoming-by-groups'
                },
                {name: "Russian",
                icon:"Ru",
                cash: '8.000.000',
                color: 'red',
                to: '/incoming-by-groups'
                },
                {name: "Arabic",
                icon:"Ar",
                cash: '9.000.000',
                color: 'green',
                to: '/incoming-by-groups'
                },
                {name: "French",
                icon:"Fr",
                cash: '5.000.000',
                color: 'orange',
                to: '/incoming-by-groups'
                },
            ]
        }
    }
}
</script>

<style>

</style>
