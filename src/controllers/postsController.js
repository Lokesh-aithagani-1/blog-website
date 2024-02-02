
const axios = require('axios');

exports.createPost = async (req, res) => {
  try {
    
    const options = {
      method: 'GET',
      url: 'https://blogsapi.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '9fd4fad344mshbbc240f02faa903p174cccjsn0d4735bd735a',
        'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);

    
    console.log('BlogsAPI response:', response.data);

    res.json(response.data);
  } catch (error) {
    console.error('Create post error:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
