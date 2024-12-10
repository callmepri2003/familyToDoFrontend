/* eslint-disable react/prop-types */
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const apiUrl = `${import.meta.env.VITE_API_PROTOCOL}://${import.meta.env.VITE_API_HOST}/login/`;

  const handleLogin = (data, credentials) => {
    localStorage.setItem("credentials", JSON.stringify(credentials));
    localStorage.setItem("username", data.User);
    localStorage.setItem("userId", data.userId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = btoa(`${username}:${password}`);
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      handleLogin(data, credentials);
      window.location.href = "/";
    } else {
      setError("Invalid username or password");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    label: {
      marginBottom: "0.5rem",
      fontSize: "1rem",
      color: "#333",
    },
    input: {
      marginBottom: "1rem",
      padding: "0.75rem",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      outline: "none",
    },
    button: {
      padding: "0.75rem",
      fontSize: "1rem",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#007BFF",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    error: {
      marginTop: "1rem",
      color: "#ff4d4f",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Password:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
