import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* 상단 배경 + 로고 */}
      <View style={styles.header}>
        <Image
        source={require('@/assets/images/AppLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>오늘의 배달</Text>
      </View>

      {/* 가로 스크롤 메뉴 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuScroll}>
        {['피자', '치킨', '버거', '한식', '중식', '일식'].map((item, idx) => (
          <View key={idx} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 추천 음식 */}
     <View style={styles.section}>
  <Text style={styles.sectionTitle}>추천 음식</Text>
  <View style={styles.foodGrid}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
      <Pressable key={item} style={styles.foodCard}>
        <Image
          source={require('@/assets/images/food01.jpeg')}
          style={styles.foodImage}
        />
        <Text style={styles.foodName}>배달 음식 {item}</Text>
      </Pressable>
    ))}
  </View>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#ffc79cff', padding: 30, alignItems: 'center' },
  logo: { width: 80, height: 80, marginBottom: 8 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1D3D47' },
  menuScroll: { paddingLeft: 16, height: 80, marginVertical: 16 },
  menuItem: { 
    width: 80, height: 80, justifyContent: 'center', alignItems: 'center', 
    backgroundColor: '#f2f2f2', borderRadius: 12, marginRight: 12 
  },
  menuText: { fontSize: 14, fontWeight: '600', textAlign: 'center' },
  section: { paddingBottom: 16 }, 
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 16, marginBottom: 12 },
foodGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
},
foodCard: {
  width: '30%',    
  marginBottom: 16,
},
foodImage: { width: '100%', height: 100, borderRadius: 12, marginBottom: 8 },
foodName: { fontSize: 16, fontWeight: '500', textAlign: 'center' },

});
