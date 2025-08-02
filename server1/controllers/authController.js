import jwt from 'jsonwebtoken';

const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

res.cookie('token', token, {
  httpOnly: true,
  sameSite: 'Lax',
  secure: process.env.NODE_ENV === 'production'
}).json({ message: 'Login successful', user });
