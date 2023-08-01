function Card({ user }) {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <img src={user.profileImg} style={{ width: "80px" }} />
      <p style={{ fontSize: "24px", fontWeight: "500" }}>{user.name}</p>
    </div>
  );
}
export default Card;
