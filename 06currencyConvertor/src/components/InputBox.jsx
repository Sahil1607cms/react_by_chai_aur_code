import React, { useId } from 'react';

// A functional component for creating a customizable input box with a label, input field, and dropdown.
function InputBox({
    label,                  // Label text for the input field
    amount,                 // Current value of the amount input field
    onAmountChange,         // Callback function triggered when the amount changes
    onCurrencyChange,       // Callback function triggered when the currency selection changes
    currencyOptions = [],   // Array of available currency options for the dropdown
    selectCurrency = "usd", // Default selected currency in the dropdown
    amountDisable = false,  // Flag to disable the amount input field
    currencyDisable = false,// Flag to disable the currency dropdown
    className = "",         // Additional CSS classes for styling the container
}) {
    const amountInputId = useId(); // Generates a unique ID for the amount input field

    return (
        // Main container with default styling and optional custom classes
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Left section for the amount input field */}
            <div className="w-1/2">
                {/* Label for the input field, linked with 'htmlFor' using a unique ID */}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                {/* Input field for entering the amount */}
                <input
                    id={amountInputId} // Unique ID for the input field
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number" // Input type is 'number'
                    placeholder="Amount" // Placeholder text
                    disabled={amountDisable} // Disabled state based on prop
                    value={amount} // Controlled component, value set by prop
                    onChange={(e) => 
                        onAmountChange && onAmountChange(Number(e.target.value)) // Trigger callback on change
                    }
                />
            </div>

            {/* Right section for the currency dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Label for the dropdown */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* Dropdown for selecting the currency */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // Controlled component, value set by prop
                    onChange={(e) => 
                        onCurrencyChange && onCurrencyChange(e.target.value) // Trigger callback on change
                    }
                    disabled={currencyDisable} // Disabled state based on prop
                >
                    {/* Mapping through the currencyOptions array to render each option */}
                    {currencyOptions.map((currency) => (
                    //use key always when using loops in react to enhance the performance and prevent warning
                        <option key={currency} value={currency}>
                            {currency} {/* Display currency name */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox; // Export the component for use in other parts of the application
