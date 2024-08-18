import React, { useState, useEffect } from "react";
import { CarDetail } from "../CarDetail/CarDetail";
import axios from "axios";
import styles from "./CarList.module.css";

export const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:4000/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const handleDeleteCar = async (carId) => {
    try {
      // Remove localmente o carro da lista pelo ID para uma visualização mais fluída da listagem
      setCars(prevCars => prevCars.filter(car => car.id !== carId));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Lista de Carros</h2>
      <ul className={styles.carList}>
        {cars.map((car) => (
          <CarDetail key={car.id} car={car} onDeleteCar={handleDeleteCar} />
        ))}
      </ul>
    </div>
  );
};
