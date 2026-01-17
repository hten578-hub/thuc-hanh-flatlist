import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    title: "Bước 1: Xác định nhu cầu khách hàng",
    content: "Vào Hoàng sắp đến hạn lúc 01/08/2020",
    time: "20/08/2020, 06:00",
    done: true,
  },
  {
    id: "2",
    title: "Bạn có khách hàng mới!",
    content:
      "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên hệ ngay.",
    time: "20/08/2020, 06:00",
    done: false,
  },
  {
    id: "3",
    title: "Khách hàng được chia sẻ bị trùng",
    content:
      "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    time: "20/08/2020, 06:00",
    done: false,
  },
  {
    id: "4",
    title: "Khách hàng được thêm bị trùng",
    content:
      "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    time: "20/08/2020, 06:00",
    done: false,
  },
  {
    id: "5",
    title: "Công việc sắp đến hạn trong hôm nay",
    content: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00",
    done: true,
  },
  {
    id: "6",
    title: "Công việc đã quá hạn",
    content:
      "Bạn có 17 công việc quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    time: "20/08/2020, 06:00",
    done: true,
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* TIÊU ĐỀ */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>

      {/* DANH SÁCH */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Ionicons
              name={item.done ? "checkmark-circle" : "notifications"}
              size={22}
              color={item.done ? "#2E86DE" : "#999"}
              style={styles.icon}
            />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 8,
    padding: 12,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
    marginTop: 4,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  content: {
    fontSize: 13,
    color: "#555",
    marginVertical: 3,
  },
  time: {
    fontSize: 11,
    color: "#999",
  },
});
