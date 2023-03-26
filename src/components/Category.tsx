import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

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
    <ButtonGroup>
      {categories.map((category) => (
        <Button
          key={category.name}
          name={category.id}
          id={category.id}
          variant={selectedCategory === category.name ? "primary" : "secondary"}
          onClick={() => handleCategoryChange(category)}
        >
          {category.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Category;
