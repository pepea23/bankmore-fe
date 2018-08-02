<template>
    <div class="bg-white section-space80">
        <div class="container">
            <div class="coporate">
                <div class="form" >
                    <form class="register_form" name="coporate_form" method="post" action="SaveForm_coporate.php" onsubmit="doSubmit(this)" target="_blank">
                        <fieldset>
                             <legend>coporate:</legend>
                                company_name      : <input type="text" id="company_name"/><br>
                                registered_number : <input type="text" id="registered_number"/><br>
                                date_of_registration : <input type="date" id="date_of_registration"/><br>
                                the_number_of_directors : <input type="text" id="the_number_of_directors"/><br>
                                signing_conditions : <input type="text" id="signing_conditions"/><br>
                                business_type     : <input type="text" id="business_type"/><br>
                                company_duration  : <input type="text" id="company_duration"/><br>
                                purpose_of_purchase : <input textarea rows="4" cols="50" id="purpose_of_purchase"/><br>
                                amount_of_deposit : <input type="text" id="amount_of_deposit"/><br>
                                compact           : <input type="text" id="compact"/><br>
                                <input type="submit" value="Submit">  
                        </fieldset>
                    </form>                   
                </div>
	        </div>
        </div>
    </div>
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