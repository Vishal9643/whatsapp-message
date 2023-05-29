const express = require('express');
const whatsapp = require("./Routes/whatsapp_message")

const app = express();

app.use('/',whatsapp)

app.listen(3000,()=>{
    console.log(`listening on port no 3000`)
})