"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <div>
        <h1>Something went wrong 😢</h1>
        <p>{error.message}</p>

        <button className="border border-pink-100 cursor-pointer" onClick={() => reset()} style={{ marginTop: "10px", padding: "8px" }}>
          Try again
        </button>
      </div>
    </div>
  );
}
