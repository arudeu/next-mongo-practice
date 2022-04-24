import dbConnect from "../../../utils/dbConnect";
import Search from "../../../models/Search.js";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const search = await Search.findById(id);

        if (!search) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: search });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const search = await Search.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!search) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: search });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deleteSearch = await Search.deleteOne({ _id: id });
        if (!deleteSearch) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
