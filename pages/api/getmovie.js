// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'GET') {
    // Post ile data gönderildiğinde
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${
        process.env.NEXT_PUBLIC_ENV_API_KEY
      }&s=${req.query.name}${
        req.query.year ? `&y=${req.query.year}` : ''
      }${req.query.type ? `&type=${req.query.type}` : ''}${
        `&page=${req.query.page}`
      }`,
    );
    res.json(data);
  }
};
