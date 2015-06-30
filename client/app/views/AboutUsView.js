// Backbone view for member profile form
var AboutUsView = Backbone.View.extend({

  className: 'about-us container',

  divText: '\
      <div class="row"> \
        <div class="col-md-10 col-md-offset-1 text-center" id="about-us-container">\
          <div class="row"><h2>About Us</h2></div>\
          <div class="member-profiles row text-left">\
          </div>\
        </div> \
     </div>\
     <div class="row text-center attribution"><p>Icons from <a href="http://glyphicons.com" target="_blank">Glyphicons Free</a>,\
                         licensed under <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>.\
                      </p>\
     </div>',

  initialize: function(){
    this.render();
  },

  render: function(){
    //Render profile form
    return this.$el.html(this.divText);
  }

});
