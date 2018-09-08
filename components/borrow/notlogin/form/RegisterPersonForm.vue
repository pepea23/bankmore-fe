<template>
<div class="bg-white section-space80">
  <center>
    <h1>Personal</h1>
  </center>
  <form action="" method="post">
    <div class="container">
      <h3 style="margin-top: 20px">ข้อมูลผู้ขายฝาก</h3><br>
      <label>ชื่อ</label>
      <div class="row">
        <div class="col-6 col-md-6">
          <input type="text" class="form-control" name="firstName" placeholder="ชื่อ">
        </div>
        <div class="col-6 col-md-6">
          <input type="text" class="form-control" name="lastName" placeholder="นามสกุล">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12">
          <label>ที่อยู่</label>
          <input type="text" class="form-control" name="address">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3">
          <label>เบอร์ติดต่อ</label>
          <input type="tel" name="phonenumber" class="form-control">
        </div>
        <div class="col-12 col-md-3">
          <label>อีเมล์</label>
          <input type="email" name="email" class="form-control">
        </div>
        <div class="col-12 col-md-3">
          <label>บุคคลอ้างอิง</label>
          <input type="text" name="reference" class="form-control">
        </div>
        <div class="col-12 col-md-3">
          <label>วันเกิด</label>
          <input type="date" name="birthday" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-2">
          <label>อายุ</label>
          <input type="number" name="age" min="1" class="form-control">
        </div>
        <div class="col-12 col-md-2">
          <label>สถานภาพสมรส</label>
          <div class="container">
            <input type="radio" name="status" value="single">โสด
            <div style=" margin-right: 1px"></div>
            <input type="radio" name="status" value="married">แต่งงาน
          </div>
        </div>
        <div class="col-12 col-md-2">
          <label>จำนวนบุตร</label>
          <input type="number" class="form-control" name="numChild" min="0">
        </div>
        <div class="col-12 col-md-6">
          <label>การศึกษา</label>
          <input type="text" class="form-control" name="education">
        </div>
      </div>
    </div>

    <div class="container">
      <h3 style="margin-top: 20px">อาชีพ/ประเภทธุรกิจ</h3><br>
      <div class="row">
        <div class="col-12 col-md-3">
          <label>อาชีพ</label>
          <input type="text" class="form-control" name="job">
        </div>
        <div class="col-12 col-md-5">
          <label>ชื่อสถานประกอบการ</label>
          <input type="text" class="form-control" name="companyName">
        </div>
        <div class="col-12 col-md-4">
          <div class="form-group ">
            <label>ประเภทธุรกิจ</label>
            <select id="inputCompanyType" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3">
          <label>จำนวนที่ทำงาน</label>
          <input type="number" class="form-control" name="yearOfWork" min="0">
        </div>
        <div class="col-12 col-md-3">
          <label>ตำแหน่ง</label>
          <input type="text" class="form-control" name="position">
        </div>
        <div class="col-12 col-md-3">
          <label>เงินเดือน</label>
          <input type="number" class="form-control" name="salary" min="0">
        </div>
        <div class="col-12 col-md-3">
          <label>รายได้อื่น ๆ</label>
          <input type="text" class="form-control" name="otherIncome">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>วัตถุประสงค์ในการฝากขาย</label>
            <textarea class="form-control" id="businessObjectives" rows="5"></textarea>
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
                <input type="checkbox" required>
              </div>
            </div>
            <p class="form-control">ยืนยัน</p>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" name="follow">
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
            <input type="submit" class="btn btn-primary" value="Apply for loan" from="RegisFromPerson" onclisk="doSubmit(this)">
          </center>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
function doSubmit(form) {
  alert('Thank you')

  this.$router.push('@/pages/index.vue')
}

export default {
  name: 'Register-Person-Form',
}
</script>
