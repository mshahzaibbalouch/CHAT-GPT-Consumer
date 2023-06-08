const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });

    const completion = response.data.choices[0].message.content;
    res.status(200).send(completion);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
