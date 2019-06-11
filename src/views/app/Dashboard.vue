<template>
<div>
  <cards />
  <charts />  
</div>
</template>

<script>
import charts from '@/components/helper/charts'
import cards from '@/components/helper/cards'

export default {
 
  
  components:{
    cards,
    charts
  }
}
</script>
