<template>
    <div class="bg-white section-space80">
        <div class="container">
            <div class="person">
                <div class="form">
                    <form class="register_form" name="person_form" method="post" action="SaveForm_person.php"  target="_blank">
				        <fieldset>
                            <legend>person:</legend>    
                                first_name : <input type="text" id="first_name"/><br>
                                last_name  : <input type="text" id="last_name"/><br>
                                address     : <input type="text" id="address"/><br>
                                cell_phone_no :<input type="tel" id="cell_phone_no"/><br>
                                email      : <input type="text" id="email"/><br>
                                birth_day  : <input type="date" id="birth_day"/><br>
                                old        : <input type="text" id="old"/><br>
                                status(single/marred/other) : <input type="text" id="status_single-marred-other"/><br>                    
                                number_of-Child : <input type="text" id="number_of_child"/><br>
                                education  : <input type="text" id="education"/><br>
                                job        : <input type="text" id="job"/><br>
                                company_name : <input type="text" id="company_name"/><br>
                                business_type : <input type="text" id="business_type"/><br>
                                rank       : <input type="text" id="rank"/><br>
                                years_of_work : <input type="text" id="years_of_work"/><br>
                                salary     : <input type="text" id="salary"/><br>
                                other_income : <input type="text" id="other_income"/><br>
				            <input type="submit" value="Submit" onclick="doSummit(form)"/>  
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
  name: 'SellFormRegister_person',
}
</script>