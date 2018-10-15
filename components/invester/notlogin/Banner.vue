<template>
<div class="bg-light-blue">
    <div class="section-space80">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="col-md-9 card card-body pinside30">
                        <h3 style="color:black;">ยินดีต้อนรับเข้าสู่ระบบ <nuxt-link :to="'/invester/register'" class="btn btn-primary btn-sm">singup</nuxt-link>
                        </h3>
                        <div style="padding-top: 10px;">
                            <input type="text" placeholder="username" v-model="username" value="" class="form-control">
                                </div>
                            <div style="padding-top: 5px;">
                                <input type="password" placeholder="password" v-model="password" value="" class="form-control">
                                </div>
                                <div>
                                    <div style="padding-top: 10px;">
                                        <input type="submit" value="login" class="btn btn-default btn-sm" @click="this.sumbmitLogin">
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4"></div>
                            </div>
                            <div class="col-md-6 col-12 ">
                                <div class="text-center">
                                    <h1 class="text-white">Invester - Page</h1>
                                    <p class="lead text-white">detail description.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async sumbmitLogin() {
      try {
        const loginData = {
          username: this.username,
          password: this.password
        };
        const loginSend = await this.$axios.$post(`/api/login/`,loginData);
        console.log(loginSend);
        
      } catch (error) {
        console.log("send Fail" + error);
      }
    }
  }
};
</script>
