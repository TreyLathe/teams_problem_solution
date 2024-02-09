const { user, project } = require('../../models');
const sequelize = require('sequelize');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const userData = await user.findAll({
      attributes: { exclude: ['password'] },
      include: [{ model: project }],
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;