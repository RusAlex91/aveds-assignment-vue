<template>
  <div class="home">
    <div class="title-and-contacts">
      <h1>Место для получения медицинской помощи</h1>
      <ul>
        <li>
          <button type="button" class="login-main" @click="showLogin">
            Войти
          </button>
        </li>
        <li>
          <router-link to="/contacts" class="contacts-main"
            >Контакты</router-link
          >
        </li>
      </ul>
    </div>
    <!-- todo разделить на отдельные компоненты -->
    <div class="health-services">
      <div class="card">
        <div class="card-inner-wrapper">
          <img
            src="../assets/heart.png"
            alt=". Условный значок сердца в красном кружочке."
          />
          <h2>Онлайн-прием</h2>
          <hr />
          <span>Рыба текст</span>
        </div>
      </div>
      <div class="card">
        <div class="card-inner-wrapper">
          <img
            src="../assets/stethoscope.png"
            alt=". Условный значок стетоскопа в красном кружочке."
          />
          <h2>Онлайн-прием</h2>
          <hr />
          <span>Рыба текст</span>
        </div>
      </div>
      <div class="card">
        <div class="card-inner-wrapper">
          <img
            src="../assets/doc-notes.png"
            alt=". Условный значок записей врача в красном кружочке."
          />
          <h2>Онлайн-прием</h2>
          <hr />
          <span>Рыба текст</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  methods: {
    showLogin: function () {
      this.$store.commit('triggerLoginForm')
    }
  }
}
</script>

<style lang="scss">
.home {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 200px;
  padding-right: 200px;

  .title-and-contacts {
    margin-top: 100px;
    margin-bottom: 100px;
    row-gap: 30px;
    h1 {
      width: 730px;
      height: 160px;
      font-family: Montserrat;
      font-size: 58px;
      font-style: normal;
      font-weight: 700;
      line-height: 80px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
    }
    ul {
      margin-top: 30px;
      display: flex;
      align-items: center;
      column-gap: 10px;
      li {
      }
      .login-main {
        width: 155px;
        height: 52px;
        border: 0px;
        background: #ff685b;
        border-radius: 5px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.20000000298023224px;
        text-align: center;
        color: white;
        &:hover {
        }
        &:active {
        }
        &:focus {
        }
      }
      .contacts-main {
        width: 155px;
        height: 52px;
        padding: 15px 40px;
        border: 1px solid #ff685b;
        text-decoration: none;
        color: #ff685b;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.20000000298023224px;
        text-align: center;

        border-radius: 5px;
        &:hover {
        }
        &:active {
        }
        &:focus {
        }
      }
    }
  }
  .health-services {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    .card {
      width: 328px;
      height: 248px;

      .card-inner-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 35px 40px 35px 40px;
        row-gap: 20px;
      }
      box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
      img {
        width: 72px;
        height: 72px;
      }
      span {
        color: #737373;
      }
      hr {
        width: 50px;
        margin-left: 0px;
        border: 1px solid #ff685b;
      }
    }
  }
}
@media (max-width: 400px) {
  .home {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 0px;
    padding-right: 0px;

    .title-and-contacts {
      margin-top: 55px;
      margin-bottom: 55px;
      row-gap: 30px;

      h1 {
        width: 380px;
        height: 89px;
        font-family: Montserrat;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 39px;
        letter-spacing: 0.20000000298023224px;
        text-align: center;
      }
      ul {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        li {
        }
        .login-main {
          width: 155px;
          height: 52px;
          border: 0px;
          background: #ff685b;
          border-radius: 5px;
          cursor: pointer;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: 0.20000000298023224px;
          text-align: center;
          color: white;
          &:hover {
          }
          &:active {
          }
          &:focus {
          }
        }
        .contacts-main {
          width: 155px;
          height: 52px;
          padding: 15px 40px;
          border: 1px solid #ff685b;
          text-decoration: none;
          color: #ff685b;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: 0.20000000298023224px;
          text-align: center;

          border-radius: 5px;
          &:hover {
          }
          &:active {
          }
          &:focus {
          }
        }
      }
    }
    .health-services {
      display: flex;
      flex-direction: column;

      column-gap: 30px;
      .card {
        width: 328px;
        height: 248px;

        hr {
          width: 50px;
          border: 1px solid red;
          margin-left: 0;
        }
        .card-inner-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 35px 40px 35px 40px;
          row-gap: 20px;
        }
        box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
        img {
          width: 72px;
          height: 72px;
        }
      }
    }
  }
}
</style>
