// components/Dropdown.js

const Dropdown = () => {
    return (
      <div className="relative">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          Dropdown
        </button>
        <ul className="absolute top-10 right-0 z-10 hidden bg-white border border-gray-300 rounded-md shadow-md">
          <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
          <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
          <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
        </ul>
      </div>
    );
  };
  
  export default Dropdown;
  