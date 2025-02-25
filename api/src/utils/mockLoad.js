const {
  Product,
  Product_type,
  ProductImage,
  Animal,
  Animal_type,
  User,
  Adoption_petition,
  Adoption_alta,
  Inquiry,
  Cart_item,
} = require("../db");

const defaultImgUrl = `data:image/jpeg;base64,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`;

const mockUsers = [
  {
    name: "Lionel",
    lastName: "Messi",
    isAdmin: false,
    status: "Pending",
    email: "lioandres@afa.com",
    password: "lapelotaal10",
    phone_number: "101010",
    location: "Paris, France",
    isBan: true,
  },
  {
    name: "Linus",
    lastName: "Emiliano",
    isAdmin: true,
    status: "Pending",
    email: "linustorvalds@mit.com",
    password: "vamoslinux",
    phone_number: "424242",
    location: "Stockholm, Sweden",
    isBan: false,
  },
  {
    name: "Susan",
    lastName: "Morgan",
    isAdmin: false,
    status: "Pending",
    email: "succaritas@evilcorp.com",
    password: "nosoyunlagarto",
    phone_number: "666",
    location: "San Francisco, USA",
    isBan: false,
  },
  {
    name: "Raul",
    lastName: "Emiliano",
    isAdmin: false,
    status: "Pending",
    email: "ravennaemilio@simular.com",
    password: "tortugamaritima",
    phone_number: "696969",
    location: "San Isidro, Argentina",
    isBan: false,
  },
  {
    name: "Mario",
    lastName: "Santos",
    isAdmin: false,
    status: "Pending",
    email: "santosmario@simular.com",
    password: "fuegotiene",
    phone_number: "25051810",
    location: "Ciudad Autonoma de Buenos Aires, Argentina",
    isBan: false,
  },
  {
    name: "Pablo",
    lastName: "Lampon",
    isAdmin: false,
    status: "Pending",
    email: "lamponnepablo@simular.com",
    password: "lamponnetraeaquello",
    phone_number: "7777",
    location: "Rosario, Argentina",
    isBan: false,
  },
  {
    name: "Gabriel",
    lastName: "Medina",
    isAdmin: true,
    status: "Pending",
    isBan: true,
    email: "medinagabriel@simular.com",
    password: "supercalifragilisticoespialidoso",
    phone_number: "18022002",
    location: "Las Toninas, Argentina",
  },
];

