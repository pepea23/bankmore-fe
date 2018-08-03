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
      			    <input type="text" class="form-control" id="inputOwneryLastName"  placeholder="Last name">
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
            </div>
             <input type="submit" value="Submit" form="RegisFromCoporate" onclisk="doSubmit(this)">
	</form>
</div>
</body>
</html>
</template>

<script>
function doSubmit(form) {
    alert("Thank you")
    
    this.$router.push('@/pages/index.vue')
};

export default {
  name: 'SellFormRegister_coporate',
}
</script>