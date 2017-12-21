import { Resume } from '../resume/shared/resume.model';

export const RESUME: Resume = {
    name: 'KyeongHoon Lee',
    privateInformation: {
        'photoUrl': '',
        'name': '이경훈 (李敬薰)',
        'birth': '1991년 5월 16일',
        'home': '서울특별시 강남구 언주로 79길 20',
        'phone': '010-4464-9115',
        'mail': 'googolhkl@gmail.com',
        'skills': [
            {
                'name': 'C',
                'proficiency': 90,
                'description': 'C언어.'
            },
            {
                'name': 'C++',
                'proficiency': 80,
                'description': 'C++'
            },
            {
                'name': 'Vim',
                'proficiency': 75,
                'description': '텍스트에디터'
            },
            {
                'name': 'Git',
                'proficiency': 80,
                'description': 'Git!'
            },
            {
                'name': 'Python',
                'proficiency': 90,
                'description': '비단뱀'
            },
            {
                'name': 'Java',
                'proficiency': 60,
                'description': '자바자바'
            },
            {
                'name': 'C#',
                'proficiency': 50,
                'description': '씨샵'
            },
            {
                'name': 'SQL',
                'proficiency': 50,
                'description': '에스큐엘'
            },
            {
                'name': 'HTML',
                'proficiency': 40,
                'description': 'HTML!!'
            },
            {
                'name': 'CSS',
                'proficiency': 50,
                'description': 'CSS!!'
            },
            {
                'name': 'Javascript',
                'proficiency': 40,
                'description': 'Javascript!!'
            },
        ]
    },
    education: {
        'schools': [
            {
                'name': '** University',
                'department': '전자공학과',
                'periodStart': 'March 2010',
                'periodEnd': 'Feb 2012',
                'graduation': '졸업'
            },
            {
                'name': '** University2',
                'department': '컴퓨터학과',
                'periodStart': 'March 2010',
                'periodEnd': 'Feb 2012',
                'graduation': '졸업'
            }
        ]
    },
    experiences: [
        {
            'host': 'H&B Life',
            'periodStart': '2010.01',
            'periodEnd': '2012-01',
            'projects': [
                {
                    'name': 'Refresh Club',
                    'role': 'development',
                    'description': '개발했음'
                },
                {
                    'name': 'Refresh Field',
                    'role': 'development',
                    'description': '개발했음2'
                },
            ]
        },
        {
            'host': 'H&B Life2',
            'periodStart': '2012.01',
            'periodEnd': '2014-01',
            'projects': [
                {
                    'name': 'Refresh Field3',
                    'role': 'development',
                    'description': '개발했음3'
                },
            ]
        }
    ],
    selfIntroductions: [
        {
            'subject': '자신의 장점',
            'description': '단점이 없다.',
        },
        {
            'subject': '자신의 단점',
            'description': '장점이 없다.',
        }
    ]
};
