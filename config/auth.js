// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '482269761938030', // your App ID
        'clientSecret'    : '0adf178731e2f777bc95789472a861d3', // your App Secret
        'callbackURL'     : 'http://bluegatr.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'tyeRKBkQx6HaBRUIszyXLzot2',
        'consumerSecret'     : 'eDPbXjCq35hIpLOoHZvYvqxtsnFoQANBaDNc4R5TxHmxymhWRw',
        'callbackURL'        : 'http://bluegatr.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '262463806866-tj62qon2no4a8ui65tok34ajcfrk02d3.apps.googleusercontent.com',
        'clientSecret'     : 'eQHZLwX2fUFoUxHZWvLR_G-R',
        'callbackURL'      : 'http://bluegatr.com/auth/google/callback'
    }

};