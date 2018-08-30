<template>
    <div class="bg-white section-space80">
        <h1>Coporate</h1>
        <form action="/data_base.php" method="post" id="RegisFromCoporate">
            <h3 style="margin-top: 20px">Add your property</h3><br>
            <div class="container">
                <label>Owner name</label>
                <div class="row">
                    <div class="col-6 col-md-6">
                        <input type="text" class="form-control" id="inputOwnerFirstName" placeholder="First Name">
                    </div>
                    <div class="col-6 col-md-6">
                        <input type="text" class="form-control" id="inputOwneryLastName" placeholder="Last Name">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-5">
                        <label>Company name</label>
                        <input type="text" class="form-control" id="inputCompanyNameCoporate">
                    </div>
                    <div class="col-12 col-md-4">
                        <label>Register number</label>
                        <input type="text" class="form-control" id="inputRgisterNumberCoporate">
                    </div>
                    <div class="col-12 col-md-3">
                        <label>Register day</label>
                        <input type="date" class="form-control" id="inputRegisterDayCoporate">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <label>Number of directors</label>
                        <input type="number" class="form-control" id="inputNumberOfDirectorsCoporate" min="0">
                    </div>
                    <div class="col-12 col-md-5">
                        <label>Company type</label>
                        <select id="inputCompanyTypeCoporate" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label>Business timeline</label>
                        <input type="text" class="form-control" id="inputBusinessTimelineCoporate">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12">
                        <label>Address</label>
                        <input type="text" class="form-control" id="inputAddressCoporate">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="form-group">
                            <label>Covenant</label>
                            <textarea class="form-control" id="inputConvenantCoporate" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="form-group">
                            <label>Business Objectives</label>
                            <textarea class="form-control" id="inputBusinessObjectivesCoporate" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <label>Buy</label>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <input type="number" class="form-control" id="input" min="0" max="1000000000" placeholder="บาท">
                    </div>
                    <div class="col-12 col-md-6">
                        <input type="text" class="form-control" id="input" placeholder="ถ้าจำนวนเงินมากกว่าหนึ่งร้อยล้านบาท">
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
                </div>
                <div class="row">
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
                    <div class="col-12 col-md-4">
                        <label>เลขที่โฉนด</label>
                        <input type="text" class="form-control" id="input">
                    </div>
                    <div class="col-12 col-md-4">
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
                    <div class="col-md-3">
                        <label>สนใจผู้รับฝากซื้อหาผู้เช่า</label><br>
                        <input type="radio" name="status_assept" value="true" id="inputYes">Yes
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
                    <div class="col-12"  style="max-width:500px">
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
  name: 'Register-Corporate-Form',
}
</script>
