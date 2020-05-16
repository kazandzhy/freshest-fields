import Images from "../assets";

export default class GroceryStoreService {
  data = [
    {
      id: 1,
      name: "Pears",
      price: 2.2,
      itemImage: Images[1],
    },
    {
      id: 2,
      name: "Meat",
      price: 5.9,
      itemImage: Images[2],
    },
    {
      id: 3,
      name: "Spinach",
      price: 0.95,
      itemImage: Images[3],
    },
    {
      id: 4,
      name: "Crimini",
      price: 2.8,
      itemImage: Images[4],
    },
    {
      id: 5,
      name: "Dill",
      price: 0.85,
      itemImage: Images[5],
    },
    {
      id: 6,
      name: "Bananas",
      price: 1.5,
      itemImage: Images[6],
    },
    {
      id: 7,
      name: "Avocado",
      price: 3.45,
      itemImage: Images[7],
    },
    {
      id: 8,
      name: "Grapes",
      price: 4.25,
      itemImage: Images[8],
    },
  ];

  getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
