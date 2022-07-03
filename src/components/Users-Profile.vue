<template>
  <div>
    <div class="row flex-center">
      <q-btn
        class="absolute all-pointer-events"
        size="15px"
        icon="camera"
        round
        dense
        flat
        style="top: 12px; left: 88%"
      >
        <q-tooltip> Change Cover Picture </q-tooltip>
      </q-btn>
      <img
        src="../assets/avator/avatar2.jpeg"
        style="max-width: 100%; max-height: 400px; border-radius: 20px"
      />
      <div class="row flex-center my-pic" style="width: 100%">
        <q-avatar size="200px">
          <img src="../assets/avator/avatar2.jpeg" />
        </q-avatar>
      </div>
    </div>
    <div class="row flex-center" style="padding: 100px">
      <p class="tex-bold text-h5">Pallob Vau</p>
    </div>
    <div class="flex-center">
      <div class="q-pa-md">
        <div style="max-width: 600px">
          <q-tabs
            v-model="tab"
            align="justify"
            narrow-indicator
            class="q-mb-lg"
          >
            <q-tab class="text-purple" name="mails" label="Mails" />
            <q-tab class="text-orange" name="alarms" label="Alarms" />
            <q-tab class="text-teal" name="movies" label="Movies" />
          </q-tabs>

          <div class="q-gutter-y-sm">
            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="scale"
              transition-next="scale"
              class="bg-purple text-white text-center"
            >
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Ad molestiae non facere animi nobis, similique nemo velit
                reiciendis corporis impedit nam in.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae
                magni ea.
              </q-tab-panel>
            </q-tab-panels>

            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="fade"
              transition-next="fade"
              class="bg-orange text-white text-center"
            >
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Ad molestiae non facere animi nobis, similique nemo velit
                reiciendis corporis impedit nam in.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae
                magni ea.
              </q-tab-panel>
            </q-tab-panels>

            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="jump-up"
              transition-next="jump-down"
              class="bg-teal text-white text-center"
            >
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Ad molestiae non facere animi nobis, similique nemo velit
                reiciendis corporis impedit nam in.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae
                magni ea.
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "usersProfile",
  setup() {
    return {
      // tab: ref("about"),
      tab: ref("mails"),
    };
  },
};
</script>

<style lang="sass" scoped>

.row > div
  // padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem


.my-pic
  // padding: -30px
  margin: -110px
</style>
