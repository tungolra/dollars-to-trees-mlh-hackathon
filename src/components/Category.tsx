import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Stack } from "react-bootstrap";

interface CategoryProps {
  setEmissionFactor: (factor: any) => void;
}

const categories = [
  {
    factor: {
      co2e_total: 0.187,
      co2: 0.16,
      ch4: 0.001,
      n2o: 0,
      co2e_unit: "kg",
    },
    id: "consumer_goods-type_clothing",
    name: "Clothing",
  },
  {
    factor: { co2e_total: 0.16, co2: 0, ch4: 0, n2o: 0, co2e_unit: "kg" },
    id: "consumer_goods-type_hats_and_accessories",
    name: "Hats & Accessories",
  },
  {
    factor: { co2e_total: 0.39, co2: 0, ch4: 0, n2o: 0, co2e_unit: "kg" },
    id: "consumer_goods-type_footwear",
    name: "Footwear",
  },
  {
    factor: { co2e_total: 0.92, co2: 0.59, ch4: 0, n2o: 0, co2e_unit: "kg" },
    id: "consumer_goods-type_leather_and_related_products",
    name: "Leather Products",
  },
  {
    factor: {
      co2e_total: 0.98,
      co2: 0.801,
      ch4: 0.007,
      n2o: 0,
      co2e_unit: "kg",
    },
    id: "consumer_goods-type_wearing_apparel",
    name: "Wearing Apparel",
  },
];

const Category: React.FC<CategoryProps> = ({ setEmissionFactor }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].name
  );

  useEffect(() => {
    setSelectedCategory(selectedCategory);
    handleCategoryChange(categories[0]);
  }, [selectedCategory]);

  function handleCategoryChange(category: any) {
    setSelectedCategory(category.name);
    setEmissionFactor(category.factor);
  }

  return (
    <div className="d-md-flex justify-content-md-end align-items-center">
      <ButtonGroup
        aria-label="Category buttons"
        className="d-none d-md-block mx-auto"
      >
        {categories.map((category) => (
          <Button
            key={category.name}
            name={category.id}
            id={category.id}
            variant={selectedCategory === category.name ? "success" : "light"}
            onClick={() => handleCategoryChange(category)}
          >
            <label style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {category.name}
            </label>
          </Button>
        ))}
      </ButtonGroup>

      <Stack direction="vertical" gap={2} className="d-md-none">
        {categories.map((category) => (
          <Button
            key={category.name}
            name={category.id}
            id={category.id}
            variant={selectedCategory === category.name ? "success" : "light"}
            onClick={() => handleCategoryChange(category)}
          >
            <label style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {category.name}
            </label>
          </Button>
        ))}
      </Stack>
    </div>
  );
};

export default Category;
