<template>
  <div class="container">
    <form>
    <h3 style="margin-top: 20px">รายละเอียดขายฝาก</h3><br>
    <div class="row">
      <div class="col-12 col-md-6">
        <label>จำนวนเงินยอดฝากที่ต้องการ</label>
        <input type="text" class="form-control" name="amountDeposit" placeholder="บาท">
      </div>
      <div class="col-12 col-md-6">
        <label>ดอกเบี้ยที่ต้องการ</label>
        <input type="text" class="form-control" name="interest" placeholder="บาทต่อปี">
      </div>
      <div class="col-12 col-md-6">
        <label>ระยะเวลาขายฝากที่ต้องการ(ต่ำสุดสามเดือน-สูงสุด60เดือน)</label>
        <input type="number" class="form-control" name="input" min="3" max="60" placeholder="เดือน">
      </div>
      <div class="col-12 col-md-6">
        <label>หากต้องการระยะยาวกว่าโปรดระบุ</label>
        <input type="text" class="form-control" name="input" placeholder="เดือน">
      </div>
    </div>
    <b>รายละเอียดทรัพย์สินที่ต้องการขายฝาก</b>
    <div class="row">
      <div class="col-12 col-md-3">
        <label>เลขที่โฉนด</label>
        <input type="text" class="form-control" name="input">
      </div>
      <div class="col-12 col-md-5">
        <label>ที่ตั้งโฉนด</label>
        <input type="text" class="form-control" name="input">
      </div>
      <div class="col-12 col-md-4">
        <label>ขนาดที่ดิน</label>
        <input type="text" class="form-control" name="input" placeholder=" ตารางนิ้ว/เมตร/วา/กิโลเมตร">
      </div>
    </div>
    <label>ชื่อผู้ครอบครองโฉนด</label>
    <div class="row">
      <div class="col-6 col-md-6">
        <input type="text" class="form-control" name="input" placeholder="First name">
      </div>
      <div class="col-6 col-md-6">
        <input type="text" class="form-control" name="input" placeholder="Last name">
      </div>
    </div>
    <label>Upload เอกสารโฉนดที่ดิน/รูปทรัพย์สิน/แผนที่ตั้งทรัพย์สิน</label>
    <div class="row">
      <div class="col-12 col-md-12">
        <input type="file" class="form-control" name="input" multiple>
      </div>
    </div>
    <div class="col-12 col-md-12">
      <label>แผนที่</label>
      <center>
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1533319944552" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
      </center>
    </div>
    <b>การดำเนินกิจการทรัพย์สินที่ขายฝาก</b>
    <div class="row">
      <div class="col-12 col-md-5">
        <input type="radio" name="statusCompany" value="non" id="input"> ไม่ได้ดำเนินการ
      </div>
      <div class="col-12 col-md-7">
        <input type="radio" name="statusCompany" value="on" id="inputMarried" class=""> มีการดำเนินการเป็น : <input type="text" name="operate" id="inputOperate">
      </div>
      <div class="col-12 col-md-3">
        <label>สนใจผู้รับฝากซื้อหาผู้เช่า</label><br>
        <input type="radio" name="status_assept" value="true" id="inputYes">Yes
        <input type="radio" name="status_assept" value="false" id="inputNo">No
      </div>
      <div class="col-12 col-md-3">
        <label>ต้องการรับผลตอบรับช่องทางไหน</label><br>
        <select id="inputCompanyTypeCoporate" class="form-control">
          <option selected>Telephone</option>
          <option>Email</option>
        </select>
      </div>
    </div>
    <center><input type="submit" value="addproperty" class="btn btn-default"></center>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProperty-Borrow',
}
</script>
