const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
    const { name, date, address, locationLink, description } = req.body;
    try {
        const event = new Event({
            name,
            date,
            address,
            locationLink,
            description,
            userId: req.user.userId,
        });
        await event.save();
        res.status(201).json({ msg: 'Event created successfully' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getUserEvents = async (req, res) => {
    try {
        const events = await Event.find({ userId: req.user.userId });
        res.json(events);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
