const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube']

// retornar um curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params

    return res.json(cursos[index]);
})

// retornar todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

// criar um curso
server.post('/cursos', (req, res) =>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
})

// atualizar curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

// deletar um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message: "O curso foi deletado"});
})



server.listen(3000);