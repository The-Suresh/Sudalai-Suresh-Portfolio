const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');

        // Check if admin exists
        const adminExists = await User.findOne({ username: 'admin' });
        if (adminExists) {
            console.log('Admin already exists');
            process.exit();
        }

        // Create Admin
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt); // Default password

        const admin = new User({
            username: 'admin',
            password: hashedPassword,
            isAdmin: true
        });

        await admin.save();
        console.log('Admin user created');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAdmin();
