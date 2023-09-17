import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const data = [
  {
    id: '1',
    name: 'Yellow hoodie',
    price: '90 $',
    category: 'Hoodies',
    imageURL: 'https://shop.navi.gg/files/resized/products/navi40884.650x622.png',
  },
  {
    id: '2',
    name: 'Black Hoodie',
    price: '75 $',
    category: 'Hoodies',
    imageURL: 'https://originalfavorites.com/cdn/shop/products/BlackyHoodieFront_384x384.jpg?v=1657233379',
  },
  {
    id: '3',
    name: 'White Hoodie',
    price: '80 $',
    category: 'Hoodies',
    imageURL: 'https://media.istockphoto.com/id/1179816012/photo/white-hoodie-template.jpg?s=612x612&w=0&k=20&c=DwN3WC0ou8u4y_mBiqMsLx4X_pg5F9kqbJxdLRRB_yM=',
  },
  {
    id: '4',
    name: 'Pink Hoodie',
    price: '100 $',
    category: 'Hoodies',
    imageURL: 'https://m.media-amazon.com/images/I/71H2EmHXuaL._AC_UY1100_.jpg',
  },
  {
    id: '5',
    name: 'White Sweatshirt',
    price: '100 $',
    category: 'Sweatshirts',
    imageURL: 'https://i.pinimg.com/originals/7e/0f/72/7e0f72c67902b77070776e1f60937267.jpg',
  },
  {
    id: '6',
    name: 'White Sweatshirt',
    price: '100 $',
    category: 'Sweatshirts',
    imageURL: 'https://cdn.cimri.io/image/1200x1200/jackjoneserkeksweatshirtfiyatlar_635060515.jpg',
  },
];

const sections = [
  {
    id: '1',
    name: 'Hoodies',
  },
  {
    id: '2',
    name: 'Sweatshirts',
  },
  {
    id: 'all',
    name: 'See All', 
  },
];

const Dresses = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.section,
        {
          backgroundColor: selectedCategory === item.id ? 'lightgray' : 'white',
        },
      ]}
      onPress={() => {
        if (item.id === 'all') {
          setSelectedCategory(null);
          setShowAllCategories(true);
        } else {
          setSelectedCategory(item.id);
          setShowAllCategories(false);
        }
      }}
    >
      <Text
        style={[
          styles.sectionText,
          {
            fontWeight: selectedCategory === item.id ? 'bold' : 'normal',
          },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  

  const toggleAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const filteredData = showAllCategories
    ? data
    : selectedCategory
    ? data.filter((item) => item.category === sections.find((section) => section.id === selectedCategory).name)
    : data;

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.box}>
      <Image
        style={styles.imageURL}
        source={{ uri: item.imageURL }}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <FlatList
          data={sections}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity
          style={[
            styles.section,
            {
              backgroundColor: showAllCategories ? 'lightgray' : 'white',
            },
          ]}
          onPress={toggleAllCategories}
        >
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.productContainer}
      />
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  container: {
    flexDirection: 'column',
  },
  allbox: {
    flexDirection: 'column',
  },
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    width: 175,
    height: 300,
  },
  imageURL: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  section: {
    backgroundColor: 'white',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  sectionText: {
    textAlign: 'center',
  },
  productContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Dresses;
