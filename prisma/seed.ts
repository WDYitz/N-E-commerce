const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const createSmartphones = async () => {
  try {
    const smartphoneCategory = await db.category.create({
      data: {
        name: "Smartphone",
      },
    });

    const smartPhones = [
      {
        name: "Apple Iphone 8",
        price: 2200,
        discountPercentage: 15,
        quantity: 27,
        description: "Descubra a combinação perfeita de inovação e elegância com o iPhone 8. Este modelo icônico da Apple oferece um desempenho robusto, design sofisticado e tecnologia avançada, tudo em um dispositivo que continua a ser uma escolha popular para aqueles que buscam qualidade e confiabilidade.",
        imageURL: "https://utfs.io/f/28a00227-abc3-485f-9f17-2b64f644f8ba-x5g3eb.png",
        stars: 4,
        category: {
          connect: {
            id: smartphoneCategory.id
          }
        },
      },
      {
        name: "Apple Iphone 15 PRO",
        price: 4500,
        discountPercentage: 7,
        quantity: 87,
        description: "Experimente o futuro da tecnologia móvel com o iPhone 15 Pro. Este dispositivo de ponta redefine o que um smartphone pode fazer, combinando design inovador, desempenho excepcional e recursos avançados para criar uma experiência incomparável.",
        imageURL: "https://utfs.io/f/977467ef-1e60-4077-940a-0c12e2df0764-x9a5jd.png",
        stars: 5,
        category: {
          connect: {
            id: smartphoneCategory.id
          }
        },
      },
      {
        name: "Samsung Galaxy",
        price: 1900,
        discountPercentage: 12,
        quantity: 14,
        description: "Explore o poder da inovação e da tecnologia com o Samsung Galaxy, um smartphone que combina design elegante, desempenho robusto e recursos avançados para proporcionar uma experiência móvel incomparável.",
        imageURL: "https://utfs.io/f/d0792637-6b8b-432e-b070-585b2ce0a114-xdmdbq.png",
        stars: 4,
        category: {
          connect: {
            id: smartphoneCategory.id
          }
        },
      },
      {
        name: "Samsung Galaxy 2022",
        price: 1700,
        discountPercentage: 23,
        quantity: 29,
        description: "Experimente a próxima geração da tecnologia móvel com o Samsung Galaxy, um smartphone que combina inovação de ponta, design sofisticado e recursos avançados para transformar a maneira como você se conecta e interage com o mundo.",
        imageURL: "https://utfs.io/f/e0b86617-cc14-40ce-a22b-48f1ab4f5c4a-jedcq0.png",
        stars: 4,
        category: {
          connect: {
            id: smartphoneCategory.id
          }
        },
      },
    ];

    for (const smartphone of smartPhones) {
      await db.product.create({
        data: smartphone,
      });
    }

  } catch (error) {
    console.error("Erro ao criar a categoria Smartphone", error);
  }
};

const createIpads = async () => {
  try {
    const ipadCategory = await db.category.create({
      data: {
        name: "Ipads",
      },
    });

    const ipads = [
      {
        name: "Ipad",
        price: 3400,
        discountPercentage: 0,
        quantity: 64,
        description: "Descubra a versatilidade e o desempenho excepcionais do iPad, um tablet que combina inovação tecnológica com um design elegante, oferecendo uma experiência de uso intuitiva e produtiva. Perfeito para trabalho, estudos, entretenimento e criatividade, o iPad é o dispositivo ideal para quem busca potência e praticidade em um só lugar.",
        imageURL: "https://utfs.io/f/c1cdd971-3b43-4149-88a5-4371983b34e3-ekqzdm.png",
        stars: 5,
        category: {
          connect: {
            id: ipadCategory.id
          }
        },
      },
      {
        name: "Ipad PRO",
        price: 4500,
        discountPercentage: 7,
        quantity: 8,
        description: "Eleve sua experiência digital com o iPad Pro, o tablet mais poderoso e versátil da Apple. Projetado para profissionais, criadores e entusiastas da tecnologia, o iPad Pro combina desempenho excepcional, design sofisticado e uma tela impressionante para oferecer uma experiência de uso inigualável.",
        imageURL: "https://utfs.io/f/9b10f84e-b88e-46dd-9f7c-30762be87ea4-x1dwhv.png",
        stars: 5,
        category: {
          connect: {
            id: ipadCategory.id
          }
        },
      },
    ];

    for (const ipad of ipads) {
      await db.product.create({
        data: ipad,
      });
    }

  } catch (error) {
    console.error("Erro ao criar a categoria Tablet", error);
  }
};

const createEarbuds = async () => {
  try {
    const earbudsCategory = await db.category.create({
      data: {
        name: "Earbuds",
      },
    });

    const earbuds = [
      {
        name: "Apple Airpod",
        price: 1500,
        discountPercentage: 5,
        quantity: 12,
        description: "Descubra a liberdade do som sem fio com os AirPods. Projetados para oferecer uma experiência auditiva imersiva e sem interrupções, os AirPods são a escolha perfeita para quem busca qualidade e praticidade. Com um design elegante e compacto, esses fones de ouvido garantem um ajuste confortável e seguro, ideal para uso do dia a dia.",
        imageURL: "https://utfs.io/f/c1cdd971-3b43-4149-88a5-4371983b34e3-ekqzdm.png",
        stars: 5,
        category: {
          connect: {
            id: earbudsCategory.id
          }
        },
      },
    ];

    for (const earbud of earbuds) {
      await db.product.create({
        data: earbud,
      });
    }

  } catch (error) {
    console.error("Erro ao criar a categoria Earbuds", error);
  }
};

const createSmartwatch = async () => {
  try {
    const smartwatchCategory = await db.category.create({
      data: {
        name: "Smartwatch",
      },
    });

    const smartwatches = [
      {
        name: "Apple Watch Ultra 2",
        price: 4900,
        discountPercentage: 5,
        quantity: 12,
        description: "Explore novas fronteiras com o Apple Watch Ultra, o smartwatch mais robusto e avançado da Apple. Desenvolvido para aqueles que buscam performance, resistência e inovação, o Apple Watch Ultra é ideal para aventureiros, atletas e entusiastas de tecnologia que exigem o melhor em suas jornadas.",
        imageURL: "https://utfs.io/f/3b8d88f7-aa0a-4413-8a53-9bd4eb10918b-ng3e6d.png",
        stars: 5,
        category: {
          connect: {
            id: smartwatchCategory.id
          }
        },
      },
    ];

    for (const smartwatch of smartwatches) {
      await db.product.create({
        data: smartwatch,
      });
    }

  } catch (error) {
    console.error("Erro ao criar a categoria Smartwatch", error);
  }
};


const seedDatabase = async () => {
  try {
    await createSmartphones();
    await createIpads();
    await createEarbuds();
    await createSmartwatch();
  } catch (error) {
    console.error("Erro ao criar os produtos", error);
  } finally {
    await db.$disconnect();
  }
}

seedDatabase().then(() => {
  console.log("Seed finalizado com sucesso!");
});