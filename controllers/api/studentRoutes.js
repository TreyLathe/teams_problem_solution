const router = require('express').Router();
const { Student, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.put('/:id', withAuth, async (req, res) => {
    try {
      const studentData = await Student.update(req.body, {
        where: {
          id: req.params.id,
        //   user_id: req.session.user_id,
        },
      });
  
      if (!studentData) {
        res.status(404).json({ message: 'No student found with this id!' });
        return;
      }
  
      res.status(200).json(studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //creating a new student
  router.post('/', withAuth, async (req, res) => {
    try {
      const newStudent= await Student.create({
        ...req.body //,
        //user_id: req.session.user_id,
      });
  
      res.status(200).json(newStudent);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //deleting a student
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const studentData = await Student.destroy({
        where: {
          id: req.params.id,
          //user_id: req.session.user_id,
        },
      });
  
      if (!studentData) {
        res.status(404).json({ message: 'No student found with this id!' });
        return;
      }
  
      res.status(200).json(studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  