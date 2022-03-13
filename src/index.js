import Post from '@/Post';
import '@/styles/styles.css';
import * as $ from 'jquery';

const post = new Post('First post');

$('pre').html(post.toString())

console.log('Post to string:', post.toString());