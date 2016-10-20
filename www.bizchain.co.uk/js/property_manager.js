/**
 * Created by Sam on 11/10/2016.
 */
$.getJSON("js/properties.json", function (data) {
    var properties = sort(data["properties"]);

    for (var i = 0; i < properties.length; ++i) {
        var property = properties[i];

        var new_property_modal = '<div class="portfolio-modal modal fade" id="portfolioModal' +
            property["ref"] + '" tabindex="-1" role="dialog" aria-hidden="true">' +
            '<div class="modal-content"><div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl">' +
            '</div></div></div><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2">' +
            '<div class="modal-body">';
        new_property_modal += '<h2>' + property["title"] + '</h2>';
        new_property_modal += '<p class="item-intro text-muted">' + property["price"] + " - REFERENCE : " + property["ref"] + '</p>';
        new_property_modal += '<img class="img-responsive img-centered" src="img/portfolio/Modal/' + property["ref"] + '/' + property["ref"] + "01" + '.png" alt = "">';
        for (var j = 0; j < property["description"].length; ++j) {
            new_property_modal += "<p>" + property["description"][j] + "</p>";
        }
        new_property_modal += '</div></div></div></div></div></div>';
        $("body").append(new_property_modal);

        var new_property_tile = '<div class="col-md-4 col-sm-6 portfolio-item">';
        new_property_tile += '<a href="#portfolioModal' + property["ref"] + '" class="portfolio-link" data-toggle="modal">';
        new_property_tile += '<div class="portfolio-hover"><div class="portfolio-hover-content"><h4>MORE INFO</h4></div></div>';
        new_property_tile += '<p class="' + property["status"].toLowerCase().replace(" ", "") + '">' + property["status"] + '</p>';
        new_property_tile += '<img src="img/portfolio/HP' + property["ref"] + '.png" class="img-responsive" alt="">';
        new_property_tile += '</a><div class="portfolio-caption">';
        new_property_tile += '<a href="#portfolioModal' + property["ref"] + '"  class="portfolio-link" data-toggle="modal">';
        new_property_tile += '<h4>' + property["title"] + '</h4>';
        new_property_tile += '<p class="text-muted">' + property["price"] + " - REF:" + property["ref"] + '</p>';
        new_property_tile += '</a></div></div>';
        $("#portfolio_container").append(new_property_tile);
    }

    function sort(properties) {
        var available = [];
        var underoffer = [];
        var sold= [];

        for(var i = 0; i < properties.length; ++i){
            if(properties[i]["status"] === "AVAILABLE"){
                available.push(properties[i]);
            } else if(properties[i]["status"] === "UNDER OFFER"){
                underoffer.push(properties[i]);
            } else {
                sold.push(properties[i]);
            }
        }

        return available.concat(underoffer.concat(sold));
    }
});