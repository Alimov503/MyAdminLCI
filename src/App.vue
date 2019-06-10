<template>
  <v-app >
    <component :is="layout">     
    <router-view />
    </component> 
  </v-app>
</template>

<script>

import EmptyLayout from '@/layouts/emptyLayout'
import MainLayout from '@/layouts/mainLayout'

export default {
  computed: {
    layout(){
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
}
</script>


<style lang="scss">
@import '@/styles/index.scss';
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
