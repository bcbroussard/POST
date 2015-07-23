(function($){

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

                  

    var data = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "<div class='doughnut-tooltip'><h4 class='heading'>Classic Community Building</h4><h5 class=''>Legacy loans made during our start-up phase.</h5></div>"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow",
        }
    ];

    var ctx = $("#doughnut").get(0).getContext("2d");
    var myDoughnutChart = new Chart(ctx).Doughnut(data,{
        // String - Template string for single tooltips
        tooltipTemplate: "<h2><%= value %></h2><%if (label){%><%=label %> <%}%>",
        // String - Template string for multiple tooltips
        multiTooltipTemplate: "<%= value + ' %' %>"
    });

})(jQuery);