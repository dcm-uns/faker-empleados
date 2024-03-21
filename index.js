import express from 'express';
import {faker} from '@faker-js/faker';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.static('public'));

const PORT = 3001;

// Generar un falso empleado
const generateEmployee = () => ({
   name: faker.person.fullName(),
   age: faker.number.int({ min: 10, max: 100 }),
   id: faker.string.uuid(),
   avatar: faker.image.avatarGitHub()
});

// Endpoint para obtener un empleado
app.get('/empleado', (req, res) => {
    const employee = generateEmployee();
    res.json(employee);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

