import { IProduct } from "../common/types";

export function getProducts(): Promise<IProduct[]> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve([
        {
          id: "0b8ec672-3020-4340-931f-0cafc1251b07",
          title: "Big One",
          value: 30,
          category: "Lanche",
          imageUrl: "/public/assets/hamburguer-1.jpg",
        },
        {
          id: "dc560ab0-52ad-4eda-9272-3327a45e6c2e",
          title: "Big Two",
          value: 40,
          category: "Lanche",
          imageUrl: "/public/assets/hamburguer-2.jpg",
        },
        {
          id: "66b5fff7-3615-4315-9e9c-b4bd22a40e30",
          title: "One Shake",
          value: 25,
          category: "Sobremesa",
          imageUrl: "/public/assets/shake-1.jpg",
        },
        {
          id: "3a183afe-41ba-4fac-8107-d2746b1cedc9",
          title: "Two Shake",
          value: 20,
          category: "Sobremesa",
          imageUrl: "/public/assets/shake-2.jpg",
        },
      ]);
    }, 0)
  );
}
