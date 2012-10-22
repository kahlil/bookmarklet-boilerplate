javascript:(function(){

// Name your space
var MyNamespace = 'w00t!';

// avoid the bookmarklet activating more than once
if ( window[ MyNamespace ] ) {
    // You can access the namespace here
    // allowing the bookmark to be used multiple times on one page if needed
    // https://twitter.com/dbushell/status/260375185289535488
    return;
}
window[ MyNamespace ] = {};

var version = 1,
    script  = document.createElement( 'script' );

script.setAttribute( 'type', 'text/javascript' );
script.setAttribute( 'charset', 'UTF-8' );
script.setAttribute( 'src', '//example.com/script.js?r=' + Math.random() );
document.documentElement.appendChild( script );

script.onload = script.onreadystatechange = function() {
    var rs = script.readyState;
    if ( !rs || rs === 'loaded' || rs === 'complete' ) {
        script.onload = script.onreadystatechange = null;

        // initialise or warn if older version
        if ( version !== window[ MyNamespace ].version ) {
            alert( 'This bookmarklet is out of date!' );
        } else {
            window[ MyNamespace ].init();
        }
    }
};

}());