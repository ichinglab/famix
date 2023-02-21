<template>
  <!-- Header Desktop -->
  <div class="header gt-sm">
    <div class="row flex-center" style="max-height: 300px">
      <div class="col-12 col-md-6 q-pa-md">
        <div style="margin-left: 100px">Famix Dashboard</div>
      </div>
      <div class="col-12 col-md-6 q-pa-md text-right">Super Admin</div>
    </div>
  </div>
  <!-- Header Mobile -->
  <div class="lt-md">
    <div class="row flex-center">
      <div class="q-pa-md text-h6">Super Admin</div>
    </div>
  </div>
  <!-- payment sections -->
  <div class="row flex-center q-pa-lg first-section">
    <q-card class="full-width bg-transparent">
      <div>
        <!-- Users Sections -->
        <div class="text-h4 text-bold">
          <q-card-section align="center">
            <div>All Users</div>
          </q-card-section>
        </div>
        <div class="row flex-center">
          <div class="q-pa-sm full-width">
            <q-table
              class="my-transitions"
              :rows="alluserList"
              flat
              :columns="transactionColumns"
              row-key="name"
              :rows-per-page-options="[10]"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="avatarImage" :props="props">
                    <q-avatar size="50px">
                      <img :src="props.row.avatar" alt="avatar" />
                    </q-avatar>
                  </q-td>
                  <q-td key="fullName" :props="props">
                    {{ props.row.fullName }}
                  </q-td>

                  <q-td key="phoneNumber" :props="props">
                    {{ props.row.phoneNumber }}
                  </q-td>
                  <q-td key="email" :props="props">
                    {{ props.row.email }}
                  </q-td>
                  <q-td key="bloodGroup" :props="props">
                    {{ props.row.bloodGroup }}
                  </q-td>
                  <q-td key="dob" :props="props">
                    {{ new Date(props.row.dob).toLocaleDateString("en-GB") }}
                  </q-td>
                  <q-td key="status" :props="props">
                    {{ props.row.isActive ? "Active" : "Suspended" }}
                  </q-td>
                  <q-td key="control" :props="props">
                    <div>
                      <q-btn icon="more_vert" round flat />
                    </div>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRoute } from "vue-router";
import { UserService } from "../../services/user.service";
import { defineComponent, ref, reactive } from "vue";
const transactionColumns = [
  {
    name: "avatarImage",
    label: "Image",
    align: "center",
    field: "avatarImage",
  },
  { name: "fullName", label: "Full Name", align: "center", field: "name" },
  {
    name: "phoneNumber",
    label: "Phone Number",
    align: "center",
    field: "phoneNumber",
  },
  {
    name: "email",
    label: "Email",
    align: "center",
    field: "email",
  },
  {
    name: "bloodGroup",
    label: "BloodGroup",
    align: "center",
    field: "bloodGroup",
  },
  { name: "dob", label: "DOB", align: "center", field: "dob" },
  { name: "status", label: "Status", align: "center", field: "status" },
  { name: "control", label: "Control", align: "center", field: "control" },
];
const rows = [
  {
    fullName: "Rahim",
    phoneNumber: "+8801873646736",
    email: "jnje@gmail.com",
    control: "",
    bloodGroup: "A+",
    dob: "2021-01-01",
    avatarImage: "https://cdn.quasar.dev/img/avatar.png",
    status: "Active",
  },
  {
    fullName: "Wahid",
    phoneNumber: "+88018736463774",
    email: "wdde@gmail.com",
    control: "",
    bloodGroup: "A+",
    dob: "2021-01-01",
    avatarImage: "https://cdn.quasar.dev/img/avatar.png",
    status: "Active",
  },
  {
    fullName: "Qasim",
    phoneNumber: "+880187364637443",
    email: "wdde@gmail.com",
    control: "",
    bloodGroup: "A+",
    dob: "2021-01-01",
    avatarImage: "https://cdn.quasar.dev/img/avatar.png",
    status: "Deactive",
  },
  {
    fullName: "Abdul",
    phoneNumber: "+880187364631233",
    email: "wdde@gmail.com",
    control: "",
    bloodGroup: "A+",
    dob: "2021-01-01",
    avatarImage: "https://cdn.quasar.dev/img/avatar.png",
    status: "Deactive",
  },
];
export default defineComponent({
  // name: 'PageName',
  setup() {
    const $q = useQuasar();
    const userService = new UserService();
    const alluserList = ref([]);
    // Get All jobs
    async function fetchAllUsers() {
      try {
        const response = await userService.getAllUsers();
        console.log(response);
        alluserList.value = response.payload;
      } catch (error) {
        console.log(error);
        $q.notify({
          message: error.message || error.message,
          color: "negative",
          position: "top",
          timeout: 2000,
        });
      }
    }
    fetchAllUsers();
    return {
      transactionColumns,

      alluserList,
      fetchAllUsers,
    };
  },
});
</script>
<style scoped>
.my-transitions {
  border-radius: 15px;
  border: 1px solid #ddd;
}

@media screen and (min-width: 1010px) {
  .first-section {
    margin-top: -380px;
  }
}
</style>
