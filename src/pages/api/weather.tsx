import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            const location = req.query.location as string
            try {
                const weatherResponse = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location || 'Dallas, TX')}?unitGroup=us&include=current%2Cdays&key=${process.env.VISUAL_CROSSING_API_KEY || 'null'}&contentType=json`)
                res.status(200).send(weatherResponse.data)
            } catch (err) {
                console.error(err)
            }
            break
        default:
            res.status(500).send('')
    }
}