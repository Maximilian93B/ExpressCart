const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

 // add async to all routes 


router.get('/', async (req, res) => {
  
  try {
    // find all tags
    const tagData = await Tag.findAll({
  // be sure to include its associated Product data
      include: [{ model : Product }],
    });
    res.status(200).json(tagData);
  } catch (err) { 
  res.status(500).json(err);
  
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its 'id'
    const tagData = await Tag.findByPk(req.params.id, {
       // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new tag 
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});



router.put('/:id', async (req, res) => {
  try {
    // update tag's name by id
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (tagData[0] > 0) { // Check if any rows were updated
      const updatedTagData = await Tag.findByPk(req.params.id);
      res.status(200).json(updatedTagData);
    } else {
      res.status(404).json({ message: 'No tag found with this id!' });
    }
  } catch (err) {
    res.status(500).json(err); // Correct method call for setting the status and responding with JSON
  }
});


router.delete('/:id', async (req, res) => {

  try {
      // delete on tag by its `id` value
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if(!tagData) {
      res.status(404).json({ message: ' No tag found with this id '});
      return;
    } 
    res.status(200).json({ message: 'Tag deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
