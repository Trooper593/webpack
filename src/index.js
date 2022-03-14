import Post from '@/Post';
import '@/styles/styles.css';
import '@/styles/less.less';
import '@/styles/scss.scss';
import * as $ from 'jquery';

const post = new Post('First post');

$('pre').html(post.toString())

console.log('Post to string:', post.toString());