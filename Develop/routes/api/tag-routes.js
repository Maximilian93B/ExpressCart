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
      // requirements for new tag 
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
    // Check if any rows were updated
    if (tagData[0] > 0) { 
      const updatedTagData = await Tag.findByPk(req.params.id);
      res.status(200).json(updatedTagData);
    } else {
      //If false then return error 
      res.status(404).json({ message: 'No tag found with this id!' });
    }
  } catch (err) {
    //catch server error 
    res.status(500).json(err); 
  }
});

//Route to delte Tag

router.delete('/:id', async (req, res) => {

  try {
      // delete Tag by ID 
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    // If id does not match 
    if(!tagData) {
      // Return error 
      res.status(404).json({ message: ' No tag found with this id '});
      return;
    } 
    // If successful then return 200 
    res.status(200).json({ message: 'Tag deleted!'});
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
