export default function Topbar({ title }) {
  return (
    <div style={styles.topbar}>
      <h3>{title}</h3>
    </div>
  );
}

const styles = {
  topbar: {
    height: 60,
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    borderBottom: "1px solid #e5e7eb"
  }
};