const mockAnimals = [
  {
    name: "Aaron",
    description: "A very playful Dogger",
    sex: "Male",
    breed: "None",
    size: "Large",
    age: "5",
    animal_typeId: 1,
  },
  {
    name: "Brady",
    description: "A friendly cat",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 2,
  },
  {
    name: "Charlie",
    description: "A tiny and furry hamster",
    sex: "Female",
    breed: "None",
    size: "Small",
    age: "3",
    animal_typeId: 3,
  },
  {
    name: "Django",
    description:
      "Not a development framework done in python, but actually a Python",
    sex: "Male",
    breed: "Python",
    size: "Large",
    age: "1",
    animal_typeId: 4,
  },
  {
    name: "Entei",
    description: "I think it was a pokemon",
    sex: "Male",
    breed: "Pkmn",
    size: "Large",
    age: "999999",
    animal_typeId: 4,
  },
  {
    name: "Florida",
    description:
      "A little beetle i got from my backyard. Now I can say my database has BUGS",
    sex: "Female",
    breed: "Bug",
    size: "Small",
    age: "1",
    animal_typeId: 4,
  },
  {
    name: "Garmfielf",
    description: "He is a fat cAt, whY Is He so FAAAT",
    sex: "Male",
    breed: "None",
    size: "Large",
    age: "8",
    animal_typeId: 2,
  },
  {
    name: "Hillary",
    description: "But not Clinton. This is an actually likeable Hillary",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "4",
    animal_typeId: 2,
  },
  {
    name: "Indigo",
    description:
      "Brother to another animal in this DB, but I cant remember which it was.",
    sex: "Male",
    breed: "None",
    size: "Medium",
    age: "5",
    animal_typeId: 1,
  },
  {
    name: "Jake",
    description: "Brother to a human named Finn. He a stretchy boi",
    sex: "Male",
    breed: "None",
    size: "Medium",
    age: "5",
    animal_typeId: 1,
  },
  {
    name: "Kylian",
    description:
      "A hard-shelled turtle.Likes soccer. His peers dont seem to like him much.",
    sex: "Male",
    breed: "None",
    size: "Small",
    age: "23",
    animal_typeId: 4,
  },
  {
    name: "Lilia",
    description: "Lorem ipsum",
    sex: "Female",
    breed: "None",
    size: "Small",
    age: "3",
    animal_typeId: 2,
  },
  {
    name: "Mao",
    description:
      "A quite angry cat.Sometimes likes people, sometimes absolutely despises it",
    sex: "Male",
    breed: "None",
    size: "Small",
    age: "76",
    animal_typeId: 2,
  },
  {
    name: "Nairobi",
    description:
      "She is a cute dog. Sometimes likes to steal bones from your meals",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "7",
    animal_typeId: 1,
  },
  {
    name: "Orwell",
    description: "Used to be the pet of an IT guy",
    sex: "Male",
    breed: "None",
    size: "Medium",
    age: "3",
    animal_typeId: 1,
  },
  {
    name: "Parrrrley",
    description:
      "Retrieved from the Alberdi neighbourhood. He was stained of cyan paint when we got him here.",
    sex: "Male",
    breed: "Pirate",
    size: "Large",
    age: "5",
    animal_typeId: 4,
  },
  {
    name: "Quinn",
    description: "yadda yadda",
    sex: "Female",
    breed: "Birb",
    size: "Medium",
    age: "5",
    animal_typeId: 4,
  },
  {
    name: "Riley",
    description: "nothing to see here",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "32",
    animal_typeId: 1,
  },
  {
    name: "Susan",
    description: "Joao cancelo was here",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 2,
  },
  {
    name: "Tracy",
    description: "Likes detective movies",
    sex: "Male",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 1,
  },
  {
    name: "Ursa",
    description: "Rome is a nice city",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 1,
  },
  {
    name: "Vladimir",
    description: "Something about Ukraine",
    sex: "Male",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 4,
  },
  {
    name: "William",
    description: "The most generic british-sounding first name",
    sex: "Male",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 1,
  },
  {
    name: "Xenia",
    description: "Dont ask where I got her from",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 2,
  },
  {
    name: "Yesenia",
    description: "sadasdasdasdasdas",
    sex: "Female",
    breed: "None",
    size: "Medium",
    age: "6",
    animal_typeId: 1,
  },
  {
    name: "Zalmoxisus",
    description: "something about react redux i guess",
    sex: "Male",
    breed: "None",
    size: "Medium",
    age: "42",
    animal_typeId: 4,
  },
];

const mockPetitions = [
  {
    userId: 2,
    animalId: 1,
    topic: "some topic",
    description: "some description",
  },
  {
    userId: 3,
    animalId: 2,
    topic: "another topic",
    description: "another description",
  },
  {
    userId: 4,
    animalId: 3,
    topic: "A topic",
    description: "mockup description",
  },
  {
    userId: 5,
    animalId: 4,
    topic: "lorem ipsum",
    description: "dolor sit amet",
  },
  {
    userId: 6,
    animalId: 5,
    topic: "Malleus",
    description: "Maleficarum",
  },
  {
    userId: 7,
    animalId: 6,
    topic: "Diablo 3 was a mistake",
    description: "we will have to wait for diablo 4",
  },
];

