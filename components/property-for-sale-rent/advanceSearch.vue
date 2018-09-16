<template>
<div class="card card-body pinside30">
  <form >
    <div class="container">
      <div class="search md">
        <h3>Advance Search</h3>
        <input class="form-control" name="keyword" type="text" placeholder="keywords">

        <div class="col-md-12 col-12">
          <div class="form-group">
            <label>ขาย/เช่า</label>
            <select class="form-control">
              <option selected="selected">ขาย</option>
              <option>เช่า</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-12">
            <select class="form-control">
              <option selected="selected">โซนที่ตั้งของทรัพย์</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="col-md-12 col-12">
            <select class="form-control">
              <option selected="selected">ประเภททรัพย์สิน ...</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="col-md-12 col-12">
            <input type="text" placeholder="จำนวนห้องนอน" class="form-control"></div>
          <div class="col-md-12 col-12">
            <input type="text" placeholder="จำนวนห้องน้ำ" class="form-control"></div>
          <div class="col-md-12 col-12">
            <input type="number" min="0" placeholder="ราคา" class="form-control"></div>
          <div class="col-md-12 col-12">
            <button type="submit" class="btn btn-primary active">Search</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  title: 'advanceSearch',
  components: {},
}
</script>
