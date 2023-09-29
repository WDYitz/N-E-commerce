import { ItemType } from "@/types/Item";

type addItem = {
  type: "ADD_ITEM";
  payload: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
  };
};

type removeItem = {
  type: "REMOVE_ITEM";
  payload: {
    id: number;
  };
};

type reducerActionType = addItem | removeItem;

export function CartReducer(state: ItemType[], action: reducerActionType) {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: state.length,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          description: action.payload.description,
          category: action.payload.category,
        },
      ];
    case "REMOVE_ITEM":
      return state.filter((i) => i.id !== action.payload.id);
    default:
      return state;
  }
}
