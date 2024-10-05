import React, { useState } from "react";

import SupplierDetails from "../components/SupplierDetails";
import AddSupplier from "../components/AddSupplier";
import { createContext } from "react";

export const MainContext = createContext();
const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Electro World",
      contactEmail: "support@electroworld.com",
      contactPhone: "+1234567890",
      address: {
        street: "1234 Tech Blvd",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
      },
      products: ["Smartphone", "Laptop", "Headphones"],
      rating: 4.5,
      totalSales: 5000,
      verified: true,
      joinedDate: "2022-01-10",
      logoUrl: "https://example.com/logo-electroworld.png",
    },
    {
      id: 2,
      name: "Fashion Hub",
      contactEmail: "info@fashionhub.com",
      contactPhone: "+9876543210",
      address: {
        street: "5678 Style Ave",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        country: "USA",
      },
      products: ["T-shirts", "Jeans", "Jackets"],
      rating: 4.2,
      totalSales: 8000,
      verified: false,
      joinedDate: "2021-05-15",
      logoUrl: "https://example.com/logo-fashionhub.png",
    },
    {
      id: 3,
      name: "Home Essentials",
      contactEmail: "support@homeessentials.com",
      contactPhone: "+1122334455",
      address: {
        street: "91011 Comfort St",
        city: "Chicago",
        state: "IL",
        zipCode: "60601",
        country: "USA",
      },
      products: ["Furniture", "Bedding", "Decor"],
      rating: 4.8,
      totalSales: 10000,
      verified: true,
      joinedDate: "2020-11-25",
      logoUrl: "https://example.com/logo-homeessentials.png",
    },
  ]);
  const [isAddSupplierVisible, setIsAddSupplierVisible] = useState(false);
  const deleteSupplier = (supplierId) => {
    const filtered = suppliers.filter((supplier) => supplier.id !== supplierId);
    setSuppliers(filtered);
  };
  const addSuppliers = (data) => {
    console.log(data.joinedDate)
    setSuppliers([...suppliers,{...data,id:suppliers.length+1}]);
    setIsAddSupplierVisible(false);
  };
  const [letter,setLetter]=useState(5);
  const transfor=()=>{
      console.log(letter);
  }
  return (
    <>
      <div className="">
        <button
          className="text-xl bg-blue-500 text-white py-2 px-4 m-4"
          onClick={() => setIsAddSupplierVisible(true)}
        >
          add supplier
        </button>
        <MainContext.Provider value={{ addSuppliers}}>

        <div className="flex flex-wrap gap-6 p-5">
            {suppliers.map((supplier) => (
              <div key={supplier.id}>
                <SupplierDetails
                  supplierList={supplier}
                  deletee={deleteSupplier}
                />
              </div>
            ))}
        </div>
        {isAddSupplierVisible && <AddSupplier />}
        </MainContext.Provider>

      </div>
    </>
  );
};

export default SupplierList;
