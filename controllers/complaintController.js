const Complaint= require("../models/complaint");

exports.addComplaint = async (req, res) => {
  try {
    const { image, latitudeCo,longitudeCo} = req.body;

    // Create a new complaint instance
    const complaint = new Complaint({
      image,
      latitudeCo,
      longitudeCo
    });

    // Save the complaint to the database
    await complaint.save();

    res
      .status(201)
      .json({ message: "Complaint created successfully", complaint });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getComplaints = async (req, res) => {
    try {
      const complaints = await Complaint.find();
  
      res.status(200).json({ complaints });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };