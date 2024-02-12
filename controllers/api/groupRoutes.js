const router = require('express').Router();
const { Group_ } = require('../../models');
const withAuth = require('../../utils/auth');


router.put('/:id', withAuth, async (req, res) => {
  try {
    const groupData = await Group_.update(req.body, {
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!groupData) {
      res.status(404).json({ message: 'No group found with this id!' });
      return;
    }

    res.status(200).json(groupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//creating a new Groups
router.post('/', withAuth, async (req, res) => {
  try {
    const newGroups= await Group_.create({
      ...req.body,
    //   user_id: req.session.user_id,
    });
 console.log(newGroups);
    res.status(200).json(newGroups);
  } catch (err) {
    res.status(400).json(err);
  }
});

//deleting a Groups
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const groupData = await Group_.destroy({
      where: {
        group_id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!groupData) {
      res.status(404).json({ message: 'No group found with this id!' });
      return;
    }

    res.status(200).json(groupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
