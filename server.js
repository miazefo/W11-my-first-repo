// require is essentially the equivalent of adding another <script> tag
const express = require('express');
const app = express();
// every network connection occurs on a port; it's essentially how
// Chrome's network traffic doesn't interfere with Spotify's, they're
// on different ports
const port = 3000;

// . means "the current directory"
app.use(express.static('.'));

app.listen(port, () => {
  console.log('Live app listening on port ' + port);
});
