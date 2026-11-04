import React, { useState, useMemo } from "react";

const SortingComponent = ({ items }) => {
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const processedItems = useMemo(() => {
    return items.map(item => {
      const parsedDate = new Date(item.date);
      return {
        ...item,
        parsedDate,
        formattedDate: parsedDate.toLocaleDateString()
      };
    });
  }, [items]);

  const sortedItems = useMemo(() => {
    return [...processedItems].sort((a, b) => {
      switch (sortOption) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return a.price - b.price;
        case "date":
          return b.parsedDate - a.parsedDate;
        default:
          return 0;
      }
    });
  }, [processedItems, sortOption]);

  return (
    <div className="p-4">
      {/* Sorting Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Sort by:</label>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border rounded-md shadow-md focus:outline-none focus:border-blue-500"
        >
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="date">Date</option>
        </select>
      </div>

      {/* Display Sorted Items */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item) => (
          <div key={item.id} className="p-4 border rounded-md shadow-md">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Date: {item.formattedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingComponent;
