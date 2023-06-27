import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
import axios, { AxiosHeaders } from "axios";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getBuffer = async (url: string) => {
  const img = await axios.get(url, { responseType: 'arraybuffer' });
  const headers = img.headers
  if (headers instanceof AxiosHeaders && headers.has('content-type')) {
    const contentType = headers['content-type'] as string

    if (contentType) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const returnedBuffer = Buffer.from(img.data)
      return returnedBuffer
    } else {
      return null
    }
  } else {
    return null
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":

      const browserName = req.query.browserName as string
      const kind = (req.query?.kind || 'default') as AdKind

      console.log({ query: req.query })

      try {
        console.log('fetching ad')
        let url = ''
        if (browserName) {

          const urls = await cloudinary.v2.api.resources_by_tag(browserName && browserName !== 'none' ? browserName : 'Safari', {
            // width, height,
            // crop: 'crop', 
            fetch_format: "auto",
          })
          url = (urls.resources.filter(item => item.public_id.includes(kind))[0]?.url) || ''
        }

        if (url) {
          const buffer = await getBuffer(url)
          res.status(200).send(buffer)
        } else {
          res.status(404).send("")
        }
        break;
      } catch (err) {
        console.error(err)
        res.status(500).send(null)
      }

    default:
      res.status(500)
  }
}
