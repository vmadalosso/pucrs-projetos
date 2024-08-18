import React, { useState } from "react";
import axios from "axios"; // Importa o Axios para fazer requisições HTTP
import { v4 as uuidv4 } from 'uuid'; // Importa a função v4 do pacote uuid para conseguir passar um id para os novos carros adicionados pelo CarForm.jsx
import styles from "./CarForm.module.css";

export const CarForm = ({ onSubmit }) => {
  const [name, setName] = useState(""); 
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCar = {
        id: uuidv4(), // Gera um ID único usando o pacote uuid
        name,
        brand,
        color,
        year
      };

      // Envia os dados do novo carro para a API
      await axios.post("http://localhost:4000/cars", newCar);

      // Chama a função onSubmit para atualizar a lista de carros no componente pai
      onSubmit();

      // Limpa os campos do formulário
      setName("");
      setBrand("");
      setColor("");
      setYear("");
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "color":
        setColor(value);
        break;
      case "year":
        setYear(value);
        break;
      default:
        break;
    }
  };

  const handleInvalid = (e) => {
    e.target.setCustomValidity("Favor preencher este campo corretamente");
  };

  const handleInputBlur = (e) => {
    e.preventDefault();
    e.target.setCustomValidity("");
  };

  return (
    <form className={styles.carForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Modelo:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ex.: Fusca"
          value={name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>
      <div>
        <label htmlFor="brand">Marca:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Ex.: Volkswagen"
          value={brand}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>
      <div>
        <label htmlFor="color">Cor:</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Ex.: Azul"
          value={color}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>
      <div>
        <label htmlFor="year">Ano:</label>
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Ex.: 1971"
          value={year}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onInvalid={handleInvalid}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Adicionar
      </button>
    </form>
  );
};
