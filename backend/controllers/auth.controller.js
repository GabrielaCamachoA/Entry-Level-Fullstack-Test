import express from 'express';
import * as bcrypt from 'bcryptjs';
import db from '../models/index.js';

const { User } = db;

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { nombre, apellidos, email, password } = req.body;
    const passHash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      nombre,
      apellidos,
      email,
      password: passHash
    });
    res.json({
      message: 'Usurio creado',
      user: newUser
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFind = await User.findOne({ where: email });
    if (!userFind) {
      return res.status(401).json({ message: 'Usuario no encotrado' });
    }

    const valid = await bcrypt.compare(password, User.password);
    if (!valid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
  } catch (error) {
    res.json({ message: 'Login incorrecto', User });
  }
});

router.put('/profile', async (req, res) => {
  try {
    const userFind = await User.findByPK(req.params.id);
    if (!userFind) {
      return res.status(404).json({ message: 'Usuario no encotrado' });
    }
    await User.update(req.body);
    res.json({
      message: 'Usuario actualizado',
      userFind
    });
  } catch (error) {
    res.json({ message: 'No se pudo actualizar', User });
  }
});

export default router;
