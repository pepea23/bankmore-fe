<template>
<div class="bg-white section-space80">
  <center>
    <h1>Coporate</h1>
  </center>
  <form action="" method="post">
    <div class="container">
      <h3 style="margin-top: 20px">ข้อมูลผู้ขายฝาก</h3><br>
      <label>ชื่อเจ้าของกิจการ</label>
      <div class="row">
        <div class="col-12 col-md-6">
          <input type="text" class="form-control" v-model="registerdata.firstName" placeholder="ชื่อ">
        </div>
        <div class="col-12 col-md-6">
          <input type="text" class="form-control" v-model="registerdata.lastName" placeholder="นามสกุล">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12">
          <label>ชื่อกิจการ</label>
          <input type="text" class="form-control" v-model="registerdata.nameCoporate">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5">
          <label>เลขที่จดทะเบียน</label>
          <input type="number" class="form-control" v-model="registerdata.registerNumberCoporate">
        </div>
        <div class="col-12 col-md-4">
          <label>วันที่จดทะเบียน</label>
          <input type="date" class="form-control" v-model="registerdata.registerDayCoporate">
        </div>
        <div class="col-12 col-md-3">
          <label>จำนวนกรรมการบริษัท</label>
          <input type="number" class="form-control" v-model="registerdata.numberOfDirectorsCoporate" min="0">
        </div>
        <div class="col-12 col-md-12">
          <div class="form-group">
            <label>เงื่อนไขการลงนาม</label>
            <textarea class="form-control" v-model="registerdata.convenantCoporate" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <label>ประเภทธุรกิจ</label>
          <select v-model="registerdata.companyTypeCoporate" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-12 col-md-6">
          <label>ระยะเวลาดำเนินกิจการ</label>
          <input type="text" class="form-control" v-model="registerdata.businessTimelineCoporate">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12">
          <label>ที่อยู่</label>
          <input type="text" class="form-control" v-model="registerdata.addressCoporate">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12">
          <div class="form-group">
            <label>วัตถุประสงค์ในการฝากขาย</label>
            <textarea class="form-control" v-model="registerdata.businessObjectivesCoporate" rows="5"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div style="display: flex; justify-content: center; align-items: center;">
        <div class="col-12" style="max-width:500px">
          <center>
            <textarea rows="7" id="text" disabled="disabled" class="form-control">ข้อตกลง : ข้าพเจ้าขอรับรองว่าข้อมูลตามรายละเอียดข้างต้นเป็นความจริงทุกประการ โดยข้าพเจ้ายินยอมให้บริษัทฯ ติดต่อ สอบถาม และ/หรือตรวจสอบข้อมูลรายละเอียดต่างๆของข้าพเจ้า และ/หรือ บุคคลที่เกี่ยวข้องได้จากบุคคล และ/หรือ นิติบุคคลอื่นทั้งหมด และไม่ว่าด้วยวิธีใดๆ ตลอดจนยินยอมให้บริษัทฯ เปิดเผยข้อมูลดังกล่าวแก่บุคคล และ/หรือ นิติบุคคลใดได้ตามที่บริษัทฯ เห็นสมควร ทั้งนี้ ข้าพเข้าจะไม่เรียกร้องค่าตอบแทน และ/หรือ ค่าเสียหายใดๆที่เกิดขึ้นเนื่องจากการกระทำดังกล่าวของบริษัทฯทั้งสิ้น นอกจากนี้ในการที่ข้าพเจ้าขอสินเชื่อประเภทต่างๆ จากบริษัทนั้น ข้าพเจ้ายินยอมปฏิบัติตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯและเงื่อนไขของบริษัทฯ ทุกประการและยินยอมเสียค่า ธรรมเนียม ตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯ โดยข้าพเจ้าตกลงเป็นผู้ชำระเองทั้งสิ้น</textarea>
          </center>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" v-model="registerdata.checkCondition" required>
              </div>
            </div>
            <p class="form-control">ยืนยัน</p>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" v-model="registerdata.checkGetemail">
              </div>
            </div>
            <p class="form-control">ต้องการรับข้อมูลข่าวสารรวมถึงโปรโมชั่นต่างๆของบริษัทฯ</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12">
          <center>
            <input type="submit" class="btn btn-primary"  value="Apply for loan"  @click="this.sumbmitRegister">
          </center>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
function doSubmit(form) {
  alert("Thank you");

  this.$router.push("@/pages/index.vue");
}

export default {
  name: "Register-Corporate-Form",
  data() {
    return {
      registerdata: {
        firstName: "",
        lastName: "",
        nameCoporate: "",
        registerNumberCoporate: "",
        registerDayCoporate: "",
        numberOfDirectorsCoporate: "",
        convenantCoporate: "",
        businessTimelineCoporate: "",
        addressCoporate: "",
        businessObjectivesCoporate: "",
        checkCondition: "",
        checkGetemail: "",
      }
    };
  },
  methods: {
    async sumbmitRegister() {
      try {
        console.log(this.registerdata);
        // const loginSend = await this.$axios.$post(`/api/login/${loginData}`);
        // commit("loginSend", loginSend);
      } catch (error) {
        console.log("send Fail" + error);
      }
    }
  }
};
</script>
