import { Sidebar, Post } from '../blog-sidebar/shared/blog-sidebar.model';

export const SIDEBAR: Sidebar = {
    categories: [
        {
            'name': 'development',
        },
        {
            'name': 'life',
        },
        {
            'name': 'game',
        },
        {
            'name': 'meeting',
        },
    ],
    tags: [
        {
            'name': '일상',
        },
        {
            'name': '사진',
        },
        {
            'name': '그냥',
        },
        {
            'name': '객체지향',
        },
        {
            'name': '디자인패턴',
        },
        {
            'name': '잠언',
        },
    ]
};

export const POSTS: Post[] = [
    {
        id: 1,
        title: '새로운 글',
        content: '안녕하세요.',
        createdAt: '2018년 1월 6일 12:00 오후',
        category: 'life',
        tags: ['그냥', '일상']
    },
    {
        id: 2,
        title: '새로운 글2',
        content: '안녕하세요2.',
        createdAt: '2018년 1월 6일 12:01 오후',
        category: 'development',
        tags: ['그냥', '잠언']
    }
];
