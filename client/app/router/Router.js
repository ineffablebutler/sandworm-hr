var AppRouter = Backbone.Router.extend({

  routes: {
    'signup': 'signup',
    'signin': 'signin',
    'front' : 'front',
    'portfolios' : 'portfolios',
    'about' : 'about',
    'new' : 'new',
    'signout' : 'signout'
    /*
    'portfolio(/:id)': 'portfolio',
    'company/:id': 'company',
    'followers(/:id)': 'followers',
    'following(/:id)': 'following',
    'profile': 'profile',
    'trends': 'trends',
    'signout': 'signout'
    */
  }

});

