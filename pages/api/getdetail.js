// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'GET') {
    // Post ile data gönderildiğinde
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_ENV_API_KEY}&i=${
        req.query.id}`,
    );
    res.json(data);
  }
};
