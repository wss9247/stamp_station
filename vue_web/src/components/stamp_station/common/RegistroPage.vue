<template>
  <div class="registropage">
   <hd></hd>
	<div class="position">>> 新用户注册</div>
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