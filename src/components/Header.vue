<template>
  <div class="header">
    <router-link to="/"
      ><img src="../assets/logo.png" alt="" class="company-logo"
    /></router-link>
    <ul>
      <li>
        <router-link to="/contacts" class="contacts-header"
          >Контакты</router-link
        >
      </li>
      <li>
        <button
          v-if="!this.$store.state.isLogin"
          type="button"
          class="login-header"
          @click="openLoginForm"
        >
          Войти
        </button>
        <button v-else type="button" class="login-header" @click="logout">
          Выйти
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    openLoginForm () {
      // eslint-disable-next-line no-debugger

      this.$store.commit('triggerLoginForm')
    },
    logout () {
      this.$store.commit('logOut')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 62px;
  margin-top: 18px;
  border-bottom: 1px solid #000000;
  padding: 0 70px;
  .company-logo {
    width: 54px;
    height: 23px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 60px;
    margin-right: 60px;
    li {
      .login-header {
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        cursor: pointer;
        border: 0px;
        background: none;
        color: #ff685b;

        border: 2px solid #ff685b;
        border-radius: 7px;
        padding: 8px 60px;
        &:hover {
        }
        &:active {
        }
        &:focus {
        }
      }
      .contacts-header {
        font-family: Open Sans;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.20000000298023224px;
        text-align: center;
        color: #737373;
        text-decoration: none;
        &:hover {
        }
        &:active {
        }
        &:focus {
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .header {
    padding: 0px;
    padding-left: 10px;

    ul {
      column-gap: 20px;
      margin-right: 10px;
      li {
        .login-header {
          padding: 6px 20px;
          &:hover {
          }
          &:active {
          }
          &:focus {
          }
        }
        .contacts-header {
          font-family: Open Sans;
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0.20000000298023224px;
          text-align: center;
          color: #737373;
          text-decoration: none;
          &:hover {
          }
          &:active {
          }
          &:focus {
          }
        }
      }
    }
  }
}
</style>
