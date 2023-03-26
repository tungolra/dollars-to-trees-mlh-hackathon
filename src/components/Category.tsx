import React from "react";
import { ButtonGroup, Button, Stack } from "react-bootstrap";

// category images

interface CategoryProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  setActivityId: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  selectedCategory,
  onSelectCategory,
  setActivityId,
}) => {
  const categories = [
    { id: "consumer_goods-type_clothing", name: "Clothing" },
    {
      id: "consumer_goods-type_hats_and_accessories",
      name: "Hats & Accessories",
    },
    { id: "consumer_goods-type_footwear", name: "Footwear" },
    {
      id: "consumer_goods-type_leather_and_related_products",
      name: "Leather Products",
    },
    {
      id: "consumer_goods-type_wearing_apparel",
      name: "Wearing Apparel",
    },
  ];

  function handleCategoryChange(category: any) {
    onSelectCategory(category.name);
    setActivityId(category.id);
  }

  return (
    <div className="d-md-flex justify-content-md-end align-items-center">
      <ButtonGroup aria-label="Category buttons" className="d-none d-md-block mx-auto">
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
