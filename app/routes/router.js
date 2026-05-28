var express = require("express");
var router = express.Router();

const moment = require("moment");
moment.locale('pt-br');

const { body, validationResult } = require("express-validator");

const {tarefasController} = require("../controllers/tarefasController");


router.get("/", async function (req, res) {
   tarefasController.listarTarefas(req, res);
});


router.get("/cadastro", (req, res) => {
    tarefasController.exibirCadastro(req, res);
});


router.get("/alterar", async (req, res) => {
    tarefasController.alterarCadastro(req,res)
});

router.get("/excluir", async (req, res) =>  {
    tarefasController.excluirTarefa(req, res)
});


// adicionar validação de dados com o express-validator
// nome - 5 a 45 caracteres
// prazo data válida e hoje ou no futuro
// situação - inteiro de 0 a 4 
router.post("/cadastro", tarefasController.validarFormCad , 
   
    async (req, res) => {
       tarefasController.fazerCadastro(req,res)

    });


router.get("/teste-insert", async (req, res) => {
    const dadosInsert = {
        nome: "instalar o fortnite no Lab 1 Terreo",
        prazo: "2026-03-19"
    }
    try {
        const resultInsert = await tarefasModel.create(dadosInsert);
        res.send(resultInsert)
    } catch (erro) {
        console.log(erro);
    }

});


//delete físico - hard delete
router.get("/teste-delete", async (req, res) => {
    let idTarefa = 17;
    try {
        res.send(resultDelete)
    } catch (erro) {
        console.log(erro);
    }
});

//exercicio - teste de update -> delete lógico ou soft delete
//delete lógico - soft delete
router.get("/teste-soft-delete", async (req, res) => {
    let idTarefa = 15;
    try {
        res.send(resultUpdate);
    } catch (erro) {
        console.log(erro);
    }
});






module.exports = router;