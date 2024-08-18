import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { CarForm } from "./components/CarForm/CarForm";
import { CarList } from "./components/CarList/CarList";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { carsData } from "./data"; // data.js contém os dados estáticos da lista de carros para a fase 1

export function App() {
  const [cars, setCars] = useState(carsData);

  const handleAddCar = (newCar) => {
    setCars([...cars, { id: Date.now(), ...newCar }]);
  };

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/lista"
            element={<CarList cars={cars} onDeleteCar={handleDeleteCar} />}
          />
          <Route
            path="/adicionar"
            element={<CarForm onSubmit={handleAddCar} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
