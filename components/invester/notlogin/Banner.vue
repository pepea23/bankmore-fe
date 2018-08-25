<template>
    <div class="bg-light-blue" >
        <div class="section-space80">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="col-md-9 card card-body pinside30">
                            <form>
                                <h3 style="color:black;">ยินดีต้อนรับเข้าสู่ระบบ <nuxt-link :to="'#'" class="btn btn-primary btn-sm" >singup</nuxt-link></h3>
                                <div style="padding-top: 10px;">
                                    <input type="text" placeholder="username" name="username" value="" class="form-control">
                                </div>
                                <div style="padding-top: 5px;">
                                    <input type="password" placeholder="password" name="password" value="" class="form-control">
                                </div>
                                <div>
                                    <div style="padding-top: 10px;">
                                        <input type="submit" value="login" class="btn btn-default btn-sm">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                    <div class="col-md-6 col-12 ">
                        <div class="text-center">
                            <h1 class="text-white">Explore Borrow Bank</h1>
                            <p class="lead text-white">Praesent elementum cursus felis, interdum commodo urna. Nunc sit amet lacus ac orci cursus varius. Nulla facilisis neque eget consequat tincidunt. Aenean lacinia pharetra posuere. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>
