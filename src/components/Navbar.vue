<template>
<nav>
    <ul class="customnavbar">
        <li><img class="smiteicon" src="../assets/smiteicon.png"></li>
        <li><a href="/">Home</a></li>
        <li><a href="/PlayerInfo">Player Info</a></li>
        <li><a href="/Tournaments">Tournaments</a></li>
    </ul>
</nav>

</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #4157A8;
}

li {
  float: left;
  display: inline;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #4b66c5;
  color: white;
}

.smiteicon {
    position: relative;
    max-height: 40px;
    margin: 5px;
    margin-left: 20px;
    vertical-align: middle;
}
</style>