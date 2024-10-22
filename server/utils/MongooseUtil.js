const mongoose = require ('mongoose') ;
const MyConstants = require ('./MyConstants') ;
const uri = 'mongodb+srv://miwakopham:05042003Pq@cluster0.1gpyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect ( uri,{ useNewUrlParser: true })
.then (() => {console.log ('Connected to' + MyConstants.DB_SERVER + '/' + MyConstants.DB_DATABASE ) ; })
.catch ((err) => { console.error (err);});