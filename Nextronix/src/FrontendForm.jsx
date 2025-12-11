import { useState } from "react";
import axios from "axios";

export default function DataForm() {
  const [data, setData] = useState({
    name: "",
    pass: "",
  });

  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setIsError(false);

    try {
      const response = await axios.post(
        "http://localhost:8081/data/save",
        data
      );

      setMsg("Data saved successfully ✅");
      setIsError(false);

      // clear form
      setData({ name: "", pass: "" });

    } catch (error) {
      // ✅ backend error message
      if (error.response && error.response.data) {
        setMsg(error.response.data);
      } else {
        setMsg("Server not responding");
      }
      setIsError(true);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Data Form</h2>

        {/* ✅ Message UI */}
        {msg && (
          <p
            style={{
              color: isError ? "red" : "green",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {msg}
          </p>
        )}

        <div style={{ marginBottom: "10px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <input
            type="password"
            name="pass"
            value={data.pass}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
