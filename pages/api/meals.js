const { getDocument, insertDocument } = require("@/database/db-lib");
const { MongoClient } = require("mongodb");

const handler = async (req, res) => {
  let client;

  try {
    client = await MongoClient.connect(
      "mongodb+srv://tubeslasti:tubeslasti@cluster0.yvecmnt.mongodb.net/Cafe?retryWrites=true&w=majority"
    );
  } catch (e) {
    res.status(500).json({ message: "Cannot connect do database" });
    return;
  }

  if (req.method === "GET") {
    try {
      const result = await getDocument(client, "Meals");
      res.status(200).json({meals: result});
    } catch (error) {
      res.status(400).json({message: "Failed to get data"})
    }
  }

  if (req.method === "POST") {
    const { items, tableNumber, totalAmount } = req.body;
    const newOrder = {
      items: items,
      tableNumber: tableNumber,
      totalAmount: totalAmount,
    }

    try {
      const result = await insertDocument(client, "Orders", newOrder);
      res.status(201).json({message: "Order Sent"})
    } catch (error) {
      res.status(500).json({message: error})
    }
  }
};

export default handler;