import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Importa a função para conectar ao banco de dados MongoDB

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
  // Seleciona o banco de dados "imersao-instabytes"
  const db = conexao.db("imersaoAlura-InstaByte");
  // Seleciona a coleção "posts" dentro do banco de dados
  const colecao = db.collection("posts");
  // Retorna um array com todos os documentos da coleção
  return colecao.find().toArray();
}

export async function criarPost(novoPost){
      const db = conexao.db("imersaoAlura-InstaByte"); 
      const colecao = db.collection("posts");      
      return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost){
  const db = conexao.db("imersaoAlura-InstaByte"); 
  const colecao = db.collection("posts");
  const  objID =  ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}

