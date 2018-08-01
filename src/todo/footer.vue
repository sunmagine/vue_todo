
<template>
    <div id="footer">
        <span>Writen By {{author}}</span>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                author:'magine'
            }
        }
    }
</script>

<style scoped>
#footer{
    color: white;
    text-align: center
}
</style>