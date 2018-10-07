<template>
<div class="bg-white section-space80">
  <center>
    <h1>Personal</h1>
  </center>
    <div class="container">
      <h3 style="margin-top: 20px">ข้อมูลผู้ขายฝาก</h3><br>
      <label>ชื่อ</label>
      <div class="row">
        <div class="col-6 col-md-6">
          <input type="text" class="form-control" v-model="registerdata.firstName" placeholder="ชื่อ">
        </div>
        <div class="col-6 col-md-6">
          <input type="text" class="form-control" v-model="registerdata.lastName" placeholder="นามสกุล">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12">
          <label>ที่อยู่</label>
          <input type="text" class="form-control" v-model="registerdata.address">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3">
          <label>เบอร์ติดต่อ</label>
          <input type="tel" v-model="registerdata.phonenumber" class="form-control">
        </div>
        <div class="col-12 col-md-3">
          <label>อีเมล์</label>
          <input type="email" v-model="registerdata.email" class="form-control">
        </div>
        <div class="col-12 col-md-3">
          <label>บุคคลอ้างอิง</label>
          <input type="text" v-model="registerdata.reference" class="form-control">
        </div>
        <div class="col-12 col-md-3">
          <label>วันเกิด</label>
          <input type="date" v-model="registerdata.birthday" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-2">
          <label>อายุ</label>
          <input type="number" v-model="registerdata.age" min="1" class="form-control">
        </div>
        <div class="col-12 col-md-2">
          <label>สถานภาพสมรส</label>
          <div class="container">
            <input type="radio" v-model="registerdata.status" value="single">โสด
            <div style=" margin-right: 1px"></div>
            <input type="radio" v-model="registerdata.status" value="married">แต่งงาน
          </div>
        </div>
        <div class="col-12 col-md-2">
          <label>จำนวนบุตร</label>
          <input type="number" class="form-control" v-model="registerdata.numChild" min="0">
        </div>
        <div class="col-12 col-md-6">
          <label>การศึกษา</label>
          <input type="text" class="form-control" v-model="registerdata.education">
        </div>
      </div>
    </div>

    <div class="container">
      <h3 style="margin-top: 20px">อาชีพ/ประเภทธุรกิจ</h3><br>
      <div class="row">
        <div class="col-12 col-md-3">
          <label>อาชีพ</label>
          <input type="text" class="form-control" v-model="registerdata.job">
        </div>
        <div class="col-12 col-md-5">
          <label>ชื่อสถานประกอบการ</label>
          <input type="text" class="form-control" v-model="registerdata.companyName">
        </div>
        <div class="col-12 col-md-4">
          <div class="form-group ">
            <label>ประเภทธุรกิจ</label>
            <select v-model="registerdata.inputCompanyType" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3">
          <label>จำนวนที่ทำงาน</label>
          <input type="number" class="form-control" v-model="registerdata.yearOfWork" min="0">
        </div>
        <div class="col-12 col-md-3">
          <label>ตำแหน่ง</label>
          <input type="text" class="form-control" v-model="registerdata.position">
        </div>
        <div class="col-12 col-md-3">
          <label>เงินเดือน</label>
          <input type="number" class="form-control" v-model="registerdata.salary" min="0">
        </div>
        <div class="col-12 col-md-3">
          <label>รายได้อื่น ๆ</label>
          <input type="text" class="form-control" v-model="registerdata.otherIncome">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>วัตถุประสงค์ในการฝากขาย</label>
            <textarea class="form-control" v-model="registerdata.businessObjectives" rows="5"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div style="display: flex; justify-content: center; align-items: center;">
        <div class="col" style="max-width:500px">
          <center>
            <textarea rows="7" disabled="disabled" class="form-control">ข้อตกลง : ข้าพเจ้าขอรับรองว่าข้อมูลตามรายละเอียดข้างต้นเป็นความจริงทุกประการ โดยข้าพเจ้ายินยอมให้บริษัทฯ ติดต่อ สอบถาม และ/หรือตรวจสอบข้อมูลรายละเอียดต่างๆของข้าพเจ้า และ/หรือ บุคคลที่เกี่ยวข้องได้จากบุคคล และ/หรือ นิติบุคคลอื่นทั้งหมด และไม่ว่าด้วยวิธีใดๆ ตลอดจนยินยอมให้บริษัทฯ เปิดเผยข้อมูลดังกล่าวแก่บุคคล และ/หรือ นิติบุคคลใดได้ตามที่บริษัทฯ เห็นสมควร ทั้งนี้ ข้าพเข้าจะไม่เรียกร้องค่าตอบแทน และ/หรือ ค่าเสียหายใดๆที่เกิดขึ้นเนื่องจากการกระทำดังกล่าวของบริษัทฯทั้งสิ้น นอกจากนี้ในการที่ข้าพเจ้าขอสินเชื่อประเภทต่างๆ จากบริษัทนั้น ข้าพเจ้ายินยอมปฏิบัติตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯและเงื่อนไขของบริษัทฯ ทุกประการและยินยอมเสียค่า ธรรมเนียม ตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯ โดยข้าพเจ้าตกลงเป็นผู้ชำระเองทั้งสิ้น</textarea>
          </center>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox"  v-model="registerdata.checkConditon"  required value="checked">
              </div>
            </div>
            <p class="form-control">ยืนยัน</p>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" v-model="registerdata.checkGetemail" value="checked">
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
</div>
</template>

<script>
function doSubmit(form) {
  alert("Thank you");

  this.$router.push("@/pages/index.vue");
}

export default {
  name: "Register-Person-Form",
  data() {
    return {
      registerdata: {
        firstName: "",
        lastName: "",
        address: "",
        phonenumber: "",
        email: "",
        reference: "",
        birthday: "",
        age: "",
        status: "",
        numChild: "",
        education: "",
        job: "",
        companyName: "",
        inputCompanyType: "",
        yearOfWork: "",
        position: "",
        salary: "",
        otherIncome: "",
        businessObjectives: "",
        checkConditon: "",
        checkGetEmail: ""
      }
    };
  },
  methods: {
    async sumbmitRegister() {
      try {
        console.log(this.registerdata);
        var loginData = {
          username: "linjingyun12",
          email: "wdrdres3qew5ts21@gmail.com",
          password: "lnwzalinjingyun12"
        };
        //const loginSend = await this.$axios.$post(`/api/register`);

        this.$axios.$post("/api/register", loginData);

        commit("loginSend", loginSend);
      } catch (error) {
        console.log("send Fail" + error);
      }
    }
  }
};
</script>
