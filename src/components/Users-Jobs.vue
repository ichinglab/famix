<template>
  <div>
    <div class="row flex-center">
      <JobPost />
    </div>
    <div v-for="post in posts" :key="post.id" class="row flex-center">
      <q-card class="bg-grey-10 my-card">
        <q-item-section>
          <q-item-label>
            <div class="row">
              <div class="col q-pl-xs q-pt-xs">
                <q-avatar size="30px">
                  <img :src="`https://cdn.quasar.dev/img/${post.avator}`" />
                </q-avatar>
                <span class="q-pa-md name-texttt text-bold">
                  {{ post.name }}
                </span>
                <span class="text-h7"> {{ post.time }} </span>
                <span>
                  <q-btn flat size="10px" round icon="public"></q-btn>
                </span>
              </div>
            </div>
          </q-item-label>
        </q-item-section>
        <q-card-section class="row">
          <div class="text-h6">{{ post.title }}</div>
          <q-space />
          <q-btn flat dense round color="primary" icon="favorite" />
          <q-btn flat dense round color="primary" icon="bookmark" />
          <q-btn flat dense round color="primary" icon="share">
            <ShareNetwork
              network="facebook"
              url="https://news.vuejs.org/issues/180"
              title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
              description="This week, I'd like to introduce you to 'Vite', which means 'Fast'. It's a brand new development setup created by Evan You."
              quote="The hot reload is so fast it\'s near instant. - Evan You"
              hashtags="vuejs,vite"
            >
            </ShareNetwork>
          </q-btn>
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ post.details }}
        </q-card-section>
        <q-card-actions>
          <q-space />
          <span class="read_more_text">Apply</span>
          <q-btn
            color="primary"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              <a href="{{`post.full_details`}}"></a>
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>
</template>

<script>
const posts = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
    avator: "avatar1.jpg",
    title: "Software Engineer - Frontend",
    full_details:
      "https://www.linkedin.com/jobs/view/3147127522/?eBP=JOB_SEARCH_ORGANIC&refId=WxiTj1Nc5GReXGwNYaKmFQ%3D%3D&trackingId=X1%2BxgeGpC4IeZKc4prtNjw%3D%3D",
    details:
      "Content Text is by far the most fun thing about this plugin. You have a",
    time: "2:04 AM",
  },
  {
    id: 2,
    name: "Mallorie Alessandrini",
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
    avator: "avatar4.jpg",
    title: "Paragraphs",
    full_details: "",
    details: "Paragraphs lets you set the number of paragraphs",
    time: "4:33 PM",
  },
  {
    id: 5,
    name: "Sara Chowdhury",
    avator: "avatar5.jpg",
    title: "Maximum",
    full_details: "",
    details: "Maximum lets you set how many posts to generate",
    time: "12:44 AM",
  },
  {
    id: 6,
    name: "Jeme Farhana",
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
    avator: "avatar2.jpg",
    title: "Author",
    full_details:
      " users on your website, and FakerPress will generate content tagged as authored by those users. What you need to watch out for is that if the user's role is one where posts need to be approved before publishing, you will need to manually publish their posts. Obviously you need to have user accounts already created for this option to work, and for that you can use FakerPress. I prefer to create a few user accounts manually and have complete control over their roles and names.",
    details:
      "Author: You can select one or several authors for the post from the",
    time: "11:08 PM",
  },
];
import { defineComponent, Vue } from "vue";
import { ref } from "vue";
import JobPost from "./job-post.vue";
export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      tab: ref("feed"),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      expanded: ref(false),
      posts,
    };
  },
  components: { JobPost },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1250px

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
</style>
