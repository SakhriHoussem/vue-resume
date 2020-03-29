import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        form: {
            fullName: 'Sakhri Houssem Eddine',
            job: 'Full Stack Dev',
            phone: '+213 777850224',
            email: 's.houssem.e@gmail.com',
            links: ["sakhrihoussem.me"],
            socialNetworks: [],
            resume: 'Versatile, motivated and passionate web developer of new technologies.\n' +
                'Having gained experience with multiple technologies and completing several development projects, whether in business or freelance.\n' +
                '\n' +
                'Are actively seeking a Web Developer position within a dynamic team and with technical and professional development opportunities.',
            experiences: [
                {
                    id: 0,
                    role: 'Full Stack Developer',
                    
                    company: 'AhSB-Communication',
                    fromTo: ['Nov-2018', 'April-2019'],
                    description: 'It was my responsibility to :\n' +
                        '\n' +
                        '- Perform unit tests under the supervision of the IANDI team on their Platform 1SPECT using PHP Unit .\n' +
                        '- Develop websites using Ez-platform technology.\n' +
                        '- Using the YouTrack Task Management Tool.\n' +
                        '- Using Sourcetree for Git',
                    tags: ['PHP7.3', 'Symfony ', 'Ez-Platform', 'CSS3', 'SASS', 'Git', 'YouTrack', 'SourceTree'],
                }
            ],
            projects: [
                {
                    id: 0,
                    name: 'Image Classification',
                    link: '',
                    fromTo: ['January-2018', 'May-2018'],
                    description: 'Development of a Desktop Application for Image Classification Using Python and the TensorFlow Library for Machine Learning.\n' +
                        '\n',
                    tags: ['Python', 'TensorFlow']
                },
                {
                    id: 1,
                    name: 'SEOR Web application',
                    link: '',
                    fromTo: ['January-2016', 'May-2016'],
                    description: 'Development of a WEB application for the management of equipme for tntshe HSE department of the company SEOR using PHP 5.4 and pure CSS3 for a responsive interface.',
                    tags: ['PHP5.4', 'CSS3']
                }
            ],
            educations: [
                {
                    id: 0,
                    degree: 'Master Degree in Computer Science  ',
                    school: 'University of Science and Technologie Mohamed Boudiaf,Oran Algeria',
                    fromTo: ['Sept-2013', 'Mai-2018'],
                    description: '',
                    tags: []
                }
            ],
            skills: [
                {
                    name: 'php',
                    level: 75
                },
                {
                    name: 'laravel',
                    level: 75
                },
                {
                    name: 'js',
                    level: 75
                },
                {
                    name: 'vueJs',
                    level: 50
                },
                {
                    name: 'jQuery',
                    level: 50
                },
                {
                    name: 'css',
                    level: 75
                },
                {
                    name: 'bootstrap',
                    level: 75
                },                {
                    name: 'foundation',
                    level: 75
                },
                {
                    name: 'Illustrator',
                    level: 50
                },
            ],
            languages: [
                {
                    name: 'arabic',
                    level: 'Fluent'
                },
                {
                    name: 'french',
                    level: 'Conversational'
                },
                {
                    name: 'english',
                    level: 'Conversational'
                }
            ],
            interests: [
                'Sport (running)',
                'Video Game',
                'Drawing'
            ],
        },
        socialNetworksList: [
            { value: null, text: 'Please select an social media' },
            { value: 'linkedin-in', text: 'LinkedIn', url: 'https://www.linkedin.com/in/'},
            { value: 'facebook', text: 'Facebook', url: 'https://www.facebook.com/'},
            { value: 'instagram', text: 'Instagram', url: 'https://www.instagram.com/'},
            //todo: add more social networks
        ],
        levels: [
            { value: null, text: 'Please select the Level' },
            { value: '50', text: 'Beginner' },
            { value: '75', text: 'Intermediate' },
            { value: '100', text: 'Expert' },
        ],
        LangLevels: [
            { value: null, text: 'Please select the Level' },
            { value: 'Beginner', text: 'Beginner' },
            { value: 'Conversational ', text: 'Conversational ' },
            { value: 'Business ', text: 'Business ' },
            { value: 'Fluent', text: 'Fluent' },
        ]
    },
    getters: {
        getSocialNetworksList: state => { return  state.socialNetworksList },
        getFullName: state => { return  state.form.fullName },
        getJob: state => { return  state.form.job },
        getPhone: state => { return  state.form.phone },
        getEmail: state => { return  state.form.email },
        getLinks: state => { return  state.form.links },
        getSocialNetworks: state => { return  state.form.socialNetworks },
        getResume: state => { return  state.form.resume },
        getExperiences: state => { return  state.form.experiences },
        getProjects: state => { return  state.form.projects },
        getEducations: state => { return  state.form.educations },
        getSkills: state => { return  state.form.skills },
        getLanguages: state => { return  state.form.languages },
        getInterests: state => { return  state.form.interests },
    },
    mutations: {
        updateStateField (state, payload) {
            // mutate state
            state.form[payload.field] = payload.value
        },
        appendStateField (state, payload) {
            // mutate state
            state.form[payload.field].push(payload.value)
        }
    },
});