const mockInquiries = [
  {
    userId: 2,
    topic: "Analice la posibilidad de aprender Linux",
    description:
      "Es de código abierto, y parecerá un profesional de programación al navegar con la terminal",
  },
  {
    userId: 3,
    topic: "Te has unido a META ya?",
    description:
      "Qué esperas para iniciar tu vida en META? El futuro es hoy! No hay necesidad de interactuar con personas en la vida real si usas las suficientes herramientas digitales",
  },
  {
    userId: 4,
    topic: "Posibilidad de un acuerdo",
    description:
      "Buenos días! He estado observando las actividades que lleva a cabo el refugio y quería consultar si de casualidad pudiera ceder una entrevista laboral a mi primo, Máximo Cozzeti. Es recibido de la universidad de Toronto en Veterinaria, y creía que podía ser una buena adición a su equipo de trabajo.",
  },
  {
    userId: 5,
    topic: "Cuestiones de pago a convenir",
    description:
      "Tenga usted muy buenos días. Ya conoce quién soy, y no puedo dejar de recordarle que a cambio del trabajo que llevamos a cabo para usted hemos acordado la colaboración en algunos operativos. En este mismo momento estoy precisando una jauría de perros amigables para cruzar una calle y montar una pequeña escena. Confiamos en que usted pueda cumplirnos, luego de un breve entrenamiento por el cuál luego me contactaré con usted. Desde ya muchas gracias.",
  },
  {
    userId: 6,
    topic: "Buenas noticias",
    description:
      "Desde que me traje a Betún no ha hecho más que darme alegrías. En su refugio saben bien como tratar a un animal, y hoy soy muy feliz con este nuevo compañero.",
  },
  {
    userId: 7,
    topic: "Cajón de gatitos",
    description:
      "Hola, escribo para contarle que he encontrado un cajón con gatitos abandonados. Me hubiese encantado que se quedaran en casa, pero lamentablemente trabajo largas horas y no me parecía humano dejarlos solos durante tanto tiempo. Pensé en regalarlos a los vecinos, pero la realidad es que este barrio está muy lleno de perros y temo por su seguridad. Podría usted recibirlos en su refugio?",
  },
];

const mockAltas = [
  {
    userId: 2,
    name: "Tomas",
    description: "some description",
  },
  {
    userId: 3,
    name: "Anderson",
    description: "another description",
  },
  {
    userId: 4,
    name: "Andres",
    description: "mockup description",
  },
  {
    userId: 5,
    name: "Shai",
    description: "dolor sit amet",
  },
  {
    userId: 6,
    name: "Felipe",
    description: "Maleficarum",
  },
  {
    userId: 7,
    name: "Pablo",
    description: "we will have to wait for diablo 4",
  },
];

async function loadUsers() {
  return User.bulkCreate(mockUsers);
}

async function loadAnimals() {
  for(let i=0; i<mockAnimals.length; i++) {
    try {
      let animtype = await Animal_type.findOne({
          where: {
              id: mockAnimals[i].animal_typeId
          }
      });
    

      let newAnimal = await Animal.create({
          name: mockAnimals[i].name,
          description: mockAnimals[i].description,
          size: mockAnimals[i].size,
          sex: mockAnimals[i].sex,
          breed: mockAnimals[i].breed,
          age: mockAnimals[i].age,
      })
      await newAnimal.setAnimal_types(animType)
      await newAnimal.createAnimalImage({});
  } catch (error) {
      console.log(error)
  }
  }
}

