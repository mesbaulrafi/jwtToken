const privateDataController =  async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Password is Correct, you can access the private data",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal server error ${error}`,
    });
  }
}

module.exports = privateDataController