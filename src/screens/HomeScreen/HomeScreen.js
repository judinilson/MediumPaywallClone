import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './HomeScreen.style';
import posts from '../../../assets/data/posts';
import PostListItem from '../../components/PostListItem';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Home</Text>
        <Feather name="bell" color={'white'} size={24} />
      </View>

      <FlatList
        data={posts}
        renderItem={({item}) => <PostListItem post={item} />}
      />
    </View>
  );
};

export default HomeScreen;
