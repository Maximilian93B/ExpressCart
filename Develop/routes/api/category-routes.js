const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Route for fetching all categories 
router.get('/', async (req, res) => {
try {
  // fetch all categories 
  const categoryData = await Category.findAll({
    include : [{ model: Product }],
  });
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
try {
  const categoryData = await Category.findByPk(req.params.id, {
    // be sure to include its associated Products
    include:[{ model: Product }],
  });
  // if categoryData returns false 
  if (!categoryData) {
    // return error and print message
    res.status(404).json({ message: 'No category found with this id!'});
    return; 
  }
  //if true then return categoryData
  res.status(200).json(categoryData);
} catch (err) {
  // catch server error 
  res.status(500).json(err)
}
});


// Route for creating a new category 

router.post('/', async (req, res) => {
  try {
    // use category model 
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    // if created retrn succesfull 
    res.status(200).json(newCategory);
  } catch (err) {
    // if error send error
    res.status(400).json(err);
  }
});


// Route for  updating existing category 

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    //update the category where ID matches 
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // if categoryData is false ( not found )
    if(!categoryData[0]) {
      // return error 
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    // if successful then return 200 
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err); 
  }
});


// Route for Deleting Category 
router.delete('/:id', async (req, res) => {
  // delete a category by its id 
  try {
    // delete the category if id matches 
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    // if Id does not match return error 
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    // if succesfull return 200 
    res.status(200).json({ message: 'Category deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
