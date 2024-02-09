const router = require('express').Router();
const course = [
    {
        id: 1,
        classname: 'Math',
        description: 'Math is the study of numbers, shapes and patterns. The word comes from the Greek word "μάθημα" (máthema), meaning "science, knowledge, or learning", and is sometimes shortened to maths (in England, Australia, Ireland, and New Zealand) or math (in the United States and Canada).'
    },
    {
        id: 2,
        classname: 'Science',
        description: 'Science is the pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.'
    },
    {
        id: 3,
        classname: 'History',
        description: 'History is the study of the past. Events occurring before the invention of writing systems are considered prehistory.'
    },
    {
        id: 4,
        classname: 'English',
        description: 'English is a West Germanic language first spoken in early medieval England, which has become the leading language of international discourse in the 21st century.'
    }
    ];
router.get('/', async (req, res) => {
    try {
        res.render('all', { course });
    } catch (err) {
        res.status(500).json(err);
    }
}); 