(function($){
	$.widget('spark.elefintapp', {
		options: {
			template:""
		},
		_create: function(){
			$(this.element).appframe({
				template: this.options.template
			});
			$('#design-is.page').viewer({
                type:   'design',
                data:{
                    slides: [
                        {
                        topimage: {
                        	src: "img/graphics/p1_s1_top.png",
                        	width: "14.8vw"
                        },
                        bottomimage: {
                        	src: "img/graphics/p1_s1_bottom.png",
                        	width: "14.8vw"
                        },
                        text: 
                            "<h2>Design Is</h2>" +
                            "<h3>the act of creating with</h3>" +
                            "<h4>Intention</h4>"
                        },
                        {
                        topimage: {
                        	src: "img/graphics/p1_s2_top.png",
                        	width: "14.8vw"
                        },
                        bottomimage: {
                        	src: "img/graphics/p1_s2_bottom.png",
                        	width: "14.8vw"
                        },
                        text: 
                            "<h2>Design</h2>" +
                            "<span>makes things easier to use <br> and makes information easier to</span>" +
                            "<h4>Understand</h4>"
                        },
                        {
                        topimage: {
                        	src: "img/graphics/p1_s3_top.png",
                        	width: "14.8vw"
                        },
                        bottomimage: {
                        	src: "img/graphics/p1_s3_bottom.png",
                        	width: "14.8vw"
                        },
                        text: 
                            "<h2>Design Is</h2>" +
                            "<span>Caring about experiences <br> and finding new ways to</span>" +
                            "<h4>Delight</h4>"+
                            "<h3>People</h3>"
                        }
                    ]
                }
            });
			$('#influences.page').viewer({
				type:   'tab',
                data: {
                    slides: [
                        {
                        label: "2 ATMs",
                        image: "img/graphics/atms.png",
                        text: 
                            "<h3>When the brain doesn't have to struggle with poor design, it’s more effective.</h3>" +
                            "<h4>This study by [...] placed two ATMs side by side.  Both had the same controls, but one had attractive visual design while the other did not. People using the more attractively designed ATM were able to complete actions faster than the other group.</h4>"
                        },
                        {
                        label: "Our Eyes",
                        image: "img/graphics/our_eyes_look_here.png",
                        text: 
                            "<h3>Our eyes have amazing resolution at our central point of focus...</h3>" +
                            "<span>Try this experiment</span>" +
                            "<ul class='experiment'>" +
                            "	<li class='one'>Look at the dot to the right.</li>" +
                            "	<li class='two'>Without moving your eyes, see how far to the right you can see clearly.</li>" +
                            "</ul>" +
                            "<h4>Is it blurry? That’s because our eyes have terrible peripheral vision. Strategic design integrates all sorts of cool science like this.</h4>",

                        },
                        {
                        label: "Our Brain",
                        image: "img/graphics/brain.png",
                        text: 
                            "<h3>once we hear the beginning of a story, we just have to know...</h3>" +
                            "<h4>Psychology and Neuroscience are two of the most interesting areas overlapping with design these days. From pattern recognition to the latest in gamification, by understanding how our brains and minds work, we can design more satisfying and effective experiences.</h4>"
                        }
                    ]
                }				
			});
			$('#power-of-design.page').viewer({
				type:   'power_of_design',
                data: {
                    slides: [
                        {
	                        slideName: "example1",
	                        image: "img/graphics/atms.png",
	                        text: 
	                            "<h3><em class='white'>EXAMPLE 1:</em><br>" +
								"Two Perspectives on U.S. Debt</h3>" +
	                            "<h4 class='white'>In the summer of 2011, amidst a battle over raising the debt ceiling, there was no shortage of partisan finger pointing going on. This chart from the New York Times – which bucked the trend of blaming liberals for runaway debt–was incomplete at best.</h4>"
                        },
                        {
	                        slideName: "example2",
	                        image: "img/graphics/our_eyes_look_here.png",
	                        text: 
	                            "<h3>Our eyes have amazing resolution at our central point of focus...</h3>" +
	                            "<span>Try this experiment</span>" +
	                            "<ul class='experiment'>" +
	                            "	<li class='one'>Look at the dot to the right.</li>" +
	                            "	<li class='two'>Without moving your eyes, see how far to the right you can see clearly.</li>" +
	                            "</ul>" +
	                            "<h4>Is it blurry? That’s because our eyes have terrible peripheral vision. Strategic design integrates all sorts of cool science like this.</h4>"
                        }
                    ]
                }				
			})
			$('#example1 .before-after').viewer({
				type:   'before_after',
                data: {
                    slides: [
                        {
                        slideName: "example1",
                        label: "Before",
                        image: "img/graphics/p3_s1_before.png",
                        text: 
                            "<h3><em class='white'>EXAMPLE 1:</em><br>" +
							"Two Perspectives on U.S. Debt</h3>" +
                            "<h4 class='white'>In the summer of 2011, amidst a battle over raising the debt ceiling, there was no shortage of partisan finger pointing going on. This chart from the New York Times – which bucked the trend of blaming liberals for runaway debt–was incomplete at best.</h4>"
                        },
                        {
                        slideName: "example2",
                        label: "After",
                        image: "img/graphics/p3_s1_after.png",
                        text: 
                            "<h3><em class='white'>EXAMPLE 1:</em><br>" +
							"Two Perspectives on U.S. Debt</h3>" +
                            "<h4 class='white'>Since Congress has as much, if not more to do with government spending than the President, and since the state of the economy trumps both of them, Elefint decided to make a non-partisan infographic that painted a richer picture.</h4>" +
                            "<a href='#'>View full infographic here</a>"
                        }
                    ]
                }				
			})
			$('#example2 .before-after').viewer({
				type:   'before_after',
                data: {
                    slides: [
                        {
                        slideName: "example1",
                        label: "Before",
                        image: "img/graphics/p3_s2_before.png",
                        text: 
                            "<h3><em class='white'>EXAMPLE 2:</em><br>" +
							"FULL CIRCLE FUND <br>BEFORE AND AFTER</h3>" +
                            "<h4 class='white'>Full Circle Fund connects business leaders in the Bay Area to innovative nonprofits who can use their varied expertise to scale important solutions.  With a model that wasn't always clear to potential members, funders, and organizations, an important fundraising event, and a website that seemed a bit outdated, a re-design seemed to be in order. </h4>"
                        },
                        {
                        slideName: "example2",
                        label: "After",
                        image: "img/graphics/p3_s2_after.png",
                        text: 
                            "<h3><em class='white'>EXAMPLE 2:</em><br>" +
							"FULL CIRCLE FUND <br> BEFORE AND AFTER</h3>" +
                            "<h4 class='white'>Elefint  created a suite of materials to reenergize the brand. One component of this re-design was a beautiful new responsive site that highlights what Full Circle Fund does, their value proposition and clear calls to action.</h4>"
                        }
                    ]
                }				
			})
			$('#our-philosophy.page').viewer({
				type:   'philosophy',
                data: {
                    slides: [
                    	{
                        slideName: "goal",
                        image: "<a class='goal' href='#'><span>OUR GOAL is to be the following in all of our projects:</a>",
                        text: 
                            ""
                        },
                        {
                        slideName: "strategic",
                        image: "<a href='#'><img src='img/graphics/p4_strategic.png'</a>",
                        text: 
                            "From the simplest deliverable to a complete brand overhaul, strategy is baked into all we do.  More about this in our process below."
                        },
                        {
                        slideName: "scrappy",
                        image: "<a href='#'><img src='img/graphics/p4_scrappy.png'</a>",
                        text: 
                            "As important as strategy is, its just as important to make sure projects move forward within a reasonable timeline.  While we strive for an ideal process, we can usually find a way to proceed when not every piece is in place."
                        },
                        {
                        slideName: "excellent",
                        image: "<a href='#'><img src='img/graphics/p4_excellent.png'</a>",
                        text: 
                            "After all the critical thinking and preparation is done, the project has to finish with excellent design.  We see every project as a chance to create something beautiful that adheres to our high standards."
                        }
                    ]
                }				
			})
			$('#our-process.page').viewer({
				type: 	'process',
				data: {
                    slides: {
                        strategypeep : {
                            label: 
                                "<h4>Our Goal</h4>" +
                                "<span>is to be the following in all of our projects",
                            title: "Strategy",
                            text: 
                                "We move from strategy to interaction design, ensuring that each audience has access to the information it needs and is able to accomplish its objectives easily, creating an experience that is intuitive for all users.",
                            image: "p5_strategy_popout"
                        },
                        uxpeep : {
                            label: "<span class='strategic icon'></span>",
                            title: "UX",
                            text: 
                                "We move from strategy to interaction design, ensuring that each audience has access to the information it needs and is able to accomplish its objectives easily, creating an experience that is intuitive for all users.",
                            image: "p5_ux_popout"
                        },
                        designpeep : {
                            label: "<span class='scrappy icon'></span>",
                            title: "Design",
                            text: 
                                "As important as strategy is, its just as important to make sure projects move forward within a reasonable timeline.  While we strive for an ideal process, we can usually find a way to proceed when not every piece is in place.",
                            image: "p5_design_popout"
                        }
                    }
                }
			})
		}
	})
})(jQuery);