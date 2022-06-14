<template>
  <div class="flex-center absolute-center">
    <q-avatar size="150px" class="fx-pic" >
      <img src="../assets/login.png" />
    </q-avatar>
  </div>

</template>

<script>
export default {
  name: "loginLogo",
};
</script>
<style lang="css" scoped>
body {
  background-color: #000;
}

div {
  top: calc(50% - 100px);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
}
</style>
// g
