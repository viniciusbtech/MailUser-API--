const express = require("express");
const nodemailer = require("nodemailer");
const app = express();


app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "seu email",
    pass: "senhadogoogleapp"
  }
});

// Banco fake (simulando BD)
let users = [];

// ROTA CREATE (igual sua)
app.post("/users", async (req, res) => {
  const { nome, email } = req.body;

  const user = {
    id: users.length + 1,
    nome,
    email
  };

  users.push(user);

  try {
    await transporter.sendMail({
      from: "seu_email@gmail.com",
      to: email,
      subject: "Cadastro realizado",
      text: `Olá ${nome}, seu cadastro foi feito com sucesso!`
    });

    res.json({
      user,
      message: "Usuário criado e email enviado!"
    });

  } catch (error) {
    res.json({
      user,
      message: "Usuário criado, mas erro ao enviar email",
      error
    });
  }
});



app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});