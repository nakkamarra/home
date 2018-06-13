var gith = require('gith').create( 3500 );
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

gith({
    repo: 'nakkamarra/home'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/opt/scripts/hook-redeploy.sh', function(error, stdout, stderr) {
                    // Log success in some manner
		    if( error ) {
		      console.log( 'Hook script failed' + error );
		    } else {
                      console.log( 'Hook exec complete' );
		    }
            });
    }
});
