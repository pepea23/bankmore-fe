<template>
    <div>
       <form>
         <div class="container">
          <div class="row">
            <h1>Coporate</h1>
          </div>
          <br>
            <label>ชื่อกิจการ</label>
              <div class="row">
                <div class="col-12 col-md-12">
                  <input type="text" v-model="registerdata.coporateName" placeholder="ชื่อ" class="form-control">
                </div>
              </div>
              
              <div class="row">
                <div class="col-12 col-md-4">
                  <label>เลขที่จดทะเบียน</label>
                  <input type="number" v-model="registerdata.registernumber" class="form-control">
                </div>
                <div class="col-12 col-md-4">
                  <label>วันที่จดทะเบียน</label>
                  <input type="date" v-model="registerdata.registerdate" class="form-control">
                </div>
                <div class="col-12 col-md-4">
                  <label>จำนวนกรรมการบริษัท</label>
                  <input type="number" v-model="registerdata.coporateNum" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12">
                  <label>เงื่อนไขการลงนาม</label>
                  <textarea v-model="registerdata.SignCondition" rows="3" class="form-control"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <label>ประเภทธุรกิจ</label>
                  <select class="form-control" v-model="registerdata.typeCoporate">
                    <option selected="selected">Choose...</option>
                    <option value="...">...</option>
                  </select>
                </div>
                <div class="col-12 col-md-6">
                  <label>ระยะเวลาดำเนินกิจการ</label>
                  <input type="number" v-model="registerdata.businesstimeline" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12">
                  <label>วัตถุประสงค์ในการรับซื้อฝาก : </label>
                </div>
                <div class="col-12 col-md-12">
                  <textarea v-model="registerdata.objective" rows="5" class="form-control"></textarea>
                </div>
              </div>
              <label>จำนวนเงินยอดรับซื้อฝาก</label>
              <div class="row">
                <div class="col-12 col-md-5">
                  <input type="number" class="form-control" v-model="registerdata.moneyholder">
                  <!-- <vue-slider v-model="inputSlider" min="1" max="100" speed="0.2"></vue-slider> -->
                </div>
                <div class="col-12 col-md-7">
                  <input type="number" v-model="registerdata.moneyholder" placeholder="ถ้าจำนวนเงินมากกว่าหนึ่งร้อยล้านบาท" min="100000000" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12">
                  <p>*หมายเหตุ: บริษัทฯ จะทำการติดต่อท่านกลับพร้อมขอสำเนาเอกสารยืนยันตัวตันจากท่านในภายหลัง</p>
                </div>
              </div>
              <div style="display: flex; justify-content: center; align-items: center;">
                    <div class="col-12"  style="max-width:500px">
                        <center>
                          <br><br>
                          <div class="form-group">
                            <textarea class="form-control" rows="7" cols="44" id="text" disabled>ข้อตกลง : ข้าพเจ้าขอรับรองว่าข้อมูลตามรายละเอียดข้างต้นเป็นความจริงทุกประการ โดยข้าพเจ้ายินยอมให้บริษัทฯ ติดต่อ สอบถาม และ/หรือตรวจสอบข้อมูลรายละเอียดต่างๆของข้าพเจ้า และ/หรือ บุคคลที่เกี่ยวข้องได้จากบุคคล และ/หรือ นิติบุคคลอื่นทั้งหมด และไม่ว่าด้วยวิธีใดๆ ตลอดจนยินยอมให้บริษัทฯ เปิดเผยข้อมูลดังกล่าวแก่บุคคล และ/หรือ นิติบุคคลใดได้ตามที่บริษัทฯ เห็นสมควร ทั้งนี้ ข้าพเข้าจะไม่เรียกร้องค่าตอบแทน และ/หรือ ค่าเสียหายใดๆที่เกิดขึ้นเนื่องจากการกระทำดังกล่าวของบริษัทฯทั้งสิ้น นอกจากนี้ในการที่ข้าพเจ้าขอสินเชื่อประเภทต่างๆ จากบริษัทนั้น ข้าพเจ้ายินยอมปฏิบัติตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯและเงื่อนไขของบริษัทฯ ทุกประการและยินยอมเสียค่า ธรรมเนียม ตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯ โดยข้าพเจ้าตกลงเป็นผู้ชำระเองทั้งสิ้น</textarea>
                          </div>
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
                                    <input v-model="registerdata.checkGetemail" type="checkbox" >
                                </div>
                            </div>
                            <p class="form-control">ต้องการรับข้อมูลข่าวสารรวมถึงโปรโมชั่นต่างๆของบริษัทฯ</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12">
                        <center>
                            <input type="submit" class="btn btn-primary" value="Apply for loan" @click="this.sumbmitRegister">
                        </center>
                    </div>
                </div>
         </div>
       </form>
    </div>
</template>
<script>
export default {
  title: "corporate-person",
  components: {},
  data() {
    return {
      registerdata: {
        coporateName: "",
        registernumber: "",
        registerdate: "",
        coporateNum: "",
        SignCondition: "",
        typeCoporate: "",
        businesstimeline: "",
        objective: "",
        moneyholder: "",
        checkCondition: "",
        checkGetemail: ""
      }
    };
  },
  methods: {
    async sumbmitRegister() {
      try {
        console.log(this.registerdata);
      } catch (error) {
        console.log("send Fail" + error);
      }
    }
  }
};
</script>

<style>
</style>

