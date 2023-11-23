<template>
  <ion-page v-if="this.LoginForm">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login</ion-title>

        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="true">
      <div id="container">
        <ion-img style="  margin-left: 12%;"
                 src="../public/login.png"
        ></ion-img>
        <ion-input label="Email" label-placement="floating" fill="solid" placeholder="Enter Email"></ion-input>
        <br>
        <br>
        <br>
        <ion-input label="password" label-placement="floating" fill="solid" placeholder="Enter password"></ion-input>


        <ion-progress-bar v-if="this.Loading" type="indeterminate"></ion-progress-bar>

        <br>
        <br>
        <br>
        <ion-button id="login" fill="outline" shape="round" color="success" v-on:click="Login">Login</ion-button>
        <ion-button id="register" fill="solid" shape="round" color="primary" v-on:click="Register">Register</ion-button>

      </div>
    </ion-content>


  </ion-page>

  <ion-page v-if="this.RegisterForm">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Register</ion-title>

        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="true">
      <div id="container">
        <ion-img

            src="../public/Register.png"
        ></ion-img>
        <br>
        <br>
        <br>
        <ion-input label="Email" label-placement="floating" fill="solid" placeholder="Enter Email"></ion-input>
        <br>
        <br>
        <br>
        <ion-input label="password" label-placement="floating" fill="solid" placeholder="Enter password"></ion-input>


        <ion-progress-bar v-if="this.Loading" type="indeterminate"></ion-progress-bar>

        <br>
        <br>
        <br>
        <ion-button id="login" fill="outline" shape="round" color="success" v-on:click="Login">Login</ion-button>
        <ion-button id="register" fill="solid" shape="round" color="primary" v-on:click="Register">Register</ion-button>

      </div>
    </ion-content>


  </ion-page>
</template>

<script lang="ts">
import {
  alertController,
  IonButtons,
  IonContent, IonDatetime, IonDatetimeButton,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonModal,
  IonPage, IonProgressBar,
  IonTitle,
  IonToolbar

} from '@ionic/vue';
import {IonImg} from '@ionic/vue';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,} from '@ionic/vue';


export default defineComponent({
  data() {
    return {
      Loading: false,
      LoginForm: true,
      RegisterForm: false,
    }
  },

  methods: {
    logResult(){

    },
    Register() {
      if (this.RegisterForm) {
        setTimeout(() => {
          this.$router.replace('/')
        }, 1000);
      } else {
        this.RegisterForm = true;
        this.LoginForm = false;
      }
    },
    Login() {
      if (this.LoginForm) {
        this.Loading = true;
        setTimeout(() => {
          this.$router.replace('/')
        }, 1000);
      } else {
        this.RegisterForm = false;
        this.LoginForm = true;
      }
    },
    setLoading() {

    },
    save() {

      this.Loading = true;
      setTimeout(() => {
        this.$router.replace('/')
      }, 1000);
      // this.Loading=false;
    }

  },
  components: {
    IonImg,
    IonMenuButton,
    IonButtons,
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonHeader,
    IonProgressBar,
    IonTitle,
    IonToolbar
  },
});
import ToDoList from "../views/ToDoList.vue";
import AddWork from "../views/AddWork.vue";
import DoneWork from "@/views/DoneWork.vue";
import FailedWork from "@/views/FailedWork.vue";
import {defineComponent} from "vue";


</script>


<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
