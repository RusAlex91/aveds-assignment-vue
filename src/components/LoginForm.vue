<template>
  <div class="modal">
    <form class="login" @submit="checkForm">
      <fieldset>
        <legend class="legend">Вход</legend>

        <div class="input">
          <input
            v-model="login"
            id="loginInput"
            type="text"
            placeholder="Логин"
            required
          />
        </div>

        <div class="password-input-wrapper">
          <input
            id="passwordInput"
            type="password"
            placeholder="Пароль"
            required
            v-model="password"
          />
          <span class="password-error-msg">{{ errorMsg }}</span>
        </div>

        <button class="modal-submit-button">
          Войти
        </button>
      </fieldset>
    </form>
    <button @click="closeLoginForm" class="close-modal">X</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      login: null,
      password: null,
      errorMsg: null
    }
  },
  methods: {
    authCheck: async function () {
      await this.$store.dispatch('LogIn', {
        login: this.login,
        password: this.password
      })
      // eslint-disable-next-line no-debugger

      if (this.$store.state.isLogin) {
        this.$router.push('/personal')
        this.$store.commit('triggerLoginForm')
      }
    },
    checkForm: function (e) {
      let pattern = new RegExp('^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$')
      //понятия не имею зачем проверять логин
      // 8 занков или больше, как минимум 2 цифры
      //не очень понимаю, зачем тестировать пароль на входе, а не на регистрации

      if (pattern.test(this.password)) {
        this.authCheck()
      } else {
        this.errorMsg = 'not ok'
      }

      e.preventDefault()
    },
    closeLoginForm: function () {
      this.$store.commit('triggerLoginForm')
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: relative;
  z-index: 9999;

  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
  border: 1px solid salmon;
  background: rgba(238, 238, 238, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    fieldset {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 10px;
      .legend {
        margin-bottom: 10px;
        font-size: 20px;
      }
      #loginInput {
        width: 150px;
      }
      #passwordInput {
        width: 150px;
      }
      .password-input-wrapper {
        display: flex;
        flex-direction: column;
      }
      .modal-submit-button {
        &:hover {
        }
        &:active {
        }
        &:focus {
        }
      }
      input {
      }
      .password-error-msg {
      }
    }
    .feedback {
      br {
      }
    }
  }
  .close-modal {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
</style>
