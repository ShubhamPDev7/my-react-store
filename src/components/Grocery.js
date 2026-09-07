const Grocery = () => {
  return (
    <div style={{maxWidth: "900px", margin: "40px auto", padding: "0 20px"}}>
      <h1>🛒 ShopZone Mart & Fresh Groceries</h1>
      <p style={{color: "#64748b", margin: "12px 0 24px 0"}}>This vertical has hundreds of items and its own dedicated sub-store.
        Notice that Parcel only downloaded this bundle chunk when you navigated here!</p>

        <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
        >{["Organic Vegetables", "Dairy & Eggs", "Beverages", "Fresh Fruits", "Bakery Goods", "Pantry Essentials"].map(
          (category) => (
            <div
            key={category}
            style={{
              border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "#fff",
                textAlign: "center",
                fontWeight: "600",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
            >
              {category}
            </div>
          )
        )}</div>
    </div>
  )
}

export default Grocery;