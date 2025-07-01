import  { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";

const Home = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    if (activeTab === 'About') {
      return (
        <View>
        <View style={styles.cardRow}>
        <Icon name="id-card" size={18} color="#4169e1" style={styles.icon} />
        <View>
          <Text style={styles.label}>Student ID</Text>
          <Text style={styles.value}>653450297-4</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <Icon name="building" size={18} color="#4169e1" style={styles.icon} />
        <View>
          <Text style={styles.label}>Department</Text>
          <Text style={styles.value}>Computer Science and Information Technology</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <Icon name="university" size={18} color="#4169e1" style={styles.icon} />
        <View>
          <Text style={styles.label}>Faculty</Text>
          <Text style={styles.value}>Interdisciplinary Studies</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <Icon name="graduation-cap" size={18} color="#4169e1" style={styles.icon} />
        <View>
          <Text style={styles.label}>University</Text>
          <Text style={styles.value}>Khon Kaen University</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <Icon name="envelope" size={18} color="#4169e1" style={styles.icon} />
        <View>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>ramin.k@kkumail.com</Text>
        </View>
      </View>
      </View>
      );
    } else if (activeTab === 'Portfolio') {
     const cards = [
      { color: '#a8c4ff', image: require('../assets/image/image1.png') },
      { color: '#d1dbff', image: require('../assets/image/image2.png') },
      { color: '#97b4ff', image: require('../assets/image/image3.png') },
      { color: '#6f95ff', image: require('../assets/image/image4.png') },
    ];

    const columns = [];
    for (let i = 0; i < cards.length; i += 2) {
      columns.push(cards.slice(i, i + 2));
    }

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.portfolioScroll} >
        {columns.map((column, colIndex) => (
          <View key={colIndex} style={styles.portfolioColumn}>
            {column.map((card, rowIndex) => (
              <View key={rowIndex} style={[styles.portfolioCard, { backgroundColor: card.color }]}>
                <Image source={card.image} style={styles.portfolioImage} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
  
      );
    } else if (activeTab === 'Services') {
      return (
        <View style={styles.card}>
          <Text style={styles.cardText}>Services content coming soon.</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <View style={styles.profileImageWrapper}>
        <Image
          source={require('../assets/image/profile.jpg')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>Ramin Kaiyabut</Text>
        <Text style={styles.subtitle}> Programmer | Tester | UX/UI </Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>22.2K</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>9.9K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>


        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit profile info</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setActiveTab('About')}>
          <Text style={[styles.tabItem, activeTab === 'About' && styles.activeTab]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Portfolio')}>
          <Text style={[styles.tabItem, activeTab === 'Portfolio' && styles.activeTab]}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Services')}>
          <Text style={[styles.tabItem, activeTab === 'Services' && styles.activeTab]}>Services</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>
    </View>
  );
};
export default Home;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
  },
  header: {
    backgroundColor: '#4169e1',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 40,
    paddingTop: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  profileImageWrapper: {
    backgroundColor: '#fff',
    borderRadius: 75,
    padding: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    elevation: 6,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 5,
  },
  subtitle: {
    color: '#d6dbff',
    fontSize: 14,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  statLabel: {
    color: '#cbd4ff',
    fontSize: 12,
  },
  editButton: {
    backgroundColor: '#274bdb',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingBottom: 8,
  },
  tabItem: {
    fontSize: 16,
    color: '#7a85d8',
    fontWeight: '600',
  },
  activeTab: {
    color: '#4169e1',
    borderBottomWidth: 3,
    borderBottomColor: '#4169e1',
    paddingBottom: 5,
  },
  portfolioScroll: {
  padding: 10,
  },
  portfolioColumn: {
    flexDirection: 'column',
    marginRight: 12,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
     width: 160,
  },
  portfolioCard: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portfolioImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  card: {
  flex: 1,
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 20,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  width: '100%',  
  // marginBottom: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#7a85d8',
    marginTop: 10,
    marginLeft: 10,
  },
  value: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    marginLeft: 10,
  },
  cardRow: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginBottom: 12,
  },
  icon: {
    marginLeft: 10,
    marginTop: 12,
  },
});