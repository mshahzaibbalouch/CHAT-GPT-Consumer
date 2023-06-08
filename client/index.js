const express = require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const { Configuration, OpenaAIApi}=require('openai')
const config= new Configuration({
    apiKey:'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',
})

const openai=new OpenaAIApi(config);

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.post("/chat", async (req,res)=>{
    const { prompt} =req.body;
const completion = await openai.createCompletion({
    model: 'text-davince-003',
    max_tokens:512,
    temperature:0,
    prompt :prompt,

});
res.send(completion.data.choices[0].text);

})
