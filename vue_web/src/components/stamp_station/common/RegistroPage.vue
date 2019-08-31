<template>
  <div id="registropage">
    <hd></hd>
    <div class="position">&gt;&gt; 新用户注册</div>
    <div>
        <registro></registro>
    </div>
  </div>
</template>
<script>
import hd from "./Header.vue"
import registro from "./Registro.vue"
export default {
  data(){
    return{}
  },
   components:{hd,registro}
}
</script>
<style scoped >
#registropage .position{
  width:1002px;
  margin:0 auto;
}
</style>