async function loadProducts() {
  const mockProducts = [
    {
      name: "Dog Food",
      description: "Food aimed to be consumed by dogs. Tastes like X",
      price: 400,
      productTypes: ["Food"],
      animalTypes: ["Dog"],
      stock: 300,
    },
    {
      name: "Leathery Dog Bone",
      description:
        "Part food, part toy, your dog can play with this item, which is also edible.",
      price: 200,
      productTypes: ["Food", "Toy"],
      animalTypes: ["Dog"],
      stock: 300,
    },
    {
      name: "Birthday hat",
      description: `Celebrate your pet's birthday with this hat!`,
      price: 150,
      productTypes: ["Clothing", "Toy"],
      animalTypes: ["Dog", "Cat", "Other"],
      stock: 300,
    },
    {
      name: "Nepeta Cataria",
      description:
        "Herbal mix that produces a recreative pseudonarcotic effect on your cat",
      price: 300,
      productTypes: ["Other"],
      animalTypes: ["Cat"],
      stock: 300,
    },
    {
      name: "Cat bed",
      description: "A place where ypur cat can sleep comfy",
      price: 1200,
      productTypes: ["Other"],
      animalTypes: ["Cat"],
      stock: 300,
    },
    {
      name: "General test item",
      description: "testing an iten that has every tag",
      price: 12345,
      productTypes: ["Clothing", "Toy", "Food", "Other"],
      animalTypes: ["Cat", "Dog", "Rodent", "Other"],
      stock: 300,
    },
    {
      name: "Wooden flakes",
      description:
        "Material used for rodent cage flooring. They sleep on it but also use it as bathroom.",
      price: 600,
      productTypes: ["Other"],
      animalTypes: ["Rodent"],
      stock: 300,
    },
    {
      name: "Another test item",
      description: "Another test item",
      price: 600,
      productTypes: ["Other"],
      animalTypes: ["Other"],
      stock: 300,
    },
  ];
  for (let i = 0; i < mockProducts.length; i++) {
    const newProd = await Product.create(mockProducts[i]);
    let k = await newProd.createProductImage({})
    for (let j = 0; j < mockProducts[i].animalTypes.length; j++) {
      const aType = await Animal_type.findOne({
        where: { name: mockProducts[i].animalTypes[j] },
      });
      await newProd.addAnimal_types(aType);
    }
    for (let j = 0; j < mockProducts[i].productTypes.length; j++) {
      const pType = await Product_type.findOne({
        where: { name: mockProducts[i].productTypes[j] },
      });
      await newProd.addProduct_types(pType);
    }
  }
}

async function loadCarts() {
  let items = [
    {
      userId: 1,
      productId: 1,
      quantity: 10,
    },
    {
      userId: 2,
      productId: 2,
      quantity: 10,
    },
    {
      userId: 2,
      productId: 3,
      quantity: 10,
    },
    {
      userId: 2,
      productId: 4,
      quantity: 10,
    },
  ];
  for (let i = 0; i < items.length; i++) {
    let user = await User.findByPk(items[i].userId);
    let product = await Product.findByPk(items[i].productId);
    let cItem = await user.createCart_item({
      productId: items[i].productId,
      quantity: items[i].quantity,
    });
  }
}

async function loadPetitions() {
  try {
    for (let i = 0; i < mockPetitions.length; i++) {
      let petition = await Adoption_petition.create({
        topic: mockPetitions[i].topic,
        description: mockPetitions[i].description,
      });
      let user = await User.findOne({ where: { id: mockPetitions[i].userId } });
      let animal = await Animal.findOne({
        where: { id: mockPetitions[i].animalId },
      });
      let aux = await user.addAdoption_petitions(petition);
      aux = await animal.addAdoption_petitions(petition);
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadAltas() {
  try {
    for (let i = 0; i < mockAltas.length; i++) {
      let alta = await Adoption_alta.create({
        name: mockAltas[i].name,
        description: mockAltas[i].description,
      });
      let user = await User.findOne({ where: { id: mockAltas[i].userId } });
      let aux = await user.addAdoption_alta(alta);
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadInquiries() {
  try {
    for (let i = 0; i < mockInquiries.length; i++) {
      let inq = await Inquiry.create({
        topic: mockInquiries[i].topic,
        description: mockInquiries[i].description,
      });
      let user = await User.findOne({ where: { id: mockInquiries[i].userId } });
      let aux = await user.addInquiries(inq);
    }
  } catch (error) {
    console.log(error);
  }
}
//
module.exports = {
  loadAnimals,
  loadProducts,
  loadUsers,
  loadPetitions,
  loadAltas,
  loadInquiries,
  loadCarts,
};
