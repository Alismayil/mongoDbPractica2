const Users= require ("../Models/booksModels.js")

exports.getBooks = async (req, res) => {
  const data = await Users.find({});
  res.send(data);
};

// ------------------------------GetById

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Users.findById(id).exec();
    res.send(data);
  } catch (error) {
    res.status(500).send("This is Error");
  }
};

// ------------------------------Delete

exports.deleteBooks = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Users.findByIdAndDelete(id).exec();
    res.send(data);
  } catch (error) {
    res.status(500).send("This is Error");
  }
};

// ------------------------------Post

exports.postBooks = async (req, res) => {
  try {
    const data = new Users({ ...req.body });
    await data.save();
    res.status(200).send("This is Creat");
  } catch (error) {
    res.status(500).send("This is Error");
  }
};

// ------------------------------Update

exports.updateBooks = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Users.findByIdAndUpdate(id, req.body).exec();
    res.send(data);
  } catch (error) {
    res.status(500).send("This is Error");
  }
};
