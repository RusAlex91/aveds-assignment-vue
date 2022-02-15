<template>
  <Header />
  <router-view />
  <div
    v-if="showLogin"
    @click="this.$store.state.loginFromIsOpen = false"
    class="modal-overlay"
  ></div>
  <Login v-if="showLogin" />
</template>

<script>
import Header from '@/components/Header.vue'
import Login from '@/components/LoginForm.vue'

export default {
  data: function () {
    return {
      showLogin: this.$store.state.loginFromIsOpen
    }
  },
  components: { Header, Login },
  methods: {},
  watch: {
    '$store.state.loginFromIsOpen': {
      deep: true,
      handler () {
        this.showLogin = this.$store.state.loginFromIsOpen
      }
    }
  }
}
</script>

<style>
@import 'styles/reset.css';
#app {
  position: relative;
}

.modal-overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
