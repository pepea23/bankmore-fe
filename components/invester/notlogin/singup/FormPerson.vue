<template>
    <div>
       <form>
         <div class="container">
          <div class="row">
            <h1>Personal</h1>
          </div>
          <br>
            <label>ชื่อ</label>
              <div class="row">
                <div class="col-6 col-md-6">
                  <input type="text" name="name" placeholder="ชื่อ" class="form-control">
                </div>
                <div class="col-6 col-md-6">
                  <input type="text" name="surname" placeholder="นามสกุล" class="form-control">
                </div>
              </div>
              <label>ที่อยู่</label>
              <div class="row">
                <div class="col-12 col-md-12">
                  <input type="text" name="address" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <label>เบอร์ติดต่อ</label>
                  <input type="tel" name="phonenumber" class="form-control">
                </div>
                <div class="col-12 col-md-6">
                  <label>อีเมล์</label>
                  <input type="email" name="email" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-4">
                  <label>วันเกิด</label>
                  <input type="date" name="birthday" class="form-control">
                </div>
                <div class="col-12 col-md-4">
                  <label>อายุ</label>
                  <input type="number" name="age" min="1" class="form-control">
                </div>
                <div class="col-12 col-md-2">
                  <label>สถานการณ์สมรส</label>
                  <div class="container">
                    <input type="radio" name="status" value="single" id="inputSingle">โสด
                        <div style="margin-right: 1px;"></div>
                    <input type="radio" name="status" value="married" id="inputMarried">แต่งงาน
                  </div>
                </div>
                <div class="col-12 col-md-2">
                  <label>จำนวนบุตร</label>
                  <input type="number" name="child" min="0" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-5">
                  <label>การศึกษา</label>
                  <input type="text" name="education" class="form-control">
                </div>
                <div class="col-12 col-md-7">
                  <label>ที่อยู่ที่สามารถติดต่อได้</label>
                  <input type="text" name="presentaddress" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-4">
                  <label>อาชีพ</label>
                  <input type="text" name="career" class="form-control">
                </div>
                <div class="col-12 col-md-8">
                  <label>ชื่อสถานประกอบการ</label>
                  <input type="text" name="companyname" class="form-control">
                </div>
                <div class="col-12 col-md-4">
                  <label>ประเภทธุรกิจ</label>
                  <select class="form-control">
                    <option selected="selected">Choose...</option>
                    <option value="...">...</option>
                  </select>
                </div>
                <div class="col-12 col-md-8">
                  <label>ตำแหน่ง</label>
                  <input type="text" name="position" class="form-control">
                </div>
                <div class="col-12 col-md-3">
                  <label>จำนวนปีที่ทำงาน</label>
                  <input type="number" name="yearwork" min="0" class="form-control">
                </div>
                <div class="col-12 col-md-5">
                  <label>เงินเดือน</label>
                  <input type="number" name="salary" min="0" class="form-control">
                </div>
                <div class="col-12 col-md-4">
                  <label>รายได้อื่นๆ</label>
                  <input type="number" name="otherincome" min="0" class="form-control">
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12">
                  <label>วัตถุประสงค์ในการรับซื้อฝาก : </label>
                </div>
                <div class="col-12 col-md-12">
                  <textarea name="objective" rows="5" class="form-control"></textarea>
                </div>
              </div>
              <label>จำนวนเงินยอดรับซื้อฝาก</label>
              <div class="row">
                <div class="col-12 col-md-12">
                  <br>
                  <vue-slider v-model="inputSlider" min="1000000" max="100000000" interval="100" speed="0.2"></vue-slider>
                </div>
                <div class="col-12 col-md-6">
                  <input type="number" placeholder="ถ้าจำนวนเงินมากกว่าหนึ่งร้อยล้านบาท" min="100000000" class="form-control">
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
                        <textarea class="form-control" rows="7" id="text" disabled>ข้อตกลง : ข้าพเจ้าขอรับรองว่าข้อมูลตามรายละเอียดข้างต้นเป็นความจริงทุกประการ โดยข้าพเจ้ายินยอมให้บริษัทฯ ติดต่อ สอบถาม และ/หรือตรวจสอบข้อมูลรายละเอียดต่างๆของข้าพเจ้า และ/หรือ บุคคลที่เกี่ยวข้องได้จากบุคคล และ/หรือ นิติบุคคลอื่นทั้งหมด และไม่ว่าด้วยวิธีใดๆ ตลอดจนยินยอมให้บริษัทฯ เปิดเผยข้อมูลดังกล่าวแก่บุคคล และ/หรือ นิติบุคคลใดได้ตามที่บริษัทฯ เห็นสมควร ทั้งนี้ ข้าพเข้าจะไม่เรียกร้องค่าตอบแทน และ/หรือ ค่าเสียหายใดๆที่เกิดขึ้นเนื่องจากการกระทำดังกล่าวของบริษัทฯทั้งสิ้น นอกจากนี้ในการที่ข้าพเจ้าขอสินเชื่อประเภทต่างๆ จากบริษัทนั้น ข้าพเจ้ายินยอมปฏิบัติตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯและเงื่อนไขของบริษัทฯ ทุกประการและยินยอมเสียค่า ธรรมเนียม ตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯ โดยข้าพเจ้าตกลงเป็นผู้ชำระเองทั้งสิ้น</textarea>
                        </div>
                        </center>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" required>
                                </div>
                            </div>
                            <p class="form-control">ยืนยัน</p>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="checkbox" >
                                </div>
                            </div>
                            <p class="form-control">ต้องการรับข้อมูลข่าวสารรวมถึงโปรโมชั่นต่างๆของบริษัทฯ</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12">
                        <center>
                            <input type="submit" class="btn btn-primary" value="Apply for loan" from="RegisFromPerson" onclisk="doSubmit(this)">
                        </center>
                    </div>
                </div>
         </div>
       </form>
    </div>
</template>
<script>
export default {
  title: 'form-person',
  components: {},
  data() {
    return {
      inputSlider: 1000000,
    }
  },
}
</script>

<style>
</style>

