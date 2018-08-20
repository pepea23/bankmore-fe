<template>
  <html>

  <head>
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

  </head>

  <body>
    <div class="container">
      <h1>Coporate</h1>
      <form action="/data_base.php" method="post" id="RegisFromCoporate">
        <h3 style="margin-top: 20px">Add your property</h3><br>
        <div class="container">
          <label>Owner name</label>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" id="inputOwnerFirstName" placeholder="First name">
            </div>
            <div class="col">
              <input type="text" class="form-control" id="inputOwneryLastName" placeholder="Last name">
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Company name</label>
              <input type="text" class="form-control" id="inputCompanyNameCoporate">
            </div>
            <div class="col">
              <label>Register number</label>
              <input type="text" class="form-control" id="inputRgisterNumberCoporate">
            </div>
            <div class="col">
              <label>Register day</label>
              <input type="date" class="form-control" id="inputRegisterDayCoporate">
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Number of directors</label>
              <input type="number" class="form-control" id="inputNumberOfDirectorsCoporate" min="0">
            </div>
            <div class="form-group col">
              <div class="form-group ">
                <label>Company type</label>
                <select id="inputCompanyTypeCoporate" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div class="col">
              <label>Business timeline</label>
              <input type="text" class="form-control" id="inputBusinessTimelineCoporate">
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" id="inputAddressCoporate">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Covenant</label>
                <textarea class="form-control" id="inputConvenantCoporate" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Business Objectives</label>
                <textarea class="form-control" id="inputBusinessObjectivesCoporate" rows="5"></textarea>
              </div>
            </div>
          </div>
          <label>Buy</label>
          <div class="row">
            <div class="col">

              <input type="number" class="form-control" id="input" min="0" max="1000000000">
            </div>
            <div class="col-md-1">บาท</div>
            <div class="col">
              <input type="text" class="form-control" id="input" placeholder="ถ้าจำนวนเงินมากกว่าหนึ่งร้อยล้านบาท">
            </div>
            <div class="col-md-1">บาท</div>
          </div>

        </div>
        <h3 style="margin-top: 20px">รายละเอียดขายฝาก</h3><br>
        <div class="container">
          <div class="row">
            <div class="col">
              <label>จำนวนเงินยอดฝากที่ต้องการ</label>
              <input type="text" class="form-control" id="input" placeholder="บาท">
            </div>

            <div class="col">
              <label>ดอกเบี้ยที่ต้องการ</label>
              <input type="text" class="form-control" id="input" placeholder="บาทต่อปี">
            </div>

          </div>
          <div class="row">
            <div class="col">
              <label>ระยะเวลาขายฝากที่ต้องการ(ต่ำสุดสามเดือน-สูงสุด60เดือน)</label>
              <input type="number" class="form-control" id="input" min="3" max="60" placeholder="เดือน">
            </div>
            <div class="col">
              <label>หากต้องการระยะยาวกว่าโปรดระบุ</label>
              <input type="text" class="form-control" id="input" placeholder="เดือน">
            </div>
          </div>
          <label>รายละเอียดทรัพย์สินที่ต้องการขายฝาก</label>
          <div class="row">
            <div class="col">
              <label>เลขที่โฉนด</label>
              <input type="text" class="form-control" id="input">
            </div>
            <div class="col">
              <label>ที่ตั้งโฉนด</label>
              <input type="text" class="form-control" id="input">
            </div>
            <div class="col">
              <label>ขนาดที่ดิน</label>
              <input type="text" class="form-control" id="input" placeholder=" ตารางนิ้ว/เมตร/วา/กิโลเมตร">
            </div>
          </div>
          <label>ชื่อผู้ครอบครองโฉนด</label>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" id="input" placeholder="First name">
            </div>
            <div class="col">
              <input type="text" class="form-control" id="input" placeholder="Last name">
            </div>
          </div>
          <label>Upload เอกสารโฉนดที่ดิน/รูปทรัพย์สิน/แผนที่ตั้งทรัพย์สิน</label>
          <div class="row">
            <div class="col">
              <input type="file" class="form-control" id="input" name="input" multiple>
            </div>

          </div>

          <div class="col">
            <label>แผนที่</label>
            <center>
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1533319944552" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </center>
          </div>

          <div class="col" style="margin-top:20px"></div>

          <div class="row">
            <div class="col">
              <label>การดำเนินกิจการทรัพย์สินที่ขายฝาก</label><br>
              <input type="radio" name="statusCompany" value="non" id="input">ไม่ได้ดำเนินการ

              <input type="radio" name="statusCompany" value="on" id="inputMarried">มีการดำเนินการเป็น :<input type="text" name="operate" id="inputOperate">
            </div>
            <div class="col-md-3">
              <label>สนใจผู้รับฝากซื้อหาผู้เช่า</label><br>
              <input type="radio" name="status_assept" value="true" id="inputYes">Yes
              <div style=" margin-right: 1px"></div>
              <input type="radio" name="status_assept" value="false" id="inputNo">No
            </div>
            <div class="col-md-3">
              <label>ต้องการรับผลตอบรับช่องทางไหน</label><br>
              <select id="inputCompanyTypeCoporate" class="form-control">
                <option selected>Telephone</option>
                <option>Email</option>
              </select>

            </div>

          </div>
          <div style="display: flex; justify-content: center; align-items: center;">
            <div class="col" style="max-width:500px">
              <p>ข้อตกลง : ข้าพเจ้าขอรับรองว่าข้อมูลตามรายละเอียดข้างต้นเป็นความจริงทุกประการ โดยข้าพเจ้ายินยอมให้บริษัทฯ ติดต่อ สอบถาม และ/หรือตรวจสอบข้อมูลรายละเอียดต่างๆของขาพเจ้า และ/หรือ บุคคลที่เกี่ยวข้องได้จากบุคคล และ/หรือ นิติบุคคลอื่นทั้งหมด และไม่ว่าด้วยวิธีใดๆ ตลอดจนยินยอมให้บริษัทฯ เปิดเผยข้อมูลดังกล่าวแก่บุคคล และ/หรือ นิติบุคคลใดได้ตามที่บริษัทฯ เห็นสมควร ทั้งนี้ ข้าพเข้าจะไม่เรียกร้องค่าตอบแทน และ/หรือ ค่าเสียหายใดๆที่เกิดขึ้นเนื่องจากการกระทำดังกล่าวของบริษัทฯทั้งสิ้น นอกจากนี้ในการที่ข้าพเจ้าขอสินเชื่อประเภทต่างๆ จากบริษัทนั้น ข้าพเจ้ายินยอมปฏิบัติตามระเเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯและเงื่อนไขของบริษัทฯ ทุกประการและยินยอมเสียค่า ธรรมเนียม ตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯ โดยข้าพเจ้าตกลงเป็นผู้ชำระเองทั้งสิ้น </p>
              <label>ยืนยัน</label><br>
              <input type="checkbox" name="confirm" value="ture" id="input">ตกลง<br>
              <label>ต้องการรับข้อมูลข่าวสารรวมถึงโปรโมชั่นต่างๆของบริษัทฯ หรือไม่</label><br>
              <input type="checkbox" name="regisNew" value="ture" id="input">ตกลง<br>

            </div>
          </div>
        </div>
        <input type="submit" value="Submit" form="RegisFromCoporate" onclisk="doSubmit(this)">
      </form>
    </div>
  </body>

  </html>
</template>

<script>
function doSubmit(form) {
  alert('Thank you')

  this.$router.push('@/pages/index.vue')
}

export default {
  name: 'Register-Corporate-Form',
}
</script>
