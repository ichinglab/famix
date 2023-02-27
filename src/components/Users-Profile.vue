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
    <div style="max-width: 900px">
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <q-tab class="text-light-blue-13" name="post" label="Post" />
        <q-tab class="text-light-blue-13" name="about" label="About" />
        <q-tab class="text-light-blue-13" name="friend" label="Friend" />
      </q-tabs>

      <div>
        <div v-for="n in 1" :key="n">
          <q-tab-panels
            v-model="tab"
            animated
            transition-prev="scale"
            transition-next="scale"
            class="text-white text-center"
          >
            <q-tab-panel name="post">
              <div class="text-h6">My Post</div>
              <div v-for="post in posts" :key="post.id" class="q-py-md">
                <q-card class="bg-grey-10 my-card">
                  <q-item-section>
                    <q-item-label>
                      <div class="row">
                        <div class="col q-pl-xs q-pt-xs">
                          <q-avatar size="30px">
                            <img
                              :src="`https://cdn.quasar.dev/img/${post.avator}`"
                            />
                          </q-avatar>
                          <span class="q-pa-md name-texttt text-bold">
                            {{ post.name }}
                          </span>
                          <span class="text-h7"> {{ post.time }} </span>
                          <span>
                            <q-btn flat size="10px" round icon="public">
                              <q-tooltip class="bg-black text-white"
                                >Public</q-tooltip
                              >
                            </q-btn>
                          </span>
                        </div>
                      </div>
                    </q-item-label>
                  </q-item-section>
                  <img
                    class="q-pt-xs"
                    :src="`https://cdn.quasar.dev/img/${post.avator}`"
                  />

                  <q-card-section class="row">
                    <div class="text-h6">{{ post.title }}</div>
                    <q-space />
                    <!-- <div class="text-subtitle2">by Name</div> -->
                    <q-btn flat dense round color="primary" icon="favorite">
                      <q-tooltip class="bg-black text-white">Love</q-tooltip>
                    </q-btn>
                    <q-btn flat dense round color="primary" icon="bookmark">
                      <q-tooltip class="bg-black text-white"
                        >Save Post</q-tooltip
                      >
                    </q-btn>
                    <q-btn flat dense round color="primary" icon="share">
                      <q-tooltip class="bg-black text-white"
                        >Share Network</q-tooltip
                      >
                    </q-btn>
                  </q-card-section>
                  <q-card-section class="q-pt-none">
                    {{ post.details }}
                  </q-card-section>
                  <q-card-actions>
                    <q-space />
                    <span class="read_more_text">View More</span>
                    <q-btn
                      color="primary"
                      round
                      flat
                      dense
                      :icon="
                        expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                      "
                      @click="expanded = !expanded"
                    />
                  </q-card-actions>

                  <q-slide-transition>
                    <div v-show="expanded">
                      <q-separator />
                      <q-card-section class="text-subitle2">
                        {{ post.full_details }}
                      </q-card-section>
                    </div>
                  </q-slide-transition>
                </q-card>
              </div>
            </q-tab-panel>

            <q-tab-panel name="about">
              <div class="text-h6">About Me</div>
              Frontend Developer (Software) | Vue.js | Quasar js | Angular |
              Figma | Javascript | Git | Node.js | UI/UX | Software Tester | IOS
              Test Flight | Internship Completed at IT Conquest, Canada
            </q-tab-panel>

            <q-tab-panel name="friend">
              <p class="text-h6">Friends</p>
              <div v-for="post in posts" :key="post.id" class="row">
                {{ post.name }}
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <!-- <q-tab-panels
              v-model="tab"
              animated
              transition-prev="fade"
              transition-next="fade"
              class="bg-orange text-white text-center"
            >
              <q-tab-panel name="post">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="about">
                <div class="text-h6">Alarms</div>
                Ad molestiae non facere animi nobis, similique nemo velit
                reiciendis corporis impedit nam in.
              </q-tab-panel>

              <q-tab-panel name="friend">
                <div class="text-h6">Movies</div>
                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae
                magni ea.
              </q-tab-panel>
            </q-tab-panels> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
    last_message: "Hey baby?",
    avator: "avatar1.jpg",
    title: "Content Text",
    full_details: "choice of Random, Lorem Ipsum, or Star Wars content!",
    details:
      "Content Text is by far the most fun thing about this plugin. You have a",
    time: "2:04 AM",
  },
  {
    id: 2,
    name: "Mallorie Alessandrini",
    last_message: "where you? need you now.",
    avator: "avatar2.jpg",
    title: "Post Type",
    full_details: " post types available and puts them in the drop down list.",
    details:
      "Post Type is nicely done. The plugin automatically picks up the different",
    time: "1:14 PM",
  },
  {
    id: 3,
    name: "Elisabetta Wicklen",
    last_message: "f*** bloody ",
    avator: "avatar3.jpg",
    title: "Image sources",
    full_details:
      "go with the ones provided by the plugin or enter URLs for images in the Image Sources box. The images will be used at random. To make sure the URLs work, click on Save the Settings, and thumbnails of the images you’ve entered show up along the bottom of the page.  If you need a site with images to use for internal purposes only, try the samples page from Budget Stock Photos.",
    details:
      "Image sources for dummy images are also easy to work with. You can",
    time: "12:34 AM",
  },
  {
    id: 4,
    name: "Humayun Azad",
    last_message: "Let's smoke for outside?",
    avator: "avatar4.jpg",
    title: "Paragraphs",
    full_details: "",
    details: "Paragraphs lets you set the number of paragraphs",
    time: "4:33 PM",
  },
  {
    id: 5,
    name: "Sara Chowdhury",
    last_message: "Hey Rocky , what's up?",
    avator: "avatar5.jpg",
    title: "Maximum",
    full_details: "",
    details: "Maximum lets you set how many posts to generate",
    time: "12:44 AM",
  },
  {
    id: 6,
    name: "Jeme Farhana",
    last_message: "Hello baby?",
    avator: "avatar6.jpg",
    title: "Random tags",
    full_details: "Populate Posts to apply at random to each post",
    details:
      "Random tags: here is where you enter a list of tags you want Easy ",
    time: "1:12 PM",
  },
  {
    id: 7,
    name: "MD Nayeem",
    last_message: "Dost koi tui?",
    avator: "avatar1.jpg",
    title: "Title prefix ",
    full_details:
      " this plugin doesn't have a function that automatically deletes the fake content you've generated. By giving all your fake content a prefix, they're easier to identify and delete in bulk.  Here I've used Luke as the prefix.",
    details:
      "Title prefix is a helpful setting which I highly recommend using because",
    time: "12:56 AM",
  },
  {
    id: 8,
    name: "Sejuti Chakrabarty",
    last_message: "What are you doing baby?",
    avator: "avatar2.jpg",
    title: "Date",
    full_details:
      " they'll be created with a scheduled status and you'll need to publish them one by one. Past is better, especially if you want to see the new content show up in pages or sidebars that feature latest posts.",
    details:
      "Date can be random, or in the past, or in the future. If dated in the future,",
    time: "6:44 AM",
  },
  {
    id: 9,
    name: "Sneha Khan",
    last_message: "you: I don't go.",
    avator: "avatar3.jpg",
    title: "What to watch for",
    full_details:
      "after itself so you need to delete them manually. Plus, each time you generate fake content with images, those images get added to your Media Library; so for a complete cleanup, you'll need to go to Media Library and delete images associated with the fake content. Other than that small nit about clean up, this is a great plugin. Simple and quick to use, easy to understand.",
    details:
      "What to watch for: as mentioned before, this plugin doesn't clean up ",
    time: "8:09 PM",
  },
  {
    id: 10,
    name: "Tara Sutaria",
    last_message: "Sorry I'm late !",
    avator: "avatar4.jpg",
    title: "Quantity",
    full_details:
      "the first field only, Fakerpress generates three posts. If you enter 3 in the first field and 10 in the second, FakerPress will randomly generate between 3 - 10 posts. I would just enter a number in the first field and skip the randomness.",
    details:
      "Quantity: There are 2 fields. With a > between them. If you enter 3 in",
    time: "11:23 PM",
  },
  {
    id: 11,
    name: "Mahmud Alam",
    last_message: "Dst ami mirpur 1 a .",
    avator: "avatar5.jpg",
    title: "HTML tags",
    full_details:
      " this list. Useful if you want to see how your theme's CSS looks on a page. Quotes, headers, bulleted lists, images - you'll get a random sampling.",
    details:
      "HTML tags: Your content will contain some or all of the HTML tags in",
    time: "5:09 AM",
  },
  {
    id: 12,
    name: "Sohanur Rahman",
    last_message: "you: nare aj ar ber hobo nah",
    avator: "avatar6.jpg",
    title: "Featured image rate",
    full_details: " heavy use of featured Images.",
    details:
      "Featured image rate: I like to set this to 100% because my theme makes",
    time: "3:09 PM",
  },
  {
    id: 13,
    name: "Waterfall Model",
    last_message: "Sorry bro you software doesn't have any requirment with me",
    avator: "avatar1.jpg",
    title: "Image Providers",
    full_details:
      " and LoremPixel. Something to watch out for: if you want all of your content to have nice images, remove Placehold.it from this list. Otherwise some of your posts will contain images of grey boxes, each with its dimensions, i.e. 560 x 440. On the other hand, if you need to test how images of different sizes look on a page, Placehold.it is a very useful source.",
    details:
      "Image Providers: FakerPress pulls images from Placehold.it, Unsplash it",
    time: "5:00 PM",
  },
  {
    id: 14,
    name: "Agile Model",
    last_message: "Welcome to my model",
    avator: "avatar2.jpg",
    title: "Author",
    full_details:
      " users on your website, and FakerPress will generate content tagged as authored by those users. What you need to watch out for is that if the user's role is one where posts need to be approved before publishing, you will need to manually publish their posts. Obviously you need to have user accounts already created for this option to work, and for that you can use FakerPress. I prefer to create a few user accounts manually and have complete control over their roles and names.",
    details:
      "Author: You can select one or several authors for the post from the",
    time: "11:08 PM",
  },
];
import { useQuasar } from "quasar";
import { UserService } from "../services/user.service";
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "usersProfile",
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const getOwnProfile = ref([]);
    const geId = JSON.parse(localStorage.getItem("user"));
    console.log(geId);
    // Get users
    async function fetchProfile() {
      try {
        const response = await userService.getUser(geId.id);
        getOwnProfile.value = response.payload;
      } catch (error) {
        $q.notify({
          message: error.message || error.message,
          color: "negative",
          position: "top",
          timeout: 2000,
        });
      }
    }
    fetchProfile();
    return {
      // tab: ref("about"),
      tab: ref("post"),
      posts,
      expanded: ref(false),
      getOwnProfile,
      fetchProfile,
    };
  },
});
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

.my-card
  width: 100%
  max-width: 1250px
  border: 2px solid #9BD0E5
  border-radius: 25px

.row > div
  // padding: 10px 15px
  // background: rgba(86,61,124,.15)
  // border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem

.read_more_text
 font-size: 10px

.name-texttt
  font-size: 15px

.my-post
  // padding: -1px
  margin: -15px
</style>
