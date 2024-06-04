import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    setData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          data-testid="username"
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <input
          data-testid="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <input
          data-testid="remember"
          name="remember"
          type="checkbox"
          checked={data.remember}
          onChange={handleInputChange}
        />

        <div data-testid="state">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}