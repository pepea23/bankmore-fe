<template>
<html>
<head>
	<title></title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

</head>
<body>
<div class="container">
    <h1>Personal</h1>
	<form action="/data_base.php" method="post" id="RegisFromPerson">
        <h3 style="margin-top: 20px">Add your property</h3><br>
		<div class="container">
		<label>Name</label>
  		<div class="row">
    		<div class="col">
      			<input type="text" class="form-control" id="inputFirstName" placeholder="First name">
    		</div>
    		<div class="col">
      			<input type="text" class="form-control" id="inputLastName" placeholder="Last name">
    		</div>
  		</div>
  		<br>
  		<div class="form-group">
    		<label>Address</label>
    			<input type="text" class="form-control" id="inputAddress">
  		</div>
  		<div class="row">
    		<div class="form-group col-md-7">
      			<label >City</label>
      				<input type="text" class="form-control" id="inputCity">
    		</div>
    		<div class="form-group col">
      			<label>State</label>
      				<select id="inputState" class="form-control">
        				<option selected>Choose...</option>
        				<option>...</option>
      				</select>
    		</div>
    		<div class="form-group col">
    			<label>Tel</label>
     	 			<input type="tel" class="form-control" id="inputTel" placeholder="Tel">
   			</div>
   		</div>
   		<div class="row">
   			<div class="col-md-3">
   				<label>Birth day</label>
      			<input type="date" class="form-control" id="inputBirthDay" placeholder="birth day">
    		</div>
			<div class="col-md-2">   	
				<label>Status</label>
				<div class="container">
			 		<input type="radio" name="status" value="single" id="inputSingle" >Single
			 		<div style=" margin-right: 1px"></div>
             		<input type="radio" name="status" value="married" id="inputMarried">Married
         		</div>
			</div>
			<div class="col-3">
				<label>Number of child</label>
      		<input type="number" class="form-control" id="inputChild" min="0">
			</div>
			<div class="form-group col">
      			<label>Education</label>
      				<input type="text" class="form-control" id="inputEducation">
    		</div>
   		</div>
    </div>
    <h3 style="margin-top: 20px">Add your business</h3><br>
    <div class="container">
   		<div class="row">
   			<div class="form-group col-md-3">
      			<label>Job</label>
      			<input type="text" class="form-control" id="inputJob">
    		</div>
    			<div class="form-group col-md-2">
      			<label>Rank</label>
      			<input type="text" class="form-control" id="inputRank">
    		</div>
    		<div class="form-group col-md-4">
      			<label>Company name</label>
      			<input type="text" class="form-control" id="inputCompanyName">
    		</div>
    		<div class="form-group col-md-3">
      			<div class="form-group ">
      			<label>Company type</label>
      				<select id="inputCompanyType" class="form-control">
        				<option selected>Choose...</option>
        				<option>...</option>
      				</select>
    			</div>
    		</div>
   		
   			</div>
   			<div class="row">
				<div class="col-md-3">
					<label>Years of work</label>
      					<input type="number" class="form-control" id="inputYearOfWork" min="0">
				</div>
   				<div class="col-md-3">
					<label>Salary</label>
      					<input type="number" class="form-control" id="inputSalary" min="0">
				</div>
   				<div class="col-md-3">
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
               <label>Buy</label>
              <div class="row">
                  <div class="col"> 
					  
      					<input type="number" class="form-control" id="input" min="0" max="1000000000">
                  </div>
                  <div class="col-md-1">บาท</div>
                  <div class="col">
                        <input type="text" class="form-control" id="input" placeholder="ถ้าจำนวนเงินมากกว่าหนึ่งร้อยล้านบาท" >
				</div>
                <div class="col-md-1">บาท</div>
                  </div>

              
        </div>
        
        <input type="submit" value="Submit" from="RegisFromPerson" onclisk="doSubmit(this)">
	</form>
</div>

</body>
</html>
</template>

<script>
function doSubmit(form) {
  alert("Thank you")

  this.$router.push("@/pages/index.vue");
}

export default {
  name: "SellFormRegister_person"
};
</script>