import mongoose from "mongoose";
import connection from "../config/config";
import Product from "./schemas/Product";

connection;

Product.countDocuments({})
  .then((count) => {
    if ((count || 0) > 0) {
      console.log("Database already has data, skipping seed data insertion");
      mongoose.connection.close();
      return;
    }

    Product.insertMany([
      {
        id: "0b8ec672-3020-4340-931f-0cafc1251b07",
        title: "Hambúrguer Clássico",
        description:
          "Hambúrguer Clássico - Um pão macio e fresco, uma carne suculenta e saborosa, queijo derretido e crocante de bacon. Um clássico que nunca falha.",
        value: 30,
        category: "Lanche",
        imageUrl: "/assets/hamburguer-1.jpg",
      },
      {
        id: "dc560ab0-52ad-4eda-9272-3327a45e6c2e",
        title: "Hambúrguer de Costela",
        value: 40,
        description:
          "Hambúrguer de Costela - Pão brioche, hambúrguer de costela bovina suculento e grelhado, queijo cheddar derretido, cebola crispy e um toque de molho barbecue defumado. Um hambúrguer rico em sabor e textura que vai deixar você com água na boca!",
        category: "Lanche",
        imageUrl: "/assets/hamburguer-2.jpg",
      },
      {
        id: "0b8ec671-3020-4340-931f-0cafc1251b07",
        title: "Hambúrguer Vegetariano",
        description:
          "Hambúrguer Vegetariano - Pão integral tostado, hambúrguer vegetariano de grão de bico, queijo cremoso, cebola caramelizada e uma mistura de alface crocante e tomate maduro. Delicioso e saudável!",
        value: 40,
        category: "Lanche",
        imageUrl: "/assets/hamburguer-3.jpg",
      },
      {
        id: "66b5fff7-3615-4315-9e9c-b4bd22a40e30",
        title: "Oreo Shake",
        description:
          "Oreo Shake - Feito com sorvete de baunilha, Oreo triturado e chantilly cremoso. Uma mistura indulgente e crocante que é perfeita para satisfazer qualquer desejo de doce.",
        value: 25,
        category: "Sobremesa",
        imageUrl: "/assets/shake-1.jpg",
      },
      {
        id: "3a183afe-41ba-4fac-8107-d2746b1cedc9",
        title: "Matcha Shake",
        description:
          "Milk Shake de Matcha - Feito com sorvete de baunilha e pó de matcha, que é um chá verde em pó muito popular no Japão. É uma bebida refrescante e saudável, com um sabor levemente amargo e um toque adocicado. Decorado com chantilly e polvilhado com mais pó de matcha, é uma sobremesa única e sofisticada.",
        value: 20,
        category: "Sobremesa",
        imageUrl: "/assets/shake-2.jpg",
      },
      {
        id: "cec85f8f-c970-4901-b23d-a55cd5de6818",
        title: "Pizza de Pepperoni",
        description:
          "Pizza de Pepperoni - Aproveite o sabor autêntico de uma pizza italiana sem sair de casa! Com massa fina e crocante, molho de tomate saboroso, queijo derretido e salame picante fatiado em cima, essa pizza congelada é perfeita para aquelas noites em que você quer um jantar rápido e fácil. Basta colocar no forno e esperar alguns minutos para desfrutar de uma pizza quente e deliciosa. Com ingredientes selecionados e uma receita tradicional, essa pizza é um verdadeiro prazer para os amantes de pizza em qualquer lugar.",
        value: 20,
        category: "Congelados",
        imageUrl: "/assets/frozen-1.jpg",
      },
      {
        id: "445803bd-9439-4d52-93cd-449aa703da75",
        title: "Suco de Tangenoura",
        description:
          "Suco de Tangerina e Cenoura - Refresque-se com a combinação perfeita de tangerina doce e cenoura suculenta! Esse suco é feito com frutas e vegetais frescos e selecionados, prensados para extrair o suco natural e delicioso. Combinando a doçura da tangerina com a crocância e sabor suave da cenoura, esse suco é uma ótima opção para quem busca uma bebida refrescante e saudável. Rico em vitaminas e nutrientes, esse suco é perfeito para um café da manhã ou lanche saudável, proporcionando energia e vitalidade ao longo do dia. Experimente e sinta o sabor equilibrado e natural desse suco de tangerina e cenoura.",
        value: 10,
        category: "Bebidas",
        imageUrl: "/assets/drink-1.jpg",
      },
      {
        id: "992ed110-ee3c-4f77-b2fe-32e68a9f4285",
        title: "Bolo de Chocolate",
        description:
          "Bolo de Chocolate com Chantili e Cereja - Deleite-se com um bolo de chocolate denso e delicioso, coberto com chantili cremoso e cerejas frescas! Feito com ingredientes de alta qualidade, como cacau em pó, açúcar e ovos frescos, esse bolo é uma experiência única de sabor e textura. A cobertura de chantili macio e aerado e as cerejas frescas e suculentas adicionam um toque delicado e elegante a essa sobremesa clássica. Ideal para uma celebração especial ou para um momento de indulgência, esse bolo é uma escolha perfeita para quem ama chocolate e uma pitada de frescor e doçura. Experimente e sinta a riqueza e a sofisticação desse bolo de chocolate com chantili e cereja.",
        value: 32.5,
        category: "Sobremesa",
        imageUrl: "/assets/cake-1.jpg",
      },
    ])
      .then(() => {
        console.log("Seed data inserted successfully");
        mongoose.connection.close();
      })
      .catch((error) => {
        console.log("Error inserting seed data:", error);
        mongoose.connection.close();
      });
  })
  .catch((error) => {
    console.log("Error checking if database has data:", error);
    mongoose.connection.close();
  });
