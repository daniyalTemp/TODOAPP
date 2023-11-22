<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Add Task</ion-title>

        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>

    </ion-header>


    <ion-content :fullscreen="true">
      <div id="">
        <ion-input label="title" label-placement="floating" fill="solid" placeholder="Enter text"></ion-input>
        <br>

        <ion-item>
          <ion-select label="priority" label-placement="fixed" placeholder="Low">
            <ion-select-option value="Low">Low</ion-select-option>
            <ion-select-option value="Medium">Medium</ion-select-option>
            <ion-select-option value="High">High</ion-select-option>
          </ion-select>
        </ion-item>
        <br>
        <ion-item>
          <ion-label>Deadline</ion-label>
          <ion-datetime-button datetime="datetime"></ion-datetime-button>

        </ion-item>

        <ion-modal :keep-contents-mounted="true">
          <ion-datetime id="datetime"></ion-datetime>
        </ion-modal>
        <br>
        <ion-textarea label="Solid textarea" label-placement="floating" fill="solid"
                      placeholder="Enter description"></ion-textarea>
        <br>
        <ion-progress-bar v-if="this.Loading" type="indeterminate"></ion-progress-bar>

        <ion-button id="save" fill="outline" shape="round" color="success">Save</ion-button>
        <ion-alert
            trigger="save"
            header="saved"
            sub-header="your work saved"
            message=""
            @didDismiss="save()"
        ></ion-alert>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonApp, IonButtons, IonContent, IonInput, IonMenuButton, IonPage} from '@ionic/vue';
import {defineComponent} from 'vue';
import {IonAlert, IonButton} from '@ionic/vue';
import {IonDatetime, IonDatetimeButton, IonModal} from '@ionic/vue';
import {IonHeader, IonProgressBar, IonTitle, IonToolbar} from '@ionic/vue';

export default defineComponent({
  data() {
    return {
      Loading: false,
    }
  },
  methods: {
    setLoading() {

    },
    save() {

      this.Loading = true;
      setTimeout(() => {
        this.$router.replace('/')
      }, 2000);
      // this.Loading=false;
    }

  },
  components: {
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
const alertButtons = ['Action']
</script>