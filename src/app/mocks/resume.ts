import { Resume } from '../resume/shared/resume.model';

export const RESUME: Resume = {
    name: 'KYEONGHOON LEE',
    privateInformation: {
        'photoUrl': 'https://s3.ap-northeast-2.amazonaws.com/apollon/photo/me.jpeg',
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
                'name': 'GANGNEUNG-WONJU NATIONAL UNIVERSITY',
                'department': '전자공학과',
                'periodStart': 'March 2014',
                'periodEnd': 'Feb 2017',
                'graduation': '졸업'
            },
            {
                'name': 'KOREA ARMY ACADEDY AT YEONG-CHEON',
                'department': '컴퓨터학과',
                'periodStart': 'Jan 2012',
                'periodEnd': 'Feb 2012',
                'graduation': '자퇴'
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
                    'role': '백엔드 & API 개발',
                    'description': '의무교육은 무상으로 한다. 모든 국민은 양심의 자유를 가진다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, \
                     이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 \
                     이 헌법시행 전에 할 수 있다. \
                    헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.'
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
            'description': '이 헌법은 1988년 2월 25일부터 시행한다. 다만,\
            이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령\
            및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.\
            형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 대법원장의 임기는 6년으로 하며,\
            중임할 수 없다.\
            선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.\
            감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다.\
            의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.'
        },
        {
            'subject': '자신의 단점',
            'description': '장점이 없다.',
        }
    ]
};
