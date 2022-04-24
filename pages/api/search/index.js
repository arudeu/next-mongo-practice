import dbConnect from "../../../utils/dbConnect";
import Search from "../../../models/Search.js";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const search = await Search.find({});
        res.status(200).json({ success: true, data: search });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const searches = await Search.create(req.body);
        res.status(201).json({ success: true, data: searches });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
};
