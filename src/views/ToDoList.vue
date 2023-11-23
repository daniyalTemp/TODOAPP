<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>List</ion-title>

        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content>
      <ion-list>
        <ion-card-content>

          <ion-item v-for="(item, index) in items">
            <ion-card v-if="item=='medium'" color="medium">
              <ion-card-header>
                <ion-card-title>Do Home WOrk</ion-card-title>
                <ion-card-subtitle>2023/24/11 - 12:00</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>

              <ion-row no-padding justify-content-center>
                <ion-col text-left size="6">
                  <ion-button style="  margin-left: 30%;" shape="round" fill="solid" color="success">
                    Done
                  </ion-button>
                </ion-col>
                <ion-col text-right size="6">
                  <ion-button shape="round" fill="solid" color="light">Failed</ion-button>

                </ion-col>
              </ion-row>


            </ion-card>
            <ion-card v-if="item=='danger'" color="warning">
              <ion-card-header>
                <ion-card-title>Do Home WOrk</ion-card-title>
                <ion-card-subtitle>2023/24/11 - 12:00</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>

              <ion-row no-padding justify-content-center>
                <ion-col text-left size="6">
                  <ion-button style="  margin-left: 30%;" shape="round" fill="solid" color="success">
                    Done
                  </ion-button>
                </ion-col>
                <ion-col text-right size="6">
                  <ion-button shape="round" fill="solid" color="light">Failed</ion-button>

                </ion-col>
              </ion-row>


            </ion-card>
            <ion-card v-if="item=='success'" color="success">
              <ion-card-header>
                <ion-card-title>Do Home WOrk</ion-card-title>
                <ion-card-subtitle>2023/24/11 - 12:00</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>

              <ion-row no-padding justify-content-center>
                <ion-col text-left size="6">
                  <ion-button style="  margin-left: 30%;" shape="round" fill="solid" color="success">
                    Done
                  </ion-button>
                </ion-col>
                <ion-col text-right size="6">
                  <ion-button shape="round" fill="solid" color="light">Failed</ion-button>

                </ion-col>
              </ion-row>


            </ion-card>

            <!--        <ion-avatar slot="start">-->
            <!--          <img :src="'https://picsum.photos/80/80?random=' + index" alt="avatar" />-->
            <!--        </ion-avatar>-->
            <!--        <ion-label>{{ item }}</ion-label>-->
          </ion-item>

        </ion-card-content>
      </ion-list>
      <ion-infinite-scroll @ionInfinite="ionInfinite">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>

</template>

<script lang="ts">
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
  InfiniteScrollCustomEvent, IonCardContent, IonButton, IonCardSubtitle, IonCard, IonCardTitle, IonCardHeader,
} from '@ionic/vue';
import {defineComponent, reactive} from 'vue';

export default defineComponent({
  components: {
    IonCardHeader, IonCardTitle, IonCard, IonCardSubtitle, IonButton,
    IonCardContent,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
  },
  setup() {
    const items = reactive([]);
    const status = reactive(['danger', 'medium', 'success']);

    const generateItems = () => {
      const count = items.length + 1;
      for (let i = 0; i < 4; i++) {
        items.push(status[(i % 3)]);
      }
      // console.log(status[45&3])
    };

    const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
      generateItems();
      setTimeout(() => ev.target.complete(), 1000);
    };

    generateItems();

    return {ionInfinite, items};
  },
});
</script>


<style>
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
