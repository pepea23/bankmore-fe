<template>
     <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="slider-img"><img src="@/static/images/slider-1.jpg" alt="Borrow - Loan Company Website Template" class="">
                    <div class="container">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">Choose the Best Loan. Apply Now!</h1>
                                <p class="slider-text d-none d-xl-block d-lg-block d-sm-block">The low rate you need for the need you want! Call
                                    <br> (555) 123-4567</p>
                                <a href="loan-listing-image.html" class="btn btn-default">get started today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                    <div class="slider-img"><img src="@/static/images/slider-2.jpg" alt="Borrow - Loan Company Website Template" class="">
                        <div class="container">
                            <div class=" col-xl-6 col-lg-6 col-md-12  col-sm-12 col-12">
                                <div class="slider-captions">
                                    <h1 class="slider-title">Award winning car loans with Borrow</h1>
                                    <p class="slider-text d-none d-xl-block d-lg-block d-sm-block"> Award winning car loans with low fixed rates and no ongoing fees.</p>
                                    <a href="loan-listing-image.html" class="btn btn-default ">View Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="carousel-item">
                    <div class="slider-img"><img src="@/static/images/slider-3.jpg" alt="Borrow - Loan Company Website Template" class="">
                        <div class="container">
                            <div class="col-xl-6 col-lg-6 col-md-12  col-sm-12 col-12">
                                <div class="slider-captions">
                                    <h1 class="slider-title">Education Loan From Borrow Rate Low Of Interest.</h1>
                                    <p class="slider-text d-none d-xl-block d-lg-block d-sm-block">Education Loan From Avanse At An Attractive Rate Of Interest. Apply Now!</p>
                                    <a href="loan-listing-image.html" class="btn btn-default">View Products</a>
                                </div>
                            </div>
                        </div>
                    </div> 
            </div>
        </div>
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
</div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>