import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './PostListItem.style';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const PostListItem = ({post}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Post', {id: post.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.userRow}>
        <Image source={{uri: post.user.image}} style={styles.userImage} />
        <Text style={styles.userName}>
          {post.user.name} in {post.category}
        </Text>
      </View>

      <View style={styles.contentRow}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.caption}>{post.caption}</Text>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>
              {post.createdAt} - {post.readMinutes} min read
            </Text>
            <Feather name="bookmark" color={'white'} size={22} />
          </View>
        </View>
        <Image source={{uri: post.image}} style={styles.postImage} />
      </View>
    </Pressable>
  );
};

export default PostListItem;
