import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { Meal } from "../models/meal.model";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

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

const db = getFirestore(app);

export const getMeals = async (db: Firestore): Promise<Meal[]> => {
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

  if (mealList.length === 0) {
    //add data to firebase
    DUMMY_MEALS.forEach(async (meal) => {
      await setDoc(doc(mealsCol), {
        name: meal.name,
        description: meal.description,
        price: meal.price,
      });
    });

    const querySnapshot = await getDocs(mealsCol);
    mealList = querySnapshot.docs.map((doc) => {
      const currentData = doc.data();

      console.log(currentData);
      return {
        id: doc.id,
        name: currentData.name,
        description: currentData.description,
        price: currentData.price,
      } as Meal;
    });
  }

  return mealList;
};

export default db;
