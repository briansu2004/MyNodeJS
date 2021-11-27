fetch("http://localhost:3000/data", { method: "PUT", credentials: "include" })
  .then((res) => res.json())
  .then((data) => console.log(data));
