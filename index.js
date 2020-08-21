const express = require('express');
const cors = require('cors');
const app = express();
//---------------- Allow Cross Origin ----------------

app.use(cors());
//------------------ body parser ------------------
app.use(express.json());
//----------Routes const----------------- 

const user_routes = require('./routes/api/users');
const timeline_routes = require('./routes/api/timeline');
const postcard_routes = require('./routes/api/postcard');
const physical_routes = require('./routes/api/comment');
const photos_routes = require('./routes/api/photos');
const letters_routes = require('./routes/api/letters');
const Form_routes = require('./routes/api/New_Artifact_form');

//----------------- routes ------------------

app.use("/api", user_routes);
app.use("/api", timeline_routes);
app.use("/api", postcard_routes);
app.use("/api", physical_routes);
app.use("/api", photos_routes);
app.use("/api", letters_routes);
app.use("/api", Form_routes);



//------------------ port -----------------

const PORT = process.env.PORT || 6000;

app.listen(PORT,() => {

	console.log("app listening on port 6000")
})






