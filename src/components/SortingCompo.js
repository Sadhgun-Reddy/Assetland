import React, { useState, useMemo } from "react";

const SortingComponent = ({ items }) => {
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedItems = useMemo(() => {
    if (sortOption === "default") {
      return items.map(item => ({
        ...item,
        formattedDate: new Date(item.date).toLocaleDateString()
      }));
    }

    return items
      .map(item => ({
        item,
        dateValue: sortOption === "date" ? new Date(item.date).getTime() : 0,
        formattedDate: new Date(item.date).toLocaleDateString()
      }))
      .sort((a, b) => {
        switch (sortOption) {
          case "name":
            return a.item.name.localeCompare(b.item.name);
          case "price":
            return a.item.price - b.item.price;
          case "date":
            return b.dateValue - a.dateValue;
          default:
            return 0;
        }
      })
      .map(obj => ({
        ...obj.item,
        formattedDate: obj.formattedDate
      }));
  }, [items, sortOption]);

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
