import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  header: {
    marginTop: 30,
    marginBottom: 20,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#94A3B8",
    marginTop: 5,
    fontSize: 15,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  safeBorder: {
    borderLeftWidth: 5,
    borderLeftColor: "#22C55E",
  },

  dangerBorder: {
    borderLeftWidth: 5,
    borderLeftColor: "#EF4444",
  },

  warningBorder: {
    borderLeftWidth: 5,
    borderLeftColor: "#FACC15",
  },

  cardTitle: {
    color: "#94A3B8",
    fontSize: 14,
  },

  cardNumber: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },

  scanContainer: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },

  input: {
    backgroundColor: "#0F172A",
    padding: 15,
    borderRadius: 12,
    color: "#FFFFFF",
  },

  button: {
    backgroundColor: "#22C55E",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },

  activityCard: {
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
  },

  activityText: {
    color: "#FFFFFF",
    fontSize: 15,
  },

  safeText: {
    color: "#22C55E",
    marginTop: 5,
    fontWeight: "bold",
  },

  dangerText: {
    color: "#EF4444",
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default styles;