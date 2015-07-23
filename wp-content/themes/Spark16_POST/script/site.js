(function($){

	$(document).ready(function(){
		$('.sign_on_box .close').click(function(){
			$(this).parent().removeClass('open');
		})

		var owlPreview = $('.content-preview-section .slides');
        owlPreview.owlCarousel({

            // lazyLoad : true,
            // center: true,
            // items: 3,
            // margin: 20,
            loop: true,
            nav: true,
            navText: [
                "<i class='pager-left'></i>",
                "<i class='pager-right'></i>"
            ],
            pagination: false,
            // autoHeight: true,
            responsiveRefreshRate: 0,
            responsive:{
                0: {
                    items: 1
                },
                750: {
                    items: 2
                },
                1000: {
                	items: 3
                }
            }
        });
        // owlPreview = owlPreview.data('owlCarousel');

		var owlNewsCommunity = $('.mobile.news');
        owlNewsCommunity.owlCarousel({
            // lazyLoad : true,
            // center: true,
            // items: 3,
            // margin: 20,
            loop: true,
            nav: true,
            navText: [
                "<i class='pager-left'></i>",
                "<i class='pager-right'></i>"
            ],
            pagination: false,
            // autoHeight: true,
            responsiveRefreshRate: 0,
            responsive:{
                0: {
                    items: 1
                },
                750: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        var owlLogos = $('footer .logos');
        owlLogos.owlCarousel({
            // lazyLoad : true,
            center: true,
            // items: 3,
            // margin: 20,
            loop: true,
            nav: true,
            navText: [
                "<i class='pager-left'></i>",
                "<i class='pager-right'></i>"
            ],
            pagination: false,
            // autoHeight: true,
            responsiveRefreshRate: 0,
            responsive:{
                0: {
                    items: 3
                },
                750: {
                    items: 5
                },
                1000: {
                    items: 7
                }
            }
        });

        var owlAccounts = $('.account-group .accounts');
        owlAccounts.owlCarousel({
            // lazyLoad : true,
            center: true,
            // items: 3,
            // margin: 20,
            loop: true,
            nav: true,
            navText: [
                "<i class='pager-left'></i>",
                "<i class='pager-right'></i>"
            ],
            pagination: false,
            // autoHeight: true,
            responsiveRefreshRate: 0,
            responsive:{
                0: {
                    items: 1
                },
                750: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        //Post Gallery
        var postGallery = $('.post-gallery');
        postGallery.find('.thumb').on('click', function(){
            var source = $(this).data('src');
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            // console.log(source);
            $(this).parents('.post-gallery').find('.active-slide').css('background-image', 'url(' + source + ')')
        });

        postGallery.find('.thumb:first-of-type').click();

        var newsPreview = $('.news-preview');

        if ( $(document).width() <= 820 ) {
            postGallery.find('.slides').owlCarousel({
                // lazyLoad : true,
                center: true,
                // items: 3,
                // margin: 20,
                loop: true,
                nav: true,
                navText: [
                    "<i class='pager-left'></i>",
                    "<i class='pager-right'></i>"
                ],
                pagination: false,
                // autoHeight: true,
                responsiveRefreshRate: 0,
                responsive:{
                    0: {
                        items: 1
                    },
                    750: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        }

        $(window).resize(function(){
            if ( $(window).width > 845 ){
                // if ( owlPreview.data('owlCarousel') ){
                //     owlPreview.data('owlCarousel').reinit({
                //         touchDrag : false,
                //         mouseDrag : false,
                //         pagination: false
                //     })
                // }
                // if ( owlPreview.data('owlCarousel') ){
                // owlNewsCommunity.reinit({
                //     touchDrag : false,
                //     mouseDrag : false,
                //     pagination: false
                // })

                // if ( owlPreview.data('owlCarousel') ){
                // owlLogos.reinit({
                //     touchDrag : false,
                //     mouseDrag : false,
                //     pagination: false
                // })

                // postGallery.destroy();
            } else {
                // owlPreview.reinit();               
                // owlNewsCommunity.reinit();               
                // owlLogos.reinit();               
            }
        })

      // Custom Navigation Events
      // $(".owl-pager.next").click(function(){
      //   owl.trigger('owl.next');
      // })
      // $(".owl-pager.prev").click(function(){
      //   owl.trigger('owl.prev');
      // })

        // Leadership
        $('.leadership .member').on('click',function(){
            var member = $(this).data('member');
            $('.modal.'+ member ).addClass('open');
            $('body').addClass('modal-open');
        });

        $('.leadership .member-modal .pager span').on('click', function(){
            var member = $(this).data('member');
            $(this).parents('.member-modal').removeClass('open');
            $('.member-modal.'+member).addClass('open');
        })

        $('.who-we-finance .client').on('click',function(){
            var client = $(this).data('client');
            $('.modal.'+ client ).addClass('open');
            $('body').addClass('modal-open');
        });

        $('.who-we-finance .client-modal .pager span').on('click', function(){
            var client = $(this).data('client');
            $(this).parents('.client-modal').removeClass('open');
            $('.client-modal.'+client).addClass('open');
        })

        $('.modal .close').on('click',function(){
            $(this).parent().removeClass('open');
            $('body').removeClass('modal-open');
        });

        $('.clients').isotope({
            layoutMode: 'packery',
            itemSelector: '.client'
        });

        $('.filter-selector li').on('click', function(){
            var filter = $(this).data('filter');
            $('.clients').isotope({ filter: filter });

            $('.active').removeClass('active');
            $(this).addClass('active');
            
        })
        $('.filter-selector .switch').on('click', function(){
            $(this).parents('.filter-selector').toggleClass('open');
        })

        // Doughnut Chart
        Chart.defaults.global.customTooltips = function(tooltip) {
            // Tooltip Element
            var tooltipEl = $('#chartjs-tooltip');
            // Hide if no tooltip
            if (!tooltip) {
                tooltipEl.css({
                    opacity: 0
                });
                return;
            }
            // Set caret Position
            tooltipEl.removeClass('above below');
            tooltipEl.addClass(tooltip.yAlign);
            // Set Text
            tooltipEl.html(tooltip.text);
            // Find Y Location on page
            var top;
            if (tooltip.yAlign == 'above') {
                top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
            } else {
                top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
            }
            // Display, position, and set styles for font
            tooltipEl.css({
                opacity: 1,
                left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
                top: tooltip.chart.canvas.offsetTop + top + 'px',
                fontFamily: tooltip.fontFamily,
                fontSize: tooltip.fontSize,
                fontStyle: tooltip.fontStyle,
                width: '230px'
            });
        };  

        var data = $('#doughnut-chart').data('chartdata');
        if ( data ){
            var chartdata=[];
            // console.log(data);

            $(data[0].slices).each(function(){ 
                this.label = "<div class='doughnut-tooltip'><span class='heading'>"+this.label+"</span><span class='caption'>"+this.caption+"</span></div>";
                chartdata.push(this);
            })

            var ctx = $("#doughnut-chart").get(0).getContext("2d");
            var myDoughnutChart = new Chart(ctx).Doughnut(chartdata,{
                // String - Template string for single tooltips
                tooltipTemplate: "<h2><%= value %>%</h2><%if (label){%><%=label %> <%}%>",
                // String - Template string for multiple tooltips
                multiTooltipTemplate: "<%= value + ' %' %>"
            }); 
        } 


        $('.accordion h3').click(function(){
            if ( $(this).parent().hasClass('open') ){
                $(this).parent().toggleClass('open');    
            } else {
                $(this).parent().parent().find('.open').not('.this').removeClass('open');
                $(this).parent().toggleClass('open');
            }
        });        

        $('li.current-rates a').click(function(){
            $('.rates.modal').toggleClass('closed');
            $('.rates.modal').find('.close').on('click',function(){
                $(this).parent().unbind().addClass('closed');
            })
        })

        //Post Content functions
        $('.wp-caption a').click(function(e){
            e.preventDefault();
            var elem = $(this).parent().clone();
            var modal = $("<div class='modal white'><span class='close'></span></div>");
            elem.appendTo(modal);

            $(modal).find('.close').on('click', function(){
                $(this).parent().remove();
            });

            $('body').append(modal);


        })

        // Leadership
        $('.leadership .member').on('click',function(){
            var member = $(this).data('member');
            $('.modal.'+ member ).addClass('open');
            $('body').addClass('modal-open');
        });

        $('.leadership .member-modal .pager span').on('click', function(){
            var member = $(this).data('member');
            $(this).parents('.member-modal').removeClass('open');
            $('.member-modal.'+member).addClass('open');
        })


	})


})(jQuery)