<template>
    <div class="bg-white section-space80">
    <h1>Personal</h1>
    <form action="/data_base.php" method="post" id="RegisFromPerson">
        <h3 style="margin-top: 20px">Add your property</h3><br>
        <div class="container">
            <label>Name</label>
            <div class="row">
                <div class="col-6 col-md-6">
                    <input type="text" class="form-control" id="firstName" placeholder="First name">
                </div>
                <div class="col-6 col-md-6">
                    <input type="text" class="form-control" id="lastName" placeholder="Last name">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12">
                <label>Address</label>
                <input type="text" class="form-control" id="inputAddress">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                    <label>City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-12 col-md-4">
                    <label>State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-12 col-md-4">
                    <label>Tel</label>
                    <input type="tel" class="form-control" id="inputTel" placeholder="Tel">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3">
                    <label>Birthday</label>
                    <input type="date" class="form-control" id="inputBirthday" placeholder="birthday">
                </div>
                <div class="col-12 col-md-2">
                    <label>Status</label>
                    <div class="container">
                        <input type="radio" name="status" value="single" id="inputSingle">Single
                        <div style=" margin-right: 1px"></div>
                        <input type="radio" name="status" value="married" id="inputMarried">Married
                    </div>
                </div>
                <div class="col-12 col-md-2">
                    <label>Number of child</label>
                    <input type="number" class="form-control" id="inputChild" min="0">
                </div>
                <div class="col-12 col-md-5">
                    <label>Education</label>
                    <input type="text" class="form-control" id="inputEducation">
                </div>
            </div>
        </div>
        <h3 style="margin-top: 20px">Add your business</h3><br>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <label>Job</label>
                    <input type="text" class="form-control" id="inputJob">
                </div>
                <div class="col-12 col-md-3">
                    <label>Rank</label>
                    <input type="text" class="form-control" id="inputRank">
                </div>
                <div class="col-12 col-md-5">
                    <label>Company name</label>
                    <input type="text" class="form-control" id="inputCompanyName">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="form-group ">
                        <label>Company type</label>
                        <select id="inputCompanyType" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <label>Years of work</label>
                    <input type="number" class="form-control" id="inputYearOfWork" min="0">
                </div>
                <div class="col-12 col-md-3">
                    <label>Salary</label>
                    <input type="number" class="form-control" id="inputSalary" min="0">
                </div>
                <div class="col-12 col-md-3">
                    <label>Other income</label>
                    <input type="number" class="form-control" id="inputOtherIncome" min="0">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Business Objectives</label>
                        <textarea class="form-control" id="inputBusinessObjectives" rows="5"></textarea>
                    </div>
                </div>
            </div>

        </div>
        <h3 style="margin-top: 20px">รายละเอียดขายฝาก</h3><br>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <label>จำนวนเงินยอดฝากที่ต้องการ</label>
                    <input type="text" class="form-control" id="input" placeholder="บาท">
                </div>
                <div class="col-12 col-md-6">
                    <label>ดอกเบี้ยที่ต้องการ</label>
                    <input type="text" class="form-control" id="input" placeholder="บาทต่อปี">
                </div>
                <div class="col-12 col-md-6">
                    <label>ระยะเวลาขายฝากที่ต้องการ(ต่ำสุดสามเดือน-สูงสุด60เดือน)</label>
                    <input type="number" class="form-control" id="input" min="3" max="60" placeholder="เดือน">
                </div>
                <div class="col-12 col-md-6">
                    <label>หากต้องการระยะยาวกว่าโปรดระบุ</label>
                    <input type="text" class="form-control" id="input" placeholder="เดือน">
                </div>
            </div>
            <b>รายละเอียดทรัพย์สินที่ต้องการขายฝาก</b>
            <div class="row">
                <div class="col-12 col-md-3">
                    <label>เลขที่โฉนด</label>
                    <input type="text" class="form-control" id="input">
                </div>
                <div class="col-12 col-md-5">
                    <label>ที่ตั้งโฉนด</label>
                    <input type="text" class="form-control" id="input">
                </div>
                <div class="col-12 col-md-4">
                    <label>ขนาดที่ดิน</label>
                    <input type="text" class="form-control" id="input" placeholder=" ตารางนิ้ว/เมตร/วา/กิโลเมตร">
                </div>
            </div>
            <label>ชื่อผู้ครอบครองโฉนด</label>
            <div class="row">
                <div class="col-6 col-md-6">
                    <input type="text" class="form-control" id="input" placeholder="First name">
                </div>
                <div class="col-6 col-md-6">
                    <input type="text" class="form-control" id="input" placeholder="Last name">
                </div>
            </div>
            <label>Upload เอกสารโฉนดที่ดิน/รูปทรัพย์สิน/แผนที่ตั้งทรัพย์สิน</label>
            <div class="row">
                <div class="col-12 col-md-12">
                    <input type="file" class="form-control" id="input" name="input" multiple>
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
            <div style="display: flex; justify-content: center; align-items: center;">
                <div class="col" style="max-width:500px">
                    <center>
                    <textarea rows="7" cols="44" id="text" disabled>ข้อตกลง : ข้าพเจ้าขอรับรองว่าข้อมูลตามรายละเอียดข้างต้นเป็นความจริงทุกประการ โดยข้าพเจ้ายินยอมให้บริษัทฯ ติดต่อ สอบถาม และ/หรือตรวจสอบข้อมูลรายละเอียดต่างๆของข้าพเจ้า และ/หรือ บุคคลที่เกี่ยวข้องได้จากบุคคล และ/หรือ นิติบุคคลอื่นทั้งหมด และไม่ว่าด้วยวิธีใดๆ ตลอดจนยินยอมให้บริษัทฯ เปิดเผยข้อมูลดังกล่าวแก่บุคคล และ/หรือ นิติบุคคลใดได้ตามที่บริษัทฯ เห็นสมควร ทั้งนี้ ข้าพเข้าจะไม่เรียกร้องค่าตอบแทน และ/หรือ ค่าเสียหายใดๆที่เกิดขึ้นเนื่องจากการกระทำดังกล่าวของบริษัทฯทั้งสิ้น นอกจากนี้ในการที่ข้าพเจ้าขอสินเชื่อประเภทต่างๆ จากบริษัทนั้น ข้าพเจ้ายินยอมปฏิบัติตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯและเงื่อนไขของบริษัทฯ ทุกประการและยินยอมเสียค่า ธรรมเนียม ตามระเบียบ ข้อกำหนดและเงื่อนไขของบริษัทฯ โดยข้าพเจ้าตกลงเป็นผู้ชำระเองทั้งสิ้น</textarea>
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
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12">
                    <center>
                <input type="submit" class="btn btn-primary" value="Submit" from="RegisFromPerson" onclisk="doSubmit(this)">
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
