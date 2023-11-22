<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ $route.params.id }}</ion-title>

        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="true">


      <ion-card-content>
        <ion-card color="medium">
          <ion-card-header>
            <ion-card-title>Do Home WOrk</ion-card-title>
            <ion-card-subtitle>2023/24/11 - 12:00</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>

          <ion-button shape="round" fill="solid" color="success">
            Done
          </ion-button>
          <ion-button shape="round" fill="solid" color="light">Failed</ion-button>
        </ion-card>
      </ion-card-content>


      <div v-if="$route.params.id  ==='ToDoList' " id="container">

        <ToDoList></ToDoList>
      </div>
      <div v-else-if="$route.params.id  ==='Add'" id="container">

        <AddWork></AddWork>

      </div>
      <div v-else-if="$route.params.id  ==='DoneWorks'" id="container">

        <DoneWork></DoneWork>

      </div>
      <div v-else-if="$route.params.id  ==='FailedWorks'" id="container">

        <FailedWork></FailedWork>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,} from '@ionic/vue';

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
