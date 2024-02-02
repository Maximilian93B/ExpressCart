const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

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
  if (!categoryData) {
    res.status(404).json({ message: 'No catergory found with this id!'});
    return; 
  }
  res.status(200).json(categoryData);

} catch (err) {
  res.status(500).json(err)
}
// be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    // Create a new category 
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if(!categoryData[0]) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(404).json(err); 
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its id 
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Category deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
