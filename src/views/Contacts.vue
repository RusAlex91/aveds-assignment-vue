<template>
  <div>
    <h1 class="contact-page-title">Контакты</h1>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  components: {}
}
</script>

<style lang="scss">
.contact-page-title {
  margin-top: 180px;
  margin-left: 200px;
  font-family: Montserrat;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
}

// personal page

@media (max-width: 400px) {
  .contact-page-title {
    margin-top: 180px;
    margin-left: 30px;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }
}
</style>
