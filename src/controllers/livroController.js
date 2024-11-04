import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);    
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Houve um erro ao listar`})
        } 
    }
    
    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncotrado = await livro.findById(id);
            res.status(200).json(livroEncotrado);    
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Houve um erro ao listar`})
        } 
    }

    static async cadastrarLivro(req, res){
        try{
            const Novolivro = await livro.create(req.body)
            res.status(201).json({message: "Livro cadastrado com sucesso", livro: Novolivro});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar`});
        }
        
    }

    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso"}); 
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar`})
        }
    }

    static async deletarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: 'Livro deletado com sucesso'});
        } catch (error) {
            res.status(500).json({message: 'Houve um erro ao deletar um livro'});
        }
    }
};


export default LivroController;