<template>
  <div class="bg-gray-900 min-h-screen">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { inject } from "vue";

export default {
  setup() {
    const useAuth = inject("auth");
    const { isLogged } = useAuth;
    isLogged();
  },
  name: "Main",
  components: {
    Navbar,
    Sidebar
  }
};
</script>
