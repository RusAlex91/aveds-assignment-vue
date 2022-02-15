<template>
  <div class="personal-page-container">
    <h1 class="personal-page-greeting">
      Привет,
      {{ userName }}
    </h1>
    <ul>
      <li>
        <button type="button" class="personal-page-logout" @click="logout">
          Выйти из аккуанта
        </button>
      </li>
      <li>
        <router-link to="/contacts" class="personal-page-contacts"
          >Перейти в контакты</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userName: this.$store.state.currentUserData.name
    }
  },
  name: 'Personal',
  components: {},
  methods: {
    logout () {
      this.$store.commit('logOut')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.personal-page-container {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 120px;
  row-gap: 30px;
  .personal-page-greeting {
    font-family: Montserrat;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }
  ul {
    display: flex;
    align-items: center;
    column-gap: 10px;
    li {
      .personal-page-logout {
        width: 228px;
        height: 52px;
        border: none;
        background: #ff685b;
        color: white;
        padding: 15px 40px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
        }
        &:active {
        }
        &:focus {
        }
      }
      .personal-page-contacts {
        width: 228px;
        height: 52px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        border: 1px solid #ff685b;
        letter-spacing: 0.20000000298023224px;
        text-align: center;
        color: #ff685b;
        width: 228px;
        height: 52px;
        border-radius: 5px;
        text-decoration: none;
        padding: 15px 40px;
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
  .personal-page-container {
    margin-top: 60px;
    row-gap: 30px;
    margin-left: 0px;
    .personal-page-greeting {
      font-family: Montserrat;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 80px;
      letter-spacing: 0.20000000298023224px;
      text-align: center;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 10px;
      li {
        .personal-page-logout {
          width: 128px;
          height: 52px;
          border: none;
          background: #ff685b;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
          }
          &:active {
          }
          &:focus {
          }
        }
        .personal-page-contacts {
          cursor: pointer;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 22px;
          border: 1px solid #ff685b;
          letter-spacing: 0.20000000298023224px;
          text-align: center;
          color: #ff685b;
          width: 128px;
          height: 52px;
          border-radius: 5px;
          text-decoration: none;
          padding: 15px 20px;
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
