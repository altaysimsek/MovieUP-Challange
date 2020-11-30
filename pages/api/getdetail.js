// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async (req, res) => {
    if (req.method == "POST") {
        //Post ile data gönderildiğinde
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString(); // convert Buffer to string
        });
        res.json(req.body);
    }
};
