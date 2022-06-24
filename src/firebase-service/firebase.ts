import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { CheckoutOrder } from "../components/Cart/models/checkout-order.model";

import { Meal } from "../models/meal.model";

const firebaseConfig = {
  apiKey: "AIzaSyBOD6DhDNjwtkjOsMJ9E5ehLcaARfNWpaY",
  authDomain: "food-app-bc88f.firebaseapp.com",
  databaseURL:
    "https://food-app-bc88f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-app-bc88f",
  storageBucket: "food-app-bc88f.appspot.com",
  messagingSenderId: "327111936113",
  appId: "1:327111936113:web:a2ead1414157274b4df3d0",
};
const app = initializeApp(firebaseConfig);

export const getMeals = async (): Promise<Meal[]> => {
  const db = getFirestore(app);
  const mealsCol = collection(db, "meals");
  const mealSnapshot = await getDocs(mealsCol);
  let mealList = mealSnapshot.docs.map((doc) => {
    const currentData = doc.data();
    return {
      id: doc.id,
      name: currentData.name,
      description: currentData.description,
      price: currentData.price,
    } as Meal;
  });

  return mealList;
};

export const createOrder = async (order: CheckoutOrder): Promise<void> => {
  const db = getFirestore(app);
  const ordersCol = collection(db, "orders");

  await setDoc(doc(ordersCol), order);
};

export default app;
