import React from "react";
import axios from "axios";
import Button from "../Button/Button";
import styles from "./CarDetail.module.css";

export const CarDetail = ({ car: { id, name, brand, color, year }, onDeleteCar }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/cars/${id}`);
      onDeleteCar(id);
    } catch (error) {
      console.error("Error deleting car:", error);
      console.error("Error response:", error.response);
    }
  };

  return (
    <li className={styles.carDetail}>
      <div>
        <span>Modelo:</span> {name} <br />
        <span>Marca:</span> {brand} <br />
        <span>Cor:</span> {color} <br />
        <span>Ano:</span> {year} <br />
        <Button onClick={handleDelete} variant="danger">
          Excluir
        </Button>
      </div>
    </li>
  );
};
