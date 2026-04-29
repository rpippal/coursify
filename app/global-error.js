"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body style={{ textAlign: "center", padding: "50px" }}>
        <h1>App Crashed 💥</h1>
        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Reload App
        </button>
      </body>
    </html>
  );
}
