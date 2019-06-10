<template>
    <div >
    <core-toolbar  @click="isOpen = !isOpen"/>

    <core-drawer v-model="isOpen"/>
    
    <core-filter />
    <core-view :class="{full: isOpen}"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isOpen: true
        }
    },
    
}
</script>


<style>
.none{
    padding: 0;
    margin: 0
}
</style>

