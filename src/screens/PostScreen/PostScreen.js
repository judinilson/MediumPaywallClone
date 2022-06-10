import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import styles from './PostScreen.style';
import posts from '../../../assets/data/posts';
import Paywall from '../../components/Paywall';

const PostScreen = () => {
  const [paywallShown, setPaywallShown] = useState(true);

  const route = useRoute();
  console.log(route.params);
  const postId = route?.params?.id;
  const post = posts.find(post => post.id === postId);

  if (!post) {
    return <Text style={styles.errorText}>Post not found!</Text>;
  }

  return (
    <View>
      <ScrollView style={styles.container} scrollEnabled={!paywallShown}>
        <View style={styles.userRow}>
          <Image source={{uri: post.user.image}} style={styles.userImage} />
          <Text style={styles.userName}>
            {post.user.name} in {post.category} - {post.createdAt}
          </Text>
        </View>

        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.caption}>{post.caption}</Text>

        <Image source={{uri: post.image}} style={styles.image} />
        <Text style={styles.contentText}>{post.content}</Text>
      </ScrollView>
      {paywallShown && <Paywall />}
    </View>
  );
};

export default PostScreen;
