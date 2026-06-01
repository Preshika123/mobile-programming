import { ScrollView, Text, TextInput, TouchableOpacity, View, } from "react-native";

import styles from "./css";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          🛡 Phishing Detection
        </Text>

        <Text style={styles.headerSubtitle}>
          Monitor phishing threats in real time
        </Text>
      </View>

      {/* Statistics */}
      <View style={styles.statsGrid}>
        <View style={[styles.card, styles.safeBorder]}>
          <Text style={styles.cardTitle}>
            Total Scans
          </Text>
          <Text style={styles.cardNumber}>
            248
          </Text>
        </View>

        <View style={[styles.card, styles.dangerBorder]}>
          <Text style={styles.cardTitle}>
            Threats Found
          </Text>
          <Text style={styles.cardNumber}>
            19
          </Text>
        </View>

        <View style={[styles.card, styles.warningBorder]}>
          <Text style={styles.cardTitle}>
            Suspicious Links
          </Text>
          <Text style={styles.cardNumber}>
            34
          </Text>
        </View>

        <View style={[styles.card, styles.safeBorder]}>
          <Text style={styles.cardTitle}>
            Safe URLs
          </Text>
          <Text style={styles.cardNumber}>
            195
          </Text>
        </View>
      </View>
      {/* URL Scanner */}
      <View style={styles.scanContainer}>
        <Text style={styles.sectionTitle}>
          Scan URL
        </Text>
        <TextInput
          placeholder="Paste suspicious URL here..."
          placeholderTextColor="#94A3B8"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Scan for Threat
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>
        Recent Scans
      </Text>

      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          paypal-security-check.com
        </Text>

        <Text style={styles.dangerText}>
          Phishing
        </Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          google.com
        </Text>

        <Text style={styles.safeText}>
          Safe
        </Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          secure-bank-login.xyz
        </Text>

        <Text style={styles.dangerText}>
          Danger
        </Text>
      </View>
    </ScrollView>
  );
}