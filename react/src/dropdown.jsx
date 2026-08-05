import React, { useRef, useState } from "react";

const Dropdown = () => {
    const ref = useRef(null);
    const [arr, setArr] = useState([]);
    const [selected, setSelected] = useState("");

    const addToArr = () => {
        const value = ref.current.value.trim();

        if (!value) return;

        setArr((prev) => [...prev, value]);
        ref.current.value = "";
        ref.current.focus();
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f4f6f8",
            }}
        >
            <div
                style={{
                    width: "380px",
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "#333",
                    }}
                >
                    Dropdown Generator
                </h2>

                <input
                    ref={ref}
                    type="text"
                    placeholder="Enter an item..."
                    onKeyDown={(e) => e.key === "Enter" && addToArr()}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        outline: "none",
                        fontSize: "15px",
                        boxSizing: "border-box",
                    }}
                />

                <button
                    onClick={addToArr}
                    style={{
                        width: "100%",
                        marginTop: "15px",
                        padding: "12px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#2563eb",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "15px",
                    }}
                >
                    Add Item
                </button>

                <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    style={{
                        width: "100%",
                        marginTop: "20px",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "15px",
                    }}
                >
                    <option value="">Choose an item</option>

                    {arr.map((item, index) => (
                        <option key={index} value={item}>
                            {index + 1}. {item}
                        </option>
                    ))}
                </select>

                <div
                    style={{
                        marginTop: "20px",
                        textAlign: "center",
                    }}
                >
                    {selected ? (
                        <div
                            style={{
                                background: "#dcfce7",
                                color: "#166534",
                                padding: "12px",
                                borderRadius: "8px",
                                fontWeight: "bold",
                            }}
                        >
                            Selected: {selected}
                        </div>
                    ) : (
                        <div
                            style={{
                                color: "#777",
                            }}
                        >
                            No item selected
                        </div>
                    )}
                </div>

                {arr.length > 0 && (
                    <div style={{ marginTop: "20px" }}>
                        <h4>Items ({arr.length})</h4>

                        <ul style={{ paddingLeft: "20px" }}>
                            {arr.